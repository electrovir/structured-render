import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {themeDefaultKey} from 'theme-vir/dist/color-theme/color-theme.js';
import {
    noNativeFormStyles,
    noNativeSpacing,
    ViraCard,
    viraFormCssVars,
    ViraIcon,
    viraTheme,
} from 'vira';
import {type RenderHtmlOptions} from '../render/render-types.js';
import {
    createCleanSources,
    type SourcesInput,
    type StructuredRenderSource,
} from '../structured-render-data/sections/source.section.js';

/**
 * An element used to render section sources in HTML.
 *
 * @category Internal
 */
export const VirSource = defineElement<{
    options: Readonly<RenderHtmlOptions>;
    sources: SourcesInput;
}>()({
    tagName: 'vir-source',
    hostClasses: {
        'vir-source-phone-size': ({inputs}) => inputs.options.isPhoneSize,
    },
    events: {
        viewOnPageClick: defineElementEvent<StructuredRenderSource>(),
    },
    cssVars: {
        'vir-source-background-color': viraTheme.colors[themeDefaultKey].background.value,
        'vir-source-borer-radius': viraFormCssVars['vira-form-radius'].value,
        'vir-source-header-color': viraTheme.colors['vira-grey-foreground-header'].foreground.value,
        'vir-source-view-on-page-icon-color':
            viraFormCssVars['vira-form-accent-primary-color'].value,
        'vir-source-view-on-page-hover-background-color':
            viraTheme.colors['vira-grey-behind-fg-small-body'].background.value,
        'vir-source-view-on-page-active-background-color':
            viraTheme.colors['vira-grey-behind-fg-body'].background.value,
        'vir-source-font-size': '16px',
        'vir-source-phone-font-size': '14px',
    },
    styles: ({hostClasses, cssVars}) => css`
        ${ViraCard} {
            background: ${cssVars['vir-source-background-color'].value};
            border-radius: ${cssVars['vir-source-borer-radius'].value};
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p {
            ${noNativeSpacing}
        }

        .header {
            display: flex;
            align-items: center;
            gap: 4px;
            color: ${cssVars['vir-source-header-color'].value};
        }

        .entries {
            display: flex;
            flex-direction: column;
            gap: 16px;

            & .entry {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2px;

                & .source-text {
                    margin: 0;
                    line-height: 1.5em;
                }

                & .view-on-page-button {
                    ${noNativeFormStyles};
                    cursor: pointer;
                    color: ${cssVars['vir-source-view-on-page-icon-color'].value};
                    display: inline-flex;
                    align-items: center;
                    vertical-align: middle;
                    gap: 4px;
                    padding: 2px 6px;
                    border-radius: 4px;

                    &:hover {
                        background-color: ${cssVars[
                            'vir-source-view-on-page-hover-background-color'
                        ].value};
                    }

                    &:active {
                        background-color: ${cssVars[
                            'vir-source-view-on-page-active-background-color'
                        ].value};
                    }

                    & ${ViraIcon} {
                        width: ${cssVars['vir-source-font-size'].value};
                        height: ${cssVars['vir-source-font-size'].value};
                    }
                }
            }
        }

        ${ViraIcon} {
            width: 20px;
            height: 20px;
        }

        ${hostClasses['vir-source-phone-size'].selector} {
            padding: 4px;
            ${cssVars['vir-source-phone-font-size'].value}

            gap: 4px;

            & ${ViraIcon} {
                width: 18px;
                height: 18px;
            }
        }
    `,
    render({inputs, dispatch, events}) {
        const sources = createCleanSources(inputs.sources);

        if (!sources) {
            return nothing;
        }

        return html`
            <${ViraCard}>
                <p class="header">
                    <${ViraIcon.assign({
                        icon: inputs.options.sourceIcon,
                        fitContainer: true,
                    })}></${ViraIcon}>
                    <span>${inputs.options.pluralSourcesString}</span>
                </p>
                <div class="entries">
                    ${sources.map((entry) => {
                        const viewOnPageTemplate =
                            !inputs.options.hideViewOnPageButtons &&
                            entry.fileName &&
                            entry.pageNumbers?.length
                                ? html`
                                      <button
                                          class="view-on-page-button"
                                          title=${entry.fileName}
                                          ${listen('click', () => {
                                              dispatch(new events.viewOnPageClick(entry));
                                          })}
                                      >
                                          <${ViraIcon.assign({
                                              icon: inputs.options.viewOnPageIcon,
                                              fitContainer: true,
                                          })}></${ViraIcon}>
                                          ${inputs.options.createViewOnPageString(
                                              entry.pageNumbers[0] ?? 1,
                                          )}
                                      </button>
                                  `
                                : undefined;
                        const trimmedText = entry.quote?.trim() || '';
                        const sourceTextTemplate = trimmedText
                            ? html`
                                  <p class="source-text">"${trimmedText}"</p>
                              `
                            : undefined;

                        if (sourceTextTemplate || viewOnPageTemplate) {
                            return html`
                                <div class="entry">${sourceTextTemplate} ${viewOnPageTemplate}</div>
                            `;
                        } else {
                            return nothing;
                        }
                    })}
                </div>
            </${ViraCard}>
        `;
    },
});
