import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {VirStructuredRender} from 'structured-render';
import {cardsBookPage} from '../cards.book.js';
import {multiCardMock} from './multi-card.book.js';

export const expandAllBookPage = defineBookPage({
    title: 'Expand All',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'Cards rendered with expandAllSections enabled, which starts all sections expanded but still allows toggling.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'all sections start expanded',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: multiCardMock,
                        options: {
                            expandAllSections: true,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
