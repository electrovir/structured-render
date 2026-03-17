import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {StatusSuccess24Icon, ViraColorVariant} from 'vira';
import {sectionsBookPage} from '../sections.book.js';

export const listSectionBookPage = defineBookPage({
    title: 'List',
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
                            type: StructuredRenderSectionType.list,
                            sectionTitle: 'List Example',
                            items: [
                                {
                                    content: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'First item',
                                    },
                                },
                                {
                                    content: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Second item',
                                    },
                                },
                                {
                                    content: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Third item',
                                    },
                                },
                            ],
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with icons',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.list,
                            sectionTitle: 'List with Icons',
                            items: [
                                {
                                    content: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Completed task',
                                    },
                                    icon: {
                                        type: StructuredRenderSectionType.icon,
                                        iconKey: StatusSuccess24Icon.name,
                                        strokeColor: 'green',
                                    },
                                },
                                {
                                    content: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Another completed task',
                                    },
                                    icon: {
                                        type: StructuredRenderSectionType.icon,
                                        iconKey: StatusSuccess24Icon.name,
                                        strokeColor: 'green',
                                    },
                                },
                            ],
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with tags',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.list,
                            sectionTitle: 'List with Tags',
                            items: [
                                {
                                    content: {
                                        type: StructuredRenderSectionType.tag,
                                        text: 'Important',
                                        color: {
                                            variant: ViraColorVariant.Warning,
                                        },
                                    },
                                },
                                {
                                    content: {
                                        type: StructuredRenderSectionType.tag,
                                        text: 'Info',
                                    },
                                },
                            ],
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
