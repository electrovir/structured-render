import {mergeDefinedProperties, type PartialWithUndefined} from '@augment-vir/common';
import {css, defineElement, html, listen} from 'element-vir';
import {ViraIcon} from 'vira';
import {createSourceWrapper} from '../render/render-html.js';
import {defaultRenderHtmlOptions, type RenderHtmlOptions} from '../render/render-types.js';
import {SourceExpansionEvent} from '../render/source-expansion-event.js';
import {sourceWrapperStyles} from '../render/source-styles.js';
import {type SourcesInput} from '../structured-render-data/sections/source.section.js';

/**
 * A self-contained element that renders a source icon button which, when clicked, expands to reveal
 * source details via the internal {@link createSourceWrapper}. Child content is rendered in a
 * default slot to the left of the source icon trigger. The expandable source panel appears below
 * both.
 *
 * @category Elements
 */
export const VirExpandableSource = defineElement<{
    sources: SourcesInput;
    options?: Readonly<PartialWithUndefined<RenderHtmlOptions>> | undefined;
}>()({
    tagName: 'vir-expandable-source',
    state() {
        return {
            currentlyExpanded: {} as Record<string, boolean>,
        };
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        ${ViraIcon} {
            flex-shrink: 0;
        }

        *::first-line {
            /* this height must match the icon size */
            line-height: 24px;
        }

        ${sourceWrapperStyles}
    `,
    render({inputs, state, updateState}) {
        const options: Readonly<RenderHtmlOptions> = mergeDefinedProperties(
            defaultRenderHtmlOptions,
            {
                ...inputs.options,
                currentlyExpanded: {
                    ...inputs.options?.currentlyExpanded,
                    ...state.currentlyExpanded,
                },
            },
        );

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
            >
                ${createSourceWrapper(
                    html`
                        <slot></slot>
                    `,
                    options,
                    ['expandable-source'],
                    inputs.sources,
                )}
            </div>
        `;
    },
});
