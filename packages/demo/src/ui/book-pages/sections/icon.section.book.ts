import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {demoIcons} from '../../demo-icons.js';
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
                        options: {
                            icons: demoIcons,
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: demoIcons.Star.name,
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
                        options: {
                            icons: demoIcons,
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: demoIcons.Star.name,
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
                        options: {
                            icons: demoIcons,
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: demoIcons.CircleCheck.name,
                            fillColor: 'lime',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
