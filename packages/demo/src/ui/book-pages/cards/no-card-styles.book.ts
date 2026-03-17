import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {VirStructuredRender} from 'structured-render';
import {cardsBookPage} from '../cards.book.js';
import {multiCardMock} from './multi-card.book.js';

export const noCardStylesBookPage = defineBookPage({
    title: 'No Card Styles',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'Cards rendered without card wrapper styles. Cards stack flush with thin borders between them.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'flat card list',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: multiCardMock,
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
