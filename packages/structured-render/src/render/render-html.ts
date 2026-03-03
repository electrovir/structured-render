import {assert, check, type Primitive} from '@augment-vir/assert';
import {
    ensureArray,
    filterMap,
    mapEnumToObject,
    mapObjectValues,
    mergeDefinedProperties,
    stringify,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {
    classMap,
    css,
    defineTypedEvent,
    html,
    ifDefined,
    join,
    listen,
    nothing,
    testId,
    unsafeCSS,
    type HtmlInterpolation,
    type HTMLTemplateResult,
} from 'element-vir';
import {
    defineTable,
    ViraCollapsibleCard,
    ViraCollapsibleWrapper,
    ViraColorVariant,
    ViraEmphasis,
    ViraIcon,
    ViraSize,
    ViraTableOrientation,
    ViraTag,
} from 'vira';
import {VirMarkdown} from '../elements/vir-markdown.element.js';
import {VirSource} from '../elements/vir-source.element.js';
import {createStructuredRenderIcon} from '../structured-render-data/sections/icon.section.js';
import {
    createCleanSources,
    type SourcesInput,
} from '../structured-render-data/sections/source.section.js';
import {
    StructuredRenderCellDirection,
    StructuredRenderTableFooterAlignment,
} from '../structured-render-data/sections/table.section.js';
import {
    StructuredRenderSectionType,
    type StructuredRenderSection,
} from '../structured-render-data/structured-render-section.js';
import {
    defaultRenderHtmlOptions,
    type RenderHtmlOptions,
    type RenderInput,
} from './render-types.js';

/**
 * Render Structured Render data to HTML templates.
 *
 * @category Render
 */
export function renderStructuredHtml(
    data: Readonly<RenderInput>,
    options?: Readonly<PartialWithUndefined<RenderHtmlOptions>> | undefined,
): HtmlInterpolation {
    const finalOptions: Readonly<RenderHtmlOptions> = mergeDefinedProperties<RenderHtmlOptions>(
        defaultRenderHtmlOptions,
        options,
    );

    return renderInternalStructuredHtml(data, finalOptions, []);
}

function formatText(text: Primitive): HtmlInterpolation {
    if (text == undefined) {
        return undefined;
    } else if (!check.isString(text)) {
        return String(text);
    }

    const trimmedText = text.trim();

    if (!trimmedText) {
        return undefined;
    }

    const splits = trimmedText.split('\n');

    return splits.flatMap((split, index) => {
        return html`
            ${split}${index < splits.length - 1
                ? html`
                      <br />
                  `
                : ''}
        `;
    });
}

const htmlRenderers: Record<
    StructuredRenderSection['type'],
    (
        section: StructuredRenderSection,
        options: Readonly<RenderHtmlOptions>,
        keyChain: ReadonlyArray<PropertyKey>,
    ) => HtmlInterpolation
> = {
    icon(section, options) {
        const icon = createStructuredRenderIcon(section, options);

        if (!icon) {
            return nothing;
        }

        return html`
            <${ViraIcon.assign({
                icon,
            })}></${ViraIcon}>
        `;
    },
    codeBlock(section) {
        return html`
            <pre>${section.code}</pre>
        `;
    },
    empty() {
        return undefined;
    },
    inlineCode(section) {
        return html`
            <code>${section.code}</code>
        `;
    },
    list(section, options, keyChain) {
        const itemTemplates = filterMap(
            section.items,
            (item, itemIndex) => {
                if (!item.icon && !item.content) {
                    return undefined;
                }
                const itemTemplate = item.content
                    ? renderInternalStructuredHtml(item.content, options, [
                          ...keyChain,
                          itemIndex,
                          'content',
                      ])
                    : undefined;

                const iconTemplate = item.icon
                    ? renderInternalStructuredHtml(item.icon, options, [
                          ...keyChain,
                          itemIndex,
                          'icon',
                      ])
                    : nothing;

                return html`
                    <li class="list-item-with-icon">${iconTemplate}${itemTemplate}</li>
                `;
            },
            check.isTruthy,
        );

        if (!itemTemplates.length) {
            return undefined;
        }

        return html`
            <ul>
                ${itemTemplates}
            </ul>
        `;
    },
    markdown(section, options) {
        return html`
            <${VirMarkdown.assign({
                markdownString: section.markdown,
                renderStyles: options.markdownStyles,
            })}></${VirMarkdown}>
        `;
    },
    tag(section) {
        const customColorStyles =
            section.color &&
            'custom' in section.color &&
            (section.color.custom.backgroundColor || section.color.custom.foregroundColor)
                ? css`
                      ${section.color.custom.backgroundColor
                          ? css`
                                ${ViraTag.cssVars['vira-tag-background-color'].name}: ${unsafeCSS(
                                    section.color.custom.backgroundColor,
                                )};
                            `
                          : css``}
                      ${section.color.custom.foregroundColor
                          ? css`
                                ${ViraTag.cssVars['vira-tag-text-color'].name}: ${unsafeCSS(
                                    section.color.custom.foregroundColor,
                                )};
                            `
                          : css``}
                  `
                : undefined;

        const colorVariant =
            section.color && 'variant' in section.color ? section.color.variant : undefined;

        return html`
            <${ViraTag.assign({
                text: section.text,
                color: customColorStyles ? ViraColorVariant.None : colorVariant,
                size: section.useBigTag ? ViraSize.Medium : ViraSize.Small,
                emphasis: ViraEmphasis.Subtle,
            })}
                style=${ifDefined(customColorStyles)}
            ></${ViraTag}>
        `;
    },
    processing(section, options) {
        return html`
            <${ViraIcon.assign({
                icon: options.processingIcon,
            })}></${ViraIcon}>
            <span>${options.processingString}...</span>
        `;
    },
    source(section, options) {
        return html`
            <${VirSource.assign({
                options,
                sources: section,
            })}></${VirSource}>
        `;
    },
    table(section, options, keyChain) {
        const {headerRow, rows} = defineTable(
            filterMap(
                section.headers,
                (header, headerIndex) => {
                    if (header.hidden) {
                        return undefined;
                    }

                    return {
                        key: header.key,
                        content: header.text
                            ? renderInternalStructuredHtml(header.text, options, [
                                  ...keyChain,
                                  'headers',
                                  headerIndex,
                              ])
                            : header.key,
                    };
                },
                check.isTruthy,
            ),
            section.entries,
            (row, rowIndex) => {
                return mapObjectValues(row.data, (key, content) => {
                    const contents = ensureArray(content).filter(check.isTruthy);
                    if (!contents.length) {
                        return undefined;
                    }

                    const contentTemplates = Array.from(
                        join<HtmlInterpolation, HTMLTemplateResult>(
                            filterMap(
                                contents,
                                (innerContent, contentIndex) =>
                                    renderInternalStructuredHtml(innerContent, options, [
                                        ...keyChain,
                                        rowIndex,
                                        contentIndex,
                                    ]),
                                check.isTruthy,
                            ),
                            html`
                                <br />
                            `,
                        ),
                    );

                    return contentTemplates;
                });
            },
            {
                orientation:
                    section.direction === StructuredRenderCellDirection.Horizontal
                        ? ViraTableOrientation.Vertical
                        : ViraTableOrientation.Horizontal,
            },
        );

        const tableHasRowSource = rows.some((row) => !!row.data?.sources?.length);
        const columnCount = rows[0]?.cells.length || 0;

        return html`
            <table
                cellspacing="0"
                cellpadding="0"
                class=${classMap({
                    vertical: section.direction === StructuredRenderCellDirection.Vertical,
                    horizontal: section.direction === StructuredRenderCellDirection.Horizontal,
                    'wide-table':
                        section.direction === StructuredRenderCellDirection.Horizontal && headerRow
                            ? headerRow.length > 5
                            : section.direction === StructuredRenderCellDirection.Vertical &&
                                rows[0]
                              ? rows[0].cells.length > 5
                              : false,
                })}
            >
                ${headerRow
                    ? html`
                          <thead>
                              <tr>
                                  ${headerRow.map((headerCell) => {
                                      return html`
                                          <th>${headerCell.content}</th>
                                      `;
                                  })}
                                  ${tableHasRowSource
                                      ? html`
                                            <th class="source-cell"></th>
                                        `
                                      : nothing}
                              </tr>
                          </thead>
                      `
                    : nothing}
                <tbody>
                    ${rows.map((row, rowIndex) => {
                        const rowKeyChain = [
                            ...keyChain,
                            rowIndex,
                        ];

                        const rowSources = createCleanSources(row.data?.sources);

                        const cells = row.cells.map((cell, index) => {
                            const isLastCell = index === row.cells.length - 1;

                            const cellTag =
                                section.direction === StructuredRenderCellDirection.Vertical &&
                                index === 0
                                    ? 'th'
                                    : 'td';

                            const cellTemplate = html`
                                <${cellTag}>${cell.content}</${cellTag}>
                            `;

                            if (rowSources?.length && isLastCell) {
                                return html`
                                    ${cellTemplate}
                                    <td class="source-cell">
                                        ${createSourceTrigger('', options, rowKeyChain, rowSources)}
                                    </td>
                                `;
                            } else {
                                return cellTemplate;
                            }
                        });

                        const sourceRow = rowSources?.length
                            ? html`
                                  <tr class="source-row">
                                      <td colspan=${cells.length}>
                                          ${createExpandingSource(options, rowKeyChain, rowSources)}
                                      </td>
                                  </tr>
                              `
                            : nothing;

                        return html`
                            <tr>
                                ${cells}
                                ${tableHasRowSource && !rowSources?.length
                                    ? html`
                                          <td class="source-cell"></td>
                                      `
                                    : nothing}
                            </tr>
                            ${sourceRow}
                        `;
                    })}
                </tbody>
                ${section.footerRows?.length
                    ? html`
                          <tfoot>
                              ${section.footerRows.map((footerRow, rowIndex) => {
                                  const cells = ensureArray(footerRow.cells);

                                  if (!cells.length) {
                                      return nothing;
                                  }

                                  const firstCellColspan =
                                      footerRow.alignment ===
                                      StructuredRenderTableFooterAlignment.Right
                                          ? columnCount - cells.length + 1
                                          : 0;

                                  const cellTemplates = cells.map((cell, cellIndex) => {
                                      const rawColspan = cellIndex ? 0 : firstCellColspan;
                                      const colspan = rawColspan < 1 ? undefined : rawColspan;

                                      const cellContents = cell
                                          ? renderInternalStructuredHtml(cell, options, [
                                                ...keyChain,
                                                'footers',
                                                rowIndex,
                                                cellIndex,
                                            ])
                                          : nothing;
                                      return html`
                                          <td
                                              colspan=${ifDefined(colspan)}
                                              class=${classMap({
                                                  'right-aligned-footer-cell': !!colspan,
                                              })}
                                          >
                                              ${cellContents}
                                          </td>
                                      `;
                                  });

                                  return html`
                                      <tr>${cellTemplates}</tr>
                                  `;
                              })}
                          </tfoot>
                      `
                    : nothing}
            </table>
        `;
    },
    text(section, options, keyChain) {
        const formattedText = formatText(section.text);
        const styleClass = section.style ? `text-style-${section.style}` : undefined;

        if (!formattedText) {
            return undefined;
        }

        return html`
            ${renderInternalStructuredHtml(section.icon, options, [
                ...keyChain,
                'icon',
            ])}
            <span
                class=${[
                    styleClass,
                    'text-section-text-content',
                ].join(' ')}
            >
                ${formattedText}
            </span>
        `;
    },
} satisfies {
    [SectionType in StructuredRenderSection['type']]: (
        section: Extract<StructuredRenderSection, {type: SectionType}>,
        options: Readonly<RenderHtmlOptions>,
        keyChain: ReadonlyArray<PropertyKey>,
    ) => HtmlInterpolation;
} as Record<
    StructuredRenderSection['type'],
    (
        section: StructuredRenderSection,
        options: Readonly<RenderHtmlOptions>,
        keyChain: ReadonlyArray<PropertyKey>,
    ) => HtmlInterpolation
>;

function renderInternalStructuredHtml(
    data: Readonly<RenderInput>,
    options: Readonly<RenderHtmlOptions>,
    keyChain: ReadonlyArray<PropertyKey>,
) {
    return structuredRenderToHtmlArray(data, options, keyChain, !keyChain.length).filter(
        check.isTruthy,
    );
}

/**
 * Used for both HTML class names and test ids.
 *
 * @category Internal
 */
export const structuredRenderSectionHtmlNames: Record<StructuredRenderSectionType, string> =
    mapEnumToObject(StructuredRenderSectionType, (sectionType) => {
        return [
            sectionType,
            'section',
        ].join('-');
    });
/**
 * A test id that you can use to target a section in the Structured Render HTML output.
 *
 * @category Internal
 */
export const structuredRenderSectionHtmlTestId = 'structured-render-section';

function structuredRenderToHtmlArray(
    data: Readonly<RenderInput>,
    options: Readonly<RenderHtmlOptions>,
    keyChain: ReadonlyArray<PropertyKey>,
    isTopSection: boolean,
): HtmlInterpolation[] {
    if (!data) {
        return [];
    } else if (check.isArray(data)) {
        return data.flatMap((entry, index) =>
            structuredRenderToHtmlArray(
                entry,
                options,
                [
                    ...keyChain,
                    index,
                ],
                isTopSection,
            ),
        );
    } else if ('type' in data) {
        const sectionTitle: string | undefined =
            ('sectionTitle' in data && keyChain.length > 0 && data.sectionTitle) || undefined;
        const sectionTemplate = htmlRenderers[data.type](data, options, keyChain);
        const sources = ('sources' in data && data.sources) || undefined;

        const sectionContent = html`
            <div
                class=${classMap({
                    'section-wrapper': true,
                    'top-section-wrapper': isTopSection,
                    [structuredRenderSectionHtmlNames[data.type]]: true,
                })}
                ${testId(structuredRenderSectionHtmlTestId)}
                ${testId(structuredRenderSectionHtmlNames[data.type])}
            >
                ${createSourceWrapper(sectionTemplate, options, keyChain, sources)}
            </div>
        `;

        if (isTopSection) {
            return [
                html`
                    <${ViraCollapsibleCard.assign({
                        expandOnPrint: true,
                        blockExpansion: options.blockSectionExpansion,
                        hideHeader: !sectionTitle,
                        startExpanded: options.expandAllSections || keyChain.at(-1) === 0,
                    })}>
                        <h3 slot=${ViraCollapsibleCard.slotNames.header}>${sectionTitle}</h3>
                        ${sectionContent}
                    </${ViraCollapsibleCard}>
                `,
            ];
        } else {
            return [
                sectionTitle
                    ? html`
                          <h3>${sectionTitle}</h3>
                      `
                    : undefined,
                sectionContent,
            ];
        }
    } else if ('sections' in data) {
        return [
            data.cardTitle
                ? html`
                      <h2>${data.cardTitle}</h2>
                  `
                : undefined,
            ...structuredRenderToHtmlArray(
                data.sections,
                options,
                [
                    ...keyChain,
                    'sections',
                ],
                isTopSection,
            ),
        ];
    } else {
        assert.tsType(data).equals<never>();
        throw new Error(`Unexpected structured render type: ${stringify(data)}`);
    }
}

/**
 * This event is emitted when source sections have been expanded and can be used to track which
 * sections are expanded.
 *
 * @category Internal
 */
export const SourceExpansionEvent = defineTypedEvent<
    Readonly<{
        expanded: boolean;
        key: string;
    }>
>()('source-expansion');

function createSourceTrigger(
    content: HtmlInterpolation,
    options: Readonly<RenderHtmlOptions>,
    rawKeyChain: ReadonlyArray<PropertyKey>,
    rawSources: SourcesInput,
) {
    const sources = createCleanSources(rawSources);

    if (!sources) {
        return undefined;
    }

    const sourceKeyChain = [
        ...rawKeyChain,
        'source-icon',
    ];
    const sourceKey = makeChainKey(sourceKeyChain);
    const isSourceExpanded = !!options.currentlyExpanded[sourceKey];

    const sourceIconTemplate = html`
        <div class="source-icon-wrapper">
            <button class="source-icon-button">
                <${ViraIcon.assign({
                    icon: options.sourceIcon,
                    fitContainer: true,
                })}
                    ${listen('click', (event) => {
                        const eventTarget = extractEventTarget(event, HTMLElement);

                        eventTarget.dispatchEvent(
                            new SourceExpansionEvent({
                                expanded: !isSourceExpanded,
                                key: makeChainKey(sourceKeyChain),
                            }),
                        );
                    })}
                ></${ViraIcon}>
            </button>
        </div>
    `;

    return html`
        <div class="source-content-wrapper">${content}${sourceIconTemplate}</div>
    `;
}

function createExpandingSource(
    options: Readonly<RenderHtmlOptions>,
    rawKeyChain: ReadonlyArray<PropertyKey>,
    rawSources: SourcesInput,
) {
    const sources = createCleanSources(rawSources);

    if (!sources) {
        return undefined;
    }

    const sourceKeyChain = [
        ...rawKeyChain,
        'source-icon',
    ];
    const sourceKey = makeChainKey(sourceKeyChain);
    const isSourceExpanded = !!options.currentlyExpanded[sourceKey];

    return html`
        <${ViraCollapsibleWrapper.assign({
            expanded: isSourceExpanded,
            expandOnPrint: options.expandSourcesOnPrint,
        })}
            class="collapsible-source-wrapper ${classMap({
                'expanded-source': isSourceExpanded,
            })}"
        >
            <span slot=${ViraCollapsibleWrapper.slotNames.header}></span>
            <${VirSource.assign({
                options,
                sources,
            })}></${VirSource}>
        </${ViraCollapsibleWrapper}>
    `;
}

function createSourceWrapper(
    content: HtmlInterpolation,
    options: Readonly<RenderHtmlOptions>,
    rawKeyChain: ReadonlyArray<PropertyKey>,
    rawSources: SourcesInput,
) {
    const sources = createCleanSources(rawSources);

    if (!sources) {
        return content;
    }

    return html`
        ${createSourceTrigger(content, options, rawKeyChain, rawSources)}
        ${createExpandingSource(options, rawKeyChain, rawSources)}
    `;
}

/**
 * Makes a chain key used to track which HTML sections are opened.
 *
 * @category Internal
 */
export function makeChainKey(keyChain: ReadonlyArray<PropertyKey>): string {
    return [
        'key',
        ...keyChain,
    ]
        .join(';')
        .replaceAll(' ', '_')
        .replaceAll(/[^\w;]/g, '');
}
