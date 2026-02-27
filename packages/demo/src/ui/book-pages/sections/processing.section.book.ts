import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const processingSectionBookPage = defineBookPage({
    title: 'Processing',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.processing,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
