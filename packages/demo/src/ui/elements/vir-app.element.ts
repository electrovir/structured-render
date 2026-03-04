import {ElementBookApp} from 'element-book';
import {css, defineElement, html} from 'element-vir';
import {noNativeSpacing} from 'vira';
import {allBookPages} from '../book-pages/all-book-pages.js';

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-grow: 1;
        }

        ${ElementBookApp} {
            flex-grow: 1;
        }

        p {
            ${noNativeSpacing}
            text-align: center;
            font-size: 32px;
            font-weight: bold;
            padding: 0 8px;
            padding-bottom: 8px;
        }
    `,
    render() {
        return html`
            <${ElementBookApp.assign({
                pages: allBookPages,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'structured-render/demo',
                },
            })}>
                <p slot=${ElementBookApp.slotNames.navHeader}>Structured<br>Render</p>
            </${ElementBookApp}>
        `;
    },
});
