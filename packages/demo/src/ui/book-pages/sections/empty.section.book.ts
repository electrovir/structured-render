import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const emptySectionBookPage = defineBookPage({
    title: 'Empty',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'empty',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.empty,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
