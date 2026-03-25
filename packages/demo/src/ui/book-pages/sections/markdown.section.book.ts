import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const markdownSectionBookPage = defineBookPage({
    title: 'Markdown',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Markdown Example',
                            markdown:
                                '## Hello World\n\nThis is **bold** and _italic_ text.\n\n- Item 1\n- Item 2\n- Item 3',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with ordered list',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Ordered List Example',
                            markdown:
                                '1. **False Positives**: Name and DOB matches may not always indicate the same patient.\n2. **Data Currency**: Registry data may lag behind real-time clinical status.\n3. **Legal Compliance**: Ensure all data sharing follows applicable regulations.',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with code',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Markdown with Code',
                            markdown:
                                '### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
