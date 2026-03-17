import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const tagSectionBookPage = defineBookPage({
    title: 'Tag',
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
                            type: StructuredRenderSectionType.tag,
                            sectionTitle: 'Tag Example',
                            text: 'Default Tag',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'custom colors',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.tag,
                            text: 'Custom Colors',
                            color: {
                                custom: {
                                    backgroundColor: '#e74c3c',
                                    foregroundColor: '#ffffff',
                                },
                            },
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'big tag',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.tag,
                            text: 'Big Tag',
                            useBigTag: true,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
