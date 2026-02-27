import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const inlineCodeSectionBookPage = defineBookPage({
    title: 'Inline Code',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.inlineCode,
                            sectionTitle: 'Inline Code Example',
                            code: 'const x = 42;',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
