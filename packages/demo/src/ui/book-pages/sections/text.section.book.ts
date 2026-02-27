import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {
    StructuredRenderSectionType,
    StructuredRenderTextStyle,
    VirStructuredRender,
} from 'structured-render';
import {Star24Icon} from 'vira';
import {sectionsBookPage} from '../sections.book.js';

export const textSectionBookPage = defineBookPage({
    title: 'Text',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.text,
                            sectionTitle: 'Text Example',
                            text: 'This is a simple text section.',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'bold',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.text,
                            text: 'Bold text section.',
                            style: StructuredRenderTextStyle.Bold,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'small',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.text,
                            text: 'Small text section.',
                            style: StructuredRenderTextStyle.Small,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'faint',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.text,
                            text: 'Faint text section.',
                            style: StructuredRenderTextStyle.Faint,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with icon',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.text,
                            text: 'Text with icon.',
                            icon: {
                                type: StructuredRenderSectionType.icon,
                                iconKey: Star24Icon.name,
                                strokeColor: 'gold',
                            },
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
