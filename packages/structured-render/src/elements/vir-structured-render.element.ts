import {type PartialWithUndefined} from '@augment-vir/common';
import {colorCss} from '@electrovir/color';
import {css, defineElement, html, listen, unsafeCSS} from 'element-vir';
import {themeDefaultKey} from 'theme-vir';
import {
    noNativeFormStyles,
    noNativeSpacing,
    viraFormCssVars,
    ViraIcon,
    ViraTag,
    viraTheme,
} from 'vira';
import {insertStyleSheet} from '../augments/shadow-styles.js';
import {renderStructuredHtml, SourceExpansionEvent} from '../render/render-html.js';
import {contentDivClass, defaultMarkdownRenderStyles} from '../render/render-markdown-styles.js';
import {type RenderHtmlOptions, type RenderInput} from '../render/render-types.js';
import {StructuredRenderTextStyle} from '../structured-render-data/sections/text.section.js';

const iconRightMargin = css`4px`;

/**
 * Used to render Structured Render data to the DOM. This is the easiest way, if you use
 * element-vir, to include Structured Render data in your web app. You can also use
 * {@link renderStructuredHtml} to render Structured Render data to raw HTML.
 *
 * @category Elements
 */
export const VirStructuredRender = defineElement<{
    data: Readonly<RenderInput>;
    options?:
        | Readonly<
              PartialWithUndefined<
                  RenderHtmlOptions & {
                      /**
                       * If `true`, smaller, tablet-compatible styles are used.
                       *
                       * @default false
                       */
                      isTabletSize: boolean;
                      /**
                       * If `true`, smaller, phone-compatible styles are used.
                       *
                       * @default false
                       */
                      isPhoneSize: boolean;
                  }
              >
          >
        | undefined;
}>()({
    tagName: 'vir-structured-render',
    state() {
        return {
            currentlyExpanded: {} as Record<string, boolean>,
            lastStyleString: '',
        };
    },
    cssVars: {
        'vir-structured-render-h1-font-size': '24px',
        'vir-structured-render-h2-font-size': '18px',
        'vir-structured-render-h3-font-size': '16px',
        'vir-structured-render-small-font-size': '12px',
    },
    hostClasses: {
        'vir-structured-render-phone-size': ({inputs}) => !!inputs.options?.isPhoneSize,
        'vir-structured-render-tablet-size': ({inputs}) => !!inputs.options?.isTabletSize,
    },
    styles: ({cssVars, hostClasses}) => css`
        :host {
            ${colorCss(viraTheme.colors[themeDefaultKey])}
        }

        ${ViraIcon} {
            flex-shrink: 0;
        }

        :host,
        .${unsafeCSS(contentDivClass)}.${unsafeCSS(contentDivClass)}.${unsafeCSS(contentDivClass)} {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        .view-header {
            display: flex;
            flex-grow: 1;
            justify-content: space-between;

            & .title-wrapper {
                display: flex;
                gap: 32px;
                align-items: center;
                text-align: left;

                & h2 {
                    font-size: ${cssVars['vir-structured-render-h2-font-size'].value};
                }
            }

            & ${ViraTag} {
                font-size: 14px;
            }

            & .risk-counts {
                display: flex;
                gap: 4px;
            }

            & .header-risk {
                flex-wrap: wrap;
                margin-left: auto;
                display: flex;
                gap: 8px;
            }

            & .risk-count {
                display: flex;
                align-items: center;
                gap: 4px;

                & .risk-count-number {
                    font-size: 16px;
                    font-family: monospace;
                    width: 3ch;
                    text-align: left;
                }
            }
        }

        .text-style-${unsafeCSS(StructuredRenderTextStyle.Faint)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Faint,
            )}.text-style-${unsafeCSS(StructuredRenderTextStyle.Faint)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Faint,
            )} {
            color: ${viraTheme.colors['vira-grey-foreground-non-body'].foreground.value};
        }
        .text-style-${unsafeCSS(StructuredRenderTextStyle.Bold)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Bold,
            )}.text-style-${unsafeCSS(StructuredRenderTextStyle.Bold)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Bold,
            )} {
            font-weight: bold;
        }
        .text-style-${unsafeCSS(StructuredRenderTextStyle.Small)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Small,
            )}.text-style-${unsafeCSS(StructuredRenderTextStyle.Small)}.text-style-${unsafeCSS(
                StructuredRenderTextStyle.Small,
            )} {
            font-size: ${cssVars['vir-structured-render-small-font-size'].value};
        }

        table {
            border-collapse: collapse;
            max-width: 100%;

            & th,
            & td {
                padding: 16px;
                padding-left: 24px;

                &:first-child {
                    padding-left: 0;
                }

                &:has(+ .source-cell) {
                    border-right: none;
                    padding-right: 0;
                }

                &.source-cell {
                    border-left: none !important;
                    padding: 0;
                    padding-left: 4px;
                }
            }

            & td {
                word-break: break-word;
            }

            & th {
                text-align: left;
                font-weight: normal;
                white-space: nowrap;
                vertical-align: top;
            }

            &.wide-table {
                font-size: 14px;

                & th,
                & td {
                    padding: 4px;
                    padding-left: 8px;

                    &:first-child {
                        padding-left: 0;
                    }
                }
            }

            &.vertical {
                align-self: flex-start;

                & th {
                    font-weight: bold;
                }
            }

            &.horizontal {
                align-self: flex-start;
            }

            & .source-row td {
                border: none !important;
                padding: 0 !important;
            }

            & tfoot {
                font-size: ${cssVars['vir-structured-render-h2-font-size'].value};
                font-weight: bold;

                & td {
                    border: none;
                }

                & td.right-aligned-footer-cell {
                    text-align: right;
                    & > .section-wrapper {
                        display: inline-flex;
                    }
                }
            }
        }

        .card-title-with-icon {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .expanded-source {
            margin: 8px 0 !important;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        .processing-wrapper {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .section-wrapper {
            display: flex;
            flex-direction: column;

            & .source-content-wrapper {
                display: flex;
            }

            & .collapsible-source-wrapper {
                border: none;
            }

            & .text-section-text-content {
                flex-grow: 1;
                vertical-align: middle;
            }

            & .source-icon-button {
                ${noNativeFormStyles};
                cursor: pointer;
                color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};
                padding: 2px;
                border-radius: 4px;

                & ${ViraIcon} {
                    display: flex;
                }

                &:hover {
                    background-color: ${viraTheme.colors['vira-grey-behind-fg-small-body']
                        .background.value};
                    color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
                }

                &:active {
                    background-color: ${viraTheme.colors['vira-grey-behind-fg-body'].background
                        .value};
                    color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
                }
            }
        }

        .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
            margin-left: auto;
            justify-content: flex-end;
            align-items: center;
            display: flex;
            flex-shrink: 0;
            align-self: top;

            & ${ViraIcon} {
                width: 20px;
                height: 20px;
            }
        }

        .${unsafeCSS(contentDivClass)}.${unsafeCSS(contentDivClass)}.${unsafeCSS(
                contentDivClass,
            )}.${unsafeCSS(contentDivClass)} {
            ul {
                ${noNativeSpacing}
                flex-grow: 1;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }
        }

        .source-content-wrapper {
            > *:last-child:not(table) {
                flex-grow: 1;
            }
        }

        li {
            display: flex;
            flex-direction: column;

            &:not(.list-item-with-icon) > *:first-child::before {
                content: '•';
                flex-shrink: 0;
                width: 24px;
                margin-right: ${iconRightMargin};
                line-height: 24px;
                display: flex;
                justify-content: center;
            }
        }

        pre {
            flex-grow: 1;
            font-family: monospace;
        }

        .icon-section {
            display: inline-flex;
            vertical-align: middle;
        }

        .text-section {
            display: inline-flex;
        }

        .icon-section:first-child:has(+ *) {
            margin-right: ${iconRightMargin};
        }

        .processing-section .source-content-wrapper {
            display: flex;
            gap: 4px;
        }

        .collapsible-section {
            align-items: flex-start;
        }

        .tag-section {
            display: inline-flex;
            vertical-align: middle;
        }
        .processing-section {
            display: inline-flex;
            vertical-align: middle;
            flex-direction: row;
            gap: 4px;
        }

        ${hostClasses['vir-structured-render-phone-size'].selector} {
            font-size: ${cssVars['vir-structured-render-small-font-size'].value};

            & h2 {
                font-size: ${cssVars['vir-structured-render-h3-font-size'].value};
            }

            .view-header {
                flex-direction: column;
            }

            & th,
            & td {
                padding: 4px;
            }

            & ul {
                padding-left: 1em;
            }

            & ${ViraIcon} {
                width: 18px;
                height: 18px;
            }

            & li::marker {
                font-size: 0.7em;
            }

            & .phone-table-cards {
                display: flex;
                flex-direction: column;
                gap: 12px;

                & .phone-table-card {
                    padding: 8px 16px;

                    & th,
                    & td {
                        border: none;
                    }
                }
            }
        }

        ${hostClasses['vir-structured-render-tablet-size'].selector} {
            .view-header {
                flex-wrap: wrap;
            }
        }

        @media print {
            .source-icon-wrapper {
                display: none !important;
            }
        }
    `,
    render({inputs, state, updateState, host}) {
        const styles = String(inputs.options?.markdownStyles || defaultMarkdownRenderStyles);

        if (
            insertStyleSheet({
                maintainFirstStylesheet: true,
                newStyles: styles,
                oldStyles: state.lastStyleString,
                shadowRoot: host.shadowRoot,
            })
        ) {
            updateState({
                lastStyleString: styles,
            });
        }

        const templates = renderStructuredHtml(inputs.data, {
            ...inputs.options,
            currentlyExpanded: {
                ...inputs.options?.currentlyExpanded,
                ...state.currentlyExpanded,
            },
        });

        return html`
            <div
                ${listen(SourceExpansionEvent, (event) => {
                    updateState({
                        currentlyExpanded: {
                            ...state.currentlyExpanded,
                            [event.detail.key]: event.detail.expanded,
                        },
                    });
                })}
                class=${contentDivClass}
            >
                ${templates}
            </div>
        `;
    },
});
