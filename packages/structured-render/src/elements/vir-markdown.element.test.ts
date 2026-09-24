import {assert, assertWrap, check, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, unsafeCSS} from 'element-vir';
import {contentDivClass, defaultMarkdownRenderStyles} from '../render/render-markdown-styles.js';
import {extractMarkdownDataAttributes, VirMarkdown} from './vir-markdown.element.js';

async function renderMarkdown({
    allowDevDebug,
    markdownString,
}: Readonly<{
    allowDevDebug?: boolean | undefined;
    markdownString: string;
}>) {
    const markdownElement = await testWeb.renderElement(VirMarkdown, {
        allowDevDebug,
        markdownString,
    });
    const renderedElement = await waitUntil.instanceOf(HTMLElement, () => {
        return markdownElement.shadowRoot.querySelector(`.${contentDivClass}`);
    });

    return {
        markdownElement,
        renderedElement,
    };
}

describe('vir-markdown.element.ts', () => {
    it('assigns heading IDs and follows internal anchors', async () => {
        const {renderedElement} = await renderMarkdown({
            markdownString: [
                '<details><summary>Details</summary><h2 id="details">Details heading</h2></details>',
                '',
                '[Jump to details](#details)',
                '',
                '# Repeated heading',
                '',
                '# Repeated heading',
            ].join('\n'),
        });
        const link = assertWrap.instanceOf(renderedElement.querySelector('a'), HTMLAnchorElement);
        const details = assertWrap.instanceOf(
            renderedElement.querySelector('details'),
            HTMLDetailsElement,
        );
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });

        link.dispatchEvent(clickEvent);

        assert.deepEquals(
            [...renderedElement.querySelectorAll('h1')].map((heading) => {
                return heading.id;
            }),
            [
                'repeated-heading',
                'repeated-heading-1',
            ],
        );
        assert.isTrue(clickEvent.defaultPrevented);
        assert.isTrue(details.open);
    });

    it('keeps an anchor target on screen while its details element animates open', async () => {
        const markdownElement = await testWeb.renderElement(VirMarkdown, {
            markdownString: [
                '[Jump to source](#source-1)',
                '',
                '<div style="height: 2000px">spacer</div>',
                '',
                '<details><summary>Sources</summary>',
                '',
                '<div style="height: 1000px">filler</div>',
                '',
                '### Source 1',
                '',
                '<div style="height: 2000px">filler</div>',
                '',
                '</details>',
            ].join('\n'),
            renderStyles: css`
                ${unsafeCSS(defaultMarkdownRenderStyles)}

                .${unsafeCSS(contentDivClass)} {
                    interpolate-size: allow-keywords;
                }

                details::details-content {
                    height: 0;
                    overflow: clip;
                    transition:
                        height 300ms,
                        content-visibility 300ms allow-discrete;
                }

                details[open]::details-content {
                    height: auto;
                }
            `,
        });
        const renderedElement = await waitUntil.instanceOf(HTMLElement, () => {
            return markdownElement.shadowRoot.querySelector(`.${contentDivClass}`);
        });

        await testWeb.click(
            assertWrap.instanceOf(renderedElement.querySelector('a'), HTMLAnchorElement),
        );
        await waitUntil.isTrue(() => {
            return (
                Math.abs(
                    assertWrap
                        .isDefined(renderedElement.querySelector('#source-1'))
                        .getBoundingClientRect().top,
                ) < 1
            );
        });
    });

    it('extracts Markdown data attributes from a click target and its ancestors', async () => {
        const {markdownElement, renderedElement} = await renderMarkdown({
            markdownString:
                '<button data-md-action="copy" data-ignored="ignored"><span data-md-item-id="item-2">Copy</span></button>',
        });
        const clickTarget = assertWrap.instanceOf(
            renderedElement.querySelector('span'),
            HTMLSpanElement,
        );
        const dataAttributes = await new Promise((resolve) => {
            markdownElement.addEventListener(
                'click',
                (event) => {
                    resolve(extractMarkdownDataAttributes(event));
                },
                {
                    once: true,
                },
            );
            clickTarget.dispatchEvent(
                new MouseEvent('click', {
                    bubbles: true,
                    composed: true,
                }),
            );
        });

        assert.deepEquals(dataAttributes, [
            {
                name: 'item-id',
                value: 'item-2',
            },
            {
                name: 'action',
                value: 'copy',
            },
        ]);
    });

    it('replaces Markdown with a developer-uploaded file', async () => {
        const {markdownElement} = await renderMarkdown({
            allowDevDebug: true,
            markdownString: '# Original Markdown',
        });
        const uploadInput = assertWrap.instanceOf(
            markdownElement.shadowRoot.querySelector('input[type="file"]'),
            HTMLInputElement,
        );
        const uploadData = new DataTransfer();

        uploadData.items.add(
            new File(
                [
                    '# Uploaded Markdown',
                ],
                'uploaded.md',
                {
                    type: 'text/markdown',
                },
            ),
        );
        uploadInput.files = uploadData.files;
        uploadInput.dispatchEvent(new Event('change'));

        const uploadFiles = assertWrap.isDefined(uploadInput.files);
        const uploadedFile = assertWrap.isDefined(uploadFiles.item(0));

        assert.strictEquals(uploadedFile.name, 'uploaded.md');

        await waitUntil.isTrue(() => {
            const updatedRenderedElement = markdownElement.shadowRoot.querySelector(
                `.${contentDivClass}`,
            );

            return (
                check.instanceOf(updatedRenderedElement, HTMLElement) &&
                updatedRenderedElement.textContent.includes('Uploaded Markdown')
            );
        });
        const updatedRenderedElement = assertWrap.instanceOf(
            markdownElement.shadowRoot.querySelector(`.${contentDivClass}`),
            HTMLElement,
        );

        assert.isFalse(updatedRenderedElement.textContent.includes('Original Markdown'));
    });
});
