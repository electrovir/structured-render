import {check} from '@augment-vir/assert';
import {combineErrorMessages, createArray, type PartialWithUndefined} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import DOMPurify from 'dompurify';
import {
    asyncProp,
    css,
    defineElement,
    html,
    listen,
    onDomCreated,
    renderAsync,
    unsafeHTML,
    type CSSResult,
} from 'element-vir';
import {marked} from 'marked';
import {LoaderAnimated24Icon, ViraError, ViraIcon} from 'vira';
import {insertStyleSheet} from '../augments/shadow-styles.js';
import {contentDivClass, defaultMarkdownRenderStyles} from '../render/render-markdown-styles.js';

async function convertMarkdownToSafeHtml(markdownString: string) {
    const sanitizedElement = DOMPurify.sanitize(await marked.parse(markdownString), {
        RETURN_DOM: true,
    });

    if (!check.instanceOf(sanitizedElement, HTMLElement)) {
        throw new Error('Failed to sanitize Markdown HTML.');
    }

    const usedIds = [...sanitizedElement.querySelectorAll('[id]')].map((element) => {
        return element.id;
    });

    const headings = [...sanitizedElement.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6')];

    headings.forEach((heading, index) => {
        if (heading.id) {
            return;
        }
        /** Create unique heading ids for anchor points. */

        const baseId = (heading.textContent || '')
            .trim()
            .toLowerCase()
            .replace(/\s+/gu, '-')
            .replace(/[^\p{L}\p{N}_-]/gu, '');
        const currentIds = [
            ...usedIds,
            ...headings.slice(0, index).map((previousHeading) => {
                return previousHeading.id;
            }),
        ];

        heading.id =
            [
                baseId,
                ...createArray(currentIds.length, (suffix) => {
                    return `${baseId}-${suffix + 1}`;
                }),
            ].find((candidateId) => {
                return !currentIds.includes(candidateId);
            }) || baseId;
    });

    return sanitizedElement.innerHTML;
}

const markdownDataAttributePrefix = 'data-md-';

/**
 * Extracts `data-md-*` attributes from a Markdown click's target and ancestor elements, starting
 * with the clicked element. Attribute names do not include the `data-md-` prefix.
 *
 * @category Util
 */
export function extractMarkdownDataAttributes(event: Readonly<MouseEvent>) {
    return event.composedPath().flatMap((target) => {
        if (!check.instanceOf(target, HTMLElement)) {
            return [];
        }

        return [...target.attributes].flatMap((attribute) => {
            return attribute.name.startsWith(markdownDataAttributePrefix)
                ? [
                      {
                          name: attribute.name.slice(markdownDataAttributePrefix.length),
                          value: attribute.value,
                      },
                  ]
                : [];
        });
    });
}

function handleMarkdownAnchorClick({
    event,
    renderedElement,
}: Readonly<{
    event: MouseEvent;
    renderedElement: HTMLElement | undefined;
}>) {
    const link = event.composedPath().find((target) => {
        return check.instanceOf(target, HTMLAnchorElement);
    });
    const href = link?.getAttribute('href');
    const target =
        href?.startsWith('#') && href.length > 1
            ? renderedElement?.querySelector<HTMLElement>(`#${CSS.escape(href.slice(1))}`)
            : undefined;

    if (!target) {
        return;
    }

    event.preventDefault();
    renderedElement?.querySelectorAll('details').forEach((details) => {
        if (details.contains(target)) {
            details.open = true;
        }
    });

    if (renderedElement) {
        scrollToWhileResizing({
            target,
            container: renderedElement,
        });
    }
}

/**
 * Keeps scrolling the target into view until the container stops resizing for 100ms. Scrolling once
 * is not enough: a just-opened details element may still be growing (from an open animation or lots
 * of content), which leaves the target off screen when it finishes.
 */
function scrollToWhileResizing({
    target,
    container,
}: Readonly<{
    target: Element;
    container: Element;
}>) {
    const timeout: {id?: ReturnType<typeof setTimeout> | undefined} = {};

    const resizeObserver = new ResizeObserver(() => {
        target.scrollIntoView({
            block: 'start',
        });
        clearTimeout(timeout.id);
        timeout.id = setTimeout(() => {
            resizeObserver.disconnect();
        }, 100);
    });

    resizeObserver.observe(container);
}

/**
 * Safely renders markdown content as HTML. Used internal for rendering markdown Structured Render
 * sections but this can be used to render _any_ markdown.
 *
 * @category Elements
 */
export const VirMarkdown = defineElement<
    {markdownString: string} & PartialWithUndefined<{
        renderStyles: string | CSSResult;
        allowDevDebug: boolean;
    }>
>()({
    tagName: 'vir-markdown',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,
    state() {
        return {
            renderedElement: undefined as HTMLElement | undefined,
            uploadedMarkdownString: undefined as string | undefined,
            sanitizedHtml: asyncProp({
                async updateCallback(markdownString: string) {
                    return convertMarkdownToSafeHtml(markdownString);
                },
            }),
            /** Used to control when we need to replace stylesheets. */
            lastStyleString: '',
        };
    },
    render({inputs, state, updateState, host}) {
        const markdownString =
            inputs.allowDevDebug && state.uploadedMarkdownString != undefined
                ? state.uploadedMarkdownString
                : inputs.markdownString;

        state.sanitizedHtml.update(markdownString);

        const styles = String(inputs.renderStyles || defaultMarkdownRenderStyles);

        if (
            insertStyleSheet({
                maintainFirstStylesheet: true,
                newStyles: styles,
                oldStyles: state.lastStyleString,
                shadowRoot: host.shadowRoot,
            })
        ) {
            updateState({
                lastStyleString: styles,
            });
        }

        return html`
            ${inputs.allowDevDebug
                ? html`
                      <input
                          accept=".md,.markdown,text/markdown"
                          aria-label="Upload Markdown file"
                          type="file"
                          ${listen('change', async (event) => {
                              const uploadedMarkdownFile = extractEventTarget(
                                  event,
                                  HTMLInputElement,
                              ).files?.item(0);

                              if (uploadedMarkdownFile == undefined) {
                                  return;
                              }

                              updateState({
                                  uploadedMarkdownString: await uploadedMarkdownFile.text(),
                              });
                          })}
                      />
                  `
                : undefined}
            ${renderAsync(
                state.sanitizedHtml,
                html`
                    <${ViraIcon.assign({
                        icon: LoaderAnimated24Icon,
                    })}></${ViraIcon}>
                `,
                (safeHtml) => {
                    return html`
                        <div
                            class=${contentDivClass}
                            ${listen('click', (event) => {
                                handleMarkdownAnchorClick({
                                    event,
                                    renderedElement: state.renderedElement,
                                });
                            })}
                            ${onDomCreated((element) => {
                                if (element instanceof HTMLElement) {
                                    updateState({
                                        renderedElement: element,
                                    });
                                }
                            })}
                        >
                            ${unsafeHTML(safeHtml)}
                        </div>
                    `;
                },
                (error) => {
                    return html`
                        <${ViraError}>
                            ${combineErrorMessages('Failed to parse markdown content.', error)}
                        </${ViraError}>
                    `;
                },
            )}
        `;
    },
});
