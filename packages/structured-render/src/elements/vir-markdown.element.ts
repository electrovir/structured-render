import {combineErrorMessages} from '@augment-vir/common';
import DOMPurify from 'dompurify';
import {
    asyncProp,
    css,
    defineElement,
    html,
    onDomCreated,
    renderAsync,
    unsafeHTML,
    type CSSResult,
} from 'element-vir';
import {marked} from 'marked';
import {LoaderAnimated24Icon, ViraError, ViraIcon} from 'vira';
import {insertStyleSheet} from '../augments/shadow-styles.js';
import {contentDivClass, defaultMarkdownRenderStyles} from '../render/render-markdown-styles.js';

/**
 * Safely renders markdown content as HTML. Used internal for rendering markdown Structured Render
 * sections but this can be used to render _any_ markdown.
 *
 * @category Elements
 */
export const VirMarkdown = defineElement<{
    markdownString: string;
    renderStyles?: string | CSSResult | undefined;
}>()({
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
            sanitizedHtml: asyncProp({
                async updateCallback(markdownString: string): Promise<string> {
                    const htmlContent = await marked.parse(markdownString);
                    return DOMPurify.sanitize(htmlContent);
                },
            }),
            /** Used to control when we need to replace stylesheets. */
            lastStyleString: '',
        };
    },
    render({inputs, state, updateState, host}) {
        state.sanitizedHtml.update(inputs.markdownString);

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

        return renderAsync(
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
                        ${onDomCreated((element) => {
                            if (element instanceof HTMLElement) {
                                updateState({renderedElement: element});
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
        );
    },
});
