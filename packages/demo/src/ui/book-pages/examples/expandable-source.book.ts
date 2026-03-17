import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {StructuredRenderSectionType, VirExpandableSource} from 'structured-render';
import {examplesBookPage} from '../examples.book.js';

export const expandableSourceBookPage = defineBookPage({
    title: 'Expandable Source',
    parent: examplesBookPage,
    descriptionParagraphs: [
        'Demonstrates VirExpandableSource, a self-contained element that renders a source icon button which expands to reveal source details.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'single source',
            styles: css`
                :host {
                    max-width: 400px;
                }
            `,
            render() {
                return html`
                    <${VirExpandableSource.assign({
                        sources: {
                            type: StructuredRenderSectionType.source,
                            fileName: 'example.pdf',
                            pageNumbers: [
                                3,
                            ],
                            fileBoundingBoxes: null,
                            quote: 'This is a quoted passage from the source document.',
                        },
                    })}>
                        <span>Some content with a source</span>
                    </${VirExpandableSource}>
                `;
            },
        });

        defineExample({
            title: 'multiple sources',
            styles: css`
                :host {
                    max-width: 400px;
                }
            `,
            render() {
                return html`
                    <${VirExpandableSource.assign({
                        sources: [
                            {
                                type: StructuredRenderSectionType.source,
                                fileName: 'report.pdf',
                                pageNumbers: [
                                    1,
                                    2,
                                ],
                                fileBoundingBoxes: null,
                                quote: 'First source quote.',
                            },
                            {
                                type: StructuredRenderSectionType.source,
                                fileName: 'notes.pdf',
                                pageNumbers: [
                                    5,
                                ],
                                fileBoundingBoxes: null,
                                quote: 'Second source quote.',
                            },
                        ],
                    })}>
                        <span>Content with multiple sources</span>
                    </${VirExpandableSource}>
                `;
            },
        });

        defineExample({
            title: 'without quote',
            styles: css`
                :host {
                    max-width: 400px;
                }
            `,
            render() {
                return html`
                    <${VirExpandableSource.assign({
                        sources: {
                            type: StructuredRenderSectionType.source,
                            fileName: 'data.csv',
                            pageNumbers: null,
                            fileBoundingBoxes: null,
                            quote: null,
                        },
                    })}>
                        <span>Content with a file-only source</span>
                    </${VirExpandableSource}>
                `;
            },
        });
    },
});
