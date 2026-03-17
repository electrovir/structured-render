import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {VirStructuredRender} from 'structured-render';
import {cardsBookPage} from '../cards.book.js';
import {multiCardMock} from './multi-card.book.js';

export const blockExpansionBookPage = defineBookPage({
    title: 'Block Expansion',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'Cards rendered with blockCardExpansion enabled, which forces all sections expanded and disables toggling.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'all sections locked open',
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
                            useCardStyles: true,
                            blockCardExpansion: true,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
