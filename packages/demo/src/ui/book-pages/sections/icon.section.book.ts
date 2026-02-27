import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {Star24Icon, StatusSuccess24Icon} from 'vira';
import {sectionsBookPage} from '../sections.book.js';

export const iconSectionBookPage = defineBookPage({
    title: 'Icon',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: Star24Icon.name,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
        defineExample({
            title: 'colored stroke',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: Star24Icon.name,
                            strokeColor: 'gold',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'colored fill',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: StatusSuccess24Icon.name,
                            fillColor: 'lime',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
