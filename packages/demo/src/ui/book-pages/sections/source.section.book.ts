import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const sourceSectionBookPage = defineBookPage({
    title: 'Source',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'with file name',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.source,
                            fileName: 'example.ts',
                            pageNumbers: null,
                            fileBoundingBoxes: null,
                            quote: null,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with quote',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.source,
                            fileName: 'document.pdf',
                            pageNumbers: [
                                1,
                                2,
                            ],
                            fileBoundingBoxes: null,
                            quote: 'This is the relevant quote from the source document.',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with page numbers',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.source,
                            fileName: 'report.pdf',
                            pageNumbers: [
                                5,
                                10,
                                15,
                            ],
                            fileBoundingBoxes: null,
                            quote: null,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
