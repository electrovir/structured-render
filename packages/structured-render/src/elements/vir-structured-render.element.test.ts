import {waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {VirMarkdown} from './vir-markdown.element.js';
import {VirStructuredRender} from './vir-structured-render.element.js';

describe('vir-structured-render.element.ts', () => {
    it('forwards devDebug to Markdown sections', async () => {
        const structuredRenderElement = await testWeb.renderElement(VirStructuredRender, {
            data: {
                markdown: '# Markdown heading',
                type: StructuredRenderSectionType.markdown,
            },
            options: {
                devDebug: true,
            },
        });
        const markdownElement = await waitUntil.instanceOf(VirMarkdown, () => {
            return structuredRenderElement.shadowRoot.querySelector(VirMarkdown.tagName);
        });

        await waitUntil.instanceOf(HTMLInputElement, () => {
            return markdownElement.shadowRoot.querySelector('input[type="file"]');
        });
    });
});
