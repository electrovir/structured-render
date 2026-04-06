import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {VirStructuredRender} from 'structured-render';
import {exampleCard} from 'structured-render/src/structured-render-data/structured-render-data.mock.js';
import {examplesBookPage} from '../examples.book.js';

export const exampleCardComparisonBookPage = defineBookPage({
    title: 'Example Card Comparison',
    parent: examplesBookPage,
    descriptionParagraphs: [
        'Renders exampleCard for visual comparison against the PDF screenshot test output.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'exampleCard',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: exampleCard,
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
