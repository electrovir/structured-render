import {check} from '@augment-vir/assert';
import {
    mapObjectValues,
    mergeDefinedProperties,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {css, CSSResult, unsafeCSS} from 'element-vir';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {noNativeSpacing, viraFormCssVars, viraTheme} from 'vira';

/**
 * The id attached to the content div which will be rendered to the PDF or image. Use this to create
 * style selectors.
 *
 * @category Internal
 */
export const contentDivClass = 'structured-rendering-markdown-rendering-content-for-screenshot';

/**
 * Base CSS reset styles that are always applied to the content div, regardless of custom style
 * overrides. These ensure no unwanted whitespace from default browser margins on the first and last
 * child elements.
 *
 * @category Internal
 */
export const baseContentResetStyles = `
.${contentDivClass} > *:first-child {
    margin-top: 0;
}
.${contentDivClass} > *:last-child {
    margin-bottom: 0;
}
`;

/**
 * The standard rendering style configuration.
 *
 * @category Internal
 */
export const defaultMarkdownStyleConfiguration = {
    accentColor: viraFormCssVars['vira-form-accent-primary-color'].value,
    bodySize: '14px',
    h1Size: '22px',
    h2Size: '18px',
    h3Size: '16px',
    h4Size: '15px',
    h5Size: '14px',
    h6Size: '14px',
    bodyGap: '24px',
    smallTextSize: '10px',
    liSpacing: '4px',
    bodyFont: 'sans-serif',
    codeFont: 'monospace',
    codeSize: '1em',
    codeBackgroundColor: viraTheme.colors['vira-grey-behind-fg-highest-contrast'].background.value,
    /** The selector used that all styles will be applied to. */
    contentSelector: `.${contentDivClass}`,
    tableBorderColor: viraTheme.colors['vira-grey-foreground-decoration'].foreground.value,
    tableBorderWidth: '1px',
    tableHeaderBackgroundColor:
        viraTheme.colors['vira-grey-behind-fg-highest-contrast'].background.value,
};

/**
 * The standard rendering style configuration.
 *
 * @category Internal
 */
export type MarkdownStyleConfiguration = Record<
    keyof typeof defaultMarkdownStyleConfiguration,
    string | CSSResult | SingleCssVarDefinition
>;

function resolveMarkdownStyleConfiguration(
    styleOptions: PartialWithUndefined<MarkdownStyleConfiguration> | undefined,
): Record<keyof MarkdownStyleConfiguration, CSSResult> {
    return mapObjectValues(
        mergeDefinedProperties<MarkdownStyleConfiguration>(
            defaultMarkdownStyleConfiguration,
            styleOptions,
        ),
        (key, value) => {
            return check.isString(value)
                ? unsafeCSS(value)
                : value instanceof CSSResult
                  ? value
                  : value.value;
        },
    );
}

/**
 * Default plain styles for markdown converted to HTML.
 *
 * @category Internal
 */
export const defaultMarkdownRenderStyles = configureDefaultMarkdownRenderStyles();

/**
 * Configure a stylesheet for rendering.
 *
 * @category Internal
 */
export function configureDefaultMarkdownRenderStyles(
    styleOptions?: PartialWithUndefined<MarkdownStyleConfiguration> | undefined,
) {
    const styles = resolveMarkdownStyleConfiguration(styleOptions);

    return css`
        ${unsafeCSS(
            styleOptions?.contentSelector || defaultMarkdownStyleConfiguration.contentSelector,
        )} {
            display: flex;
            flex-direction: column;
            gap: ${styles.bodyGap};
            font-family: ${styles.bodyFont};
            font-size: ${styles.bodySize};
            align-items: flex-start;

            & * {
                font-family: inherit;
                font-size: inherit;
                ${noNativeSpacing}
            }

            & h1 {
                font-size: ${styles.h1Size};
            }
            & h2 {
                font-size: ${styles.h2Size};
            }
            & h3 {
                font-size: ${styles.h3Size};
            }
            & h4 {
                font-size: ${styles.h4Size};
            }
            & h5 {
                font-size: ${styles.h5Size};
            }
            & h6 {
                font-size: ${styles.h6Size};
            }
            & ul,
            & ol {
                padding-left: 1.1em;
                & li {
                    margin-bottom: ${styles.liSpacing};
                }
            }
            & ol {
                padding-left: 1.5em;
            }
            & strong {
                font-weight: bold;
            }
            & em {
                font-style: italic;
            }
            & code {
                background-color: ${styles.codeBackgroundColor};
                padding: 2px 6px;
                border-radius: 4px;
                font-family: ${styles.codeFont};
                font-size: ${styles.codeSize};
            }

            .inlineCode-section {
                display: inline-flex;
            }

            & pre {
                background-color: ${styles.codeBackgroundColor};
                padding: 2px 12px 6px;
                border-radius: 6px;
                white-space: pre-wrap;
                overflow-x: auto;
                font-family: ${styles.codeFont};
                font-size: ${styles.codeSize};

                & code {
                    background-color: transparent;
                    padding: 0;
                }
            }

            & blockquote {
                border-left: 4px solid ${styles.accentColor};
                padding-left: 16px;
                margin-left: 0;
                font-style: italic;
            }

            & hr {
                border: none;
                border-top: 1px solid currentColor;
                margin: 20px 0;
            }

            & small {
                font-size: ${styles.smallTextSize};
            }

            & th,
            & td {
                border-top: ${styles.tableBorderWidth} solid ${styles.tableBorderColor};
                border-left: ${styles.tableBorderWidth} solid ${styles.tableBorderColor};
                padding: 8px 12px;
                text-align: left;
            }

            & thead tr:first-child th,
            & thead tr:first-child td,
            & tbody tr:first-child th,
            & tbody tr:first-child td {
                border-top-color: transparent;
            }

            & thead + tbody tr:first-child {
                & td,
                & th {
                    border-top-color: ${styles.tableBorderColor};
                }
            }

            & table {
                border-collapse: collapse;
                max-width: 100%;

                & th:first-child,
                & td:first-child {
                    border-left: none;
                }

                & th {
                    font-weight: bold;
                    background-color: ${styles.tableHeaderBackgroundColor};
                }
            }

            & a {
                color: ${styles.accentColor};
            }

            & img {
                max-width: 100%;
                height: auto;
            }

            & h1,
            & h2,
            & h3,
            & h4,
            & h5,
            & h6 {
                break-after: avoid;
                page-break-after: avoid;
                break-inside: avoid;
                page-break-inside: avoid;
            }

            & h2:not(:first-child) {
                margin-top: 16px;
            }

            & table,
            & pre,
            & blockquote,
            & ul,
            & ol,
            & img {
                break-inside: avoid;
                page-break-inside: avoid;
            }

            & tr {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `;
}
