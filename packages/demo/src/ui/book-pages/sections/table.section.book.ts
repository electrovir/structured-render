import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    StructuredRenderCellDirection,
    StructuredRenderSectionType,
    VirStructuredRender,
} from 'structured-render';
import {ViraColorVariant} from 'vira';
import {sectionsBookPage} from '../sections.book.js';

export const tableSectionBookPage = defineBookPage({
    title: 'Table',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'horizontal',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.table,
                            sectionTitle: 'Horizontal Table',
                            direction: StructuredRenderCellDirection.Horizontal,
                            headers: [
                                {
                                    key: 'name',
                                },
                                {
                                    key: 'value',
                                },
                            ],
                            entries: [
                                {
                                    data: {
                                        name: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'Alpha',
                                        },
                                        value: {
                                            type: StructuredRenderSectionType.text,
                                            text: '100',
                                        },
                                    },
                                },
                                {
                                    data: {
                                        name: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'Beta',
                                        },
                                        value: {
                                            type: StructuredRenderSectionType.text,
                                            text: '200',
                                        },
                                    },
                                },
                            ],
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'vertical',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.table,
                            sectionTitle: 'Vertical Table',
                            direction: StructuredRenderCellDirection.Vertical,
                            headers: [
                                {
                                    key: 'feature',
                                },
                                {
                                    key: 'status',
                                },
                            ],
                            entries: [
                                {
                                    data: {
                                        feature: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'Image Export',
                                        },
                                        status: {
                                            type: StructuredRenderSectionType.tag,
                                            text: 'Supported',
                                        },
                                    },
                                },
                                {
                                    data: {
                                        feature: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'PDF Export',
                                        },
                                        status: {
                                            type: StructuredRenderSectionType.tag,
                                            text: 'Beta',
                                        },
                                    },
                                },
                            ],
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'horizontal table with phone size',
            render() {
                return html`
                    <div
                        style=${css`
                            width: 400px;
                        `}
                    >
                        <${VirStructuredRender.assign({
                            data: {
                                type: StructuredRenderSectionType.table,
                                sectionTitle: 'Horizontal Table (Phone)',
                                direction: StructuredRenderCellDirection.Horizontal,
                                headers: [
                                    {
                                        key: 'name',
                                    },
                                    {
                                        key: 'value',
                                    },
                                    {
                                        key: 'status',
                                    },
                                ],
                                entries: [
                                    {
                                        data: {
                                            name: {
                                                type: StructuredRenderSectionType.text,
                                                text: 'Alpha',
                                            },
                                            value: {
                                                type: StructuredRenderSectionType.text,
                                                text: '100',
                                            },
                                            status: {
                                                type: StructuredRenderSectionType.tag,
                                                text: 'Active',
                                                color: {
                                                    variant: ViraColorVariant.Positive,
                                                },
                                            },
                                        },
                                    },
                                    {
                                        data: {
                                            name: {
                                                type: StructuredRenderSectionType.text,
                                                text: 'Beta',
                                            },
                                            value: {
                                                type: StructuredRenderSectionType.text,
                                                text: '200',
                                            },
                                            status: {
                                                type: StructuredRenderSectionType.tag,
                                                text: 'Inactive',
                                                color: {
                                                    variant: ViraColorVariant.Warning,
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                            options: {
                                useCardStyles: true,
                                isPhoneSize: true,
                                useDrawerForSources: true,
                            },
                        })}></${VirStructuredRender}>
                    </div>
                `;
            },
        });

        defineExample({
            title: 'with mixed cell types',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.table,
                            sectionTitle: 'Mixed Cell Types',
                            direction: StructuredRenderCellDirection.Horizontal,
                            headers: [
                                {
                                    key: 'label',
                                },
                                {
                                    key: 'detail',
                                },
                            ],
                            entries: [
                                {
                                    data: {
                                        label: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'Status',
                                        },
                                        detail: {
                                            type: StructuredRenderSectionType.tag,
                                            text: 'Active',
                                            color: {
                                                variant: ViraColorVariant.Positive,
                                            },
                                        },
                                    },
                                },
                                {
                                    data: {
                                        label: {
                                            type: StructuredRenderSectionType.text,
                                            text: 'Version',
                                        },
                                        detail: {
                                            type: StructuredRenderSectionType.inlineCode,
                                            code: 'v1.0.0',
                                        },
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
