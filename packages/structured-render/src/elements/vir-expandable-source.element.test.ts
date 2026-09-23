import {assertWrap, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, html} from 'element-vir';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {VirExpandableSource} from './vir-expandable-source.element.js';

describe('vir-expandable-source.element.ts', () => {
    it('scrolls an expanding source onto the screen', async () => {
        const expandableSource = assertWrap.instanceOf(
            await testWeb.render(html`
                <${VirExpandableSource.assign({
                    sources: {
                        type: StructuredRenderSectionType.source,
                        fileName: 'example.pdf',
                        pageNumbers: [
                            3,
                        ],
                        fileBoundingBoxes: null,
                        quote: 'A quoted passage.',
                    },
                })}>
                    <div
                        style=${css`
                            height: ${window.innerHeight - 20}px;
                        `}
                    >
                        Tall content
                    </div>
                </${VirExpandableSource}>
            `),
            VirExpandableSource,
        );

        await testWeb.click(
            assertWrap.isDefined(expandableSource.shadowRoot.querySelector('.source-icon-button')),
        );

        await waitUntil.isTrue(() => {
            const sourceRect = assertWrap
                .isDefined(expandableSource.shadowRoot.querySelector('.collapsible-source-wrapper'))
                .getBoundingClientRect();

            return sourceRect.height > 0 && sourceRect.top <= window.innerHeight - 50;
        });
    });
});
