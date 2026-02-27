import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const codeBlockSectionBookPage = defineBookPage({
    title: 'Code Block',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.codeBlock,
                            sectionTitle: 'Code Block Example',
                            code: 'const hello = "world";\nconsole.log(hello);',
                            syntax: 'typescript',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'no syntax',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.codeBlock,
                            code: 'plain text code block\nwith multiple lines',
                            syntax: null,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
