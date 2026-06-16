import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

const exampleText = [
    'This is a longer block of text that demonstrates how the copy card renders',
    'multi-line content. The copy button on the top right writes the full text',
    'to the clipboard and briefly flips its label to confirm the copy succeeded.',
    'Provide an optional header above to label the contents of the card.',
].join(' ');

export const copyCardSectionBookPage = defineBookPage({
    title: 'Copy Card',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'with header',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.copyCard,
                            header: 'Example Header',
                            text: exampleText,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'without header',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.copyCard,
                            text: 'A short snippet of copyable text without a heading.',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'copy disabled',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.copyCard,
                            header: 'Read-only Block',
                            text: 'This card hides the copy button.',
                            disableCopy: true,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
