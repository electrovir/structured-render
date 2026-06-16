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
    html,
    ifDefined,
    join,
    listen,
    nothing,
    testId,
    unsafeCSS,
    type HtmlInterpolation,
} from 'element-vir';
import {
    defineTable,
    lucideIcons,
    ViraCard,
    ViraCollapsibleCard,
    ViraCollapsibleWrapper,
    ViraColorVariant,
    ViraDrawer,
    ViraEmphasis,
    ViraIcon,
    ViraSize,
    ViraTableOrientation,
    ViraTag,
} from 'vira';
import {VirCopy} from '../elements/vir-copy.element.js';
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
    type StructuredRenderShapesAllowedInTable,
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
import {SourceExpansionEvent} from './source-expansion-event.js';
import {TableSortDirection, TableSortEvent} from './table-sort-event.js';

/**
 * Render Structured Render data to HTML templates.
 *
 * @category Render
 */
export function renderStructuredHtml(
    data: Readonly<RenderInput>,
    options?: Readonly<PartialWithUndefined<RenderHtmlOptions>> | undefined,
): HtmlInterpolation {
    const finalOptions: Readonly<RenderHtmlOptions> = mergeDefinedProperties(
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

/** Extract plain text from a section for sorting comparisons. */
function extractCellText(
    section: Readonly<StructuredRenderShapesAllowedInTable> | undefined | null,
): string {
    if (!section) {
        return '';
    } else if (section.type === StructuredRenderSectionType.text) {
        return section.text == undefined ? '' : String(section.text);
    } else if (section.type === StructuredRenderSectionType.inlineCode) {
        return section.code;
    } else if (section.type === StructuredRenderSectionType.tag) {
        return section.text == undefined ? '' : String(section.text);
    }

    return '';
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
    copyCard(section) {
        const text = section.text == undefined ? '' : String(section.text);
        const headerText = section.header == undefined ? '' : String(section.header);

        if (!text && !headerText) {
            return undefined;
        }

        const headerTemplate = headerText
            ? html`
                  <h3 class="copy-card-header">${headerText}</h3>
              `
            : nothing;

        const copyTemplate = section.disableCopy
            ? nothing
            : html`
                  <${VirCopy.assign({
                      text,
                  })}></${VirCopy}>
              `;

        return html`
            <div class="copy-card-wrapper">
                <div class="copy-card-top">${headerTemplate}${copyTemplate}</div>
                <div class="copy-card-body">${formatText(text)}</div>
            </div>
        `;
    },
    collapsible(section, options, keyChain) {
        return html`
            <${ViraCollapsibleCard.assign({
                rawCollapsible: true,
            })}>
                <span slot=${ViraCollapsibleCard.slotNames['vira-collapsible-card-header']}>
                    ${String(section.header)}
                </span>
                ${renderInternalStructuredHtml(section.content, options, [
                    ...keyChain,
                    'collapsible',
                ])}
            </${ViraCollapsibleCard}>
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
                const itemKeyChain = [
                    ...keyChain,
                    itemIndex,
                ];

                const contentArray = ensureArray(item.content).filter(check.isTruthy);
                const contentTemplates = contentArray.map((contentEntry, contentIndex) => {
                    return renderInternalStructuredHtml(contentEntry, options, [
                        ...itemKeyChain,
                        'content',
                        contentIndex,
                    ]);
                });
                const itemTemplate = contentTemplates.length
                    ? contentArray.length > 1
                        ? html`
                              <div class="list-item-content-column">${contentTemplates}</div>
                          `
                        : contentTemplates
                    : undefined;

                const iconTemplate = item.icon
                    ? renderInternalStructuredHtml(item.icon, options, [
                          ...itemKeyChain,
                          'icon',
                      ])
                    : nothing;

                const itemContent = html`
                    ${iconTemplate}${itemTemplate}
                `;

                return html`
                    <li
                        class=${classMap({
                            'list-item-with-icon': !!item.icon,
                        })}
                    >
                        ${createSourceWrapper(itemContent, options, itemKeyChain, item.sources)}
                    </li>
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
                color: customColorStyles ? ViraColorVariant.Custom : colorVariant,
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
        if (options.hideSources) {
            return nothing;
        }

        return html`
            <${VirSource.assign({
                options,
                sources: section,
            })}></${VirSource}>
        `;
    },
    table(section, options, keyChain) {
        const tableStyleClass = section.style ? `text-style-${section.style}` : undefined;

        if (options.isPhoneSize && section.direction === StructuredRenderCellDirection.Horizontal) {
            const visibleHeaders = filterMap(
                section.headers,
                (header, headerIndex) => {
                    if (header.hidden) {
                        return undefined;
                    }

                    return {
                        key: header.key,
                        headerIndex,
                        renderedContent: header.text
                            ? renderInternalStructuredHtml(header.text, options, [
                                  ...keyChain,
                                  'headers',
                                  headerIndex,
                              ])
                            : header.key,
                    };
                },
                check.isTruthy,
            );

            const cards = section.entries.map((entry, rowIndex) => {
                const rowKeyChain = [
                    ...keyChain,
                    rowIndex,
                ];

                const cardRows = filterMap(
                    visibleHeaders,
                    (header) => {
                        const content = entry.data[header.key];
                        const contents = ensureArray(content).filter(check.isTruthy);

                        if (!contents.length) {
                            return undefined;
                        }

                        const cellContent = Array.from(
                            join(
                                filterMap(
                                    contents,
                                    (innerContent, contentIndex) => {
                                        return renderInternalStructuredHtml(innerContent, options, [
                                            ...rowKeyChain,
                                            header.key,
                                            contentIndex,
                                        ]);
                                    },
                                    check.isTruthy,
                                ),
                                html`
                                    <br />
                                `,
                            ),
                        );

                        return html`
                            <tr>
                                <th>${header.renderedContent}</th>
                                <td>${cellContent}</td>
                            </tr>
                        `;
                    },
                    check.isTruthy,
                );

                const rowSources = createCleanSources(entry.sources);

                return html`
                    <${ViraCard} class="phone-table-card">
                        <table class="vertical phone-card-table" cellspacing="0" cellpadding="0">
                            <tbody>${cardRows}</tbody>
                        </table>
                        ${rowSources?.length
                            ? createSourceWrapper(html``, options, rowKeyChain, rowSources)
                            : nothing}
                    </${ViraCard}>
                `;
            });

            return html`
                <div
                    class=${[
                        'phone-table-cards',
                        tableStyleClass,
                    ]
                        .filter(check.isTruthy)
                        .join(' ')}
                >
                    ${cards}
                </div>
            `;
        }

        const tableKey = keyChain.join('.');
        const currentSort = options.tableSortStates[tableKey];
        const isHorizontal = section.direction === StructuredRenderCellDirection.Horizontal;

        const sortedEntries =
            currentSort && isHorizontal
                ? section.entries.toSorted((entryA, entryB) => {
                      const cellA = ensureArray(entryA.data[currentSort.columnKey]).filter(
                          check.isTruthy,
                      );
                      const cellB = ensureArray(entryB.data[currentSort.columnKey]).filter(
                          check.isTruthy,
                      );
                      const textA = cellA.map((cell) => extractCellText(cell)).join(' ');
                      const textB = cellB.map((cell) => extractCellText(cell)).join(' ');

                      const numA = Number(textA);
                      const numB = Number(textB);
                      const comparison =
                          !isNaN(numA) && !isNaN(numB) ? numA - numB : textA.localeCompare(textB);

                      return currentSort.direction === TableSortDirection.Ascending
                          ? comparison
                          : -comparison;
                  })
                : section.entries;

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
            sortedEntries,
            (row, rowIndex) => {
                return mapObjectValues(row.data, (key, content) => {
                    const contents = ensureArray(content).filter(check.isTruthy);
                    if (!contents.length) {
                        return undefined;
                    }

                    const contentTemplates = Array.from(
                        join(
                            filterMap(
                                contents,
                                (innerContent, contentIndex) => {
                                    const sourcesOverride =
                                        'sources' in innerContent
                                            ? {
                                                  sources:
                                                      section.direction ===
                                                      StructuredRenderCellDirection.Vertical
                                                          ? undefined
                                                          : innerContent.sources,
                                              }
                                            : {};

                                    return renderInternalStructuredHtml(
                                        {
                                            ...innerContent,
                                            ...sourcesOverride,
                                        },
                                        options,
                                        [
                                            ...keyChain,
                                            rowIndex,
                                            key,
                                            contentIndex,
                                        ],
                                    );
                                },
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

        const allRowSources = options.hideSources
            ? []
            : rows.map((row) => {
                  const lastCell = row.cells.at(-1);

                  const lastCellSources =
                      section.direction === StructuredRenderCellDirection.Vertical && lastCell
                          ? ensureArray(lastCell.data?.data[lastCell.key])
                                .filter(check.isTruthy)
                                .flatMap((cellContent) => {
                                    return 'sources' in cellContent
                                        ? ensureArray(cellContent.sources)
                                        : [];
                                })
                          : undefined;

                  return createCleanSources([
                      ...ensureArray(lastCellSources),
                      ...ensureArray(row.data?.sources),
                  ]);
              });

        const tableHasRowSource = allRowSources.some((rowSources) => !!rowSources?.length);
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
                    ...(tableStyleClass
                        ? {
                              [tableStyleClass]: true,
                          }
                        : {}),
                })}
            >
                ${headerRow
                    ? html`
                          <thead>
                              <tr>
                                  ${headerRow.map((headerCell) => {
                                      const columnSortState =
                                          currentSort?.columnKey === headerCell.key
                                              ? currentSort.direction
                                              : undefined;

                                      const sortIcon =
                                          columnSortState === TableSortDirection.Ascending
                                              ? lucideIcons.SortAsc
                                              : columnSortState === TableSortDirection.Descending
                                                ? lucideIcons.SortDesc
                                                : lucideIcons.ChevronsUpDown;

                                      const sortIconTemplate = isHorizontal
                                          ? html`
                                                <span
                                                    class=${classMap({
                                                        'sort-icon': true,
                                                        'sort-icon-active': !!columnSortState,
                                                    })}
                                                >
                                                    <${ViraIcon.assign({
                                                        icon: sortIcon,
                                                    })}></${ViraIcon}>
                                                </span>
                                            `
                                          : nothing;

                                      return html`
                                          <th
                                              class=${classMap({
                                                  sortable: isHorizontal,
                                              })}
                                              ${isHorizontal
                                                  ? listen('click', (event) => {
                                                        const nextSort =
                                                            columnSortState === undefined
                                                                ? TableSortDirection.Ascending
                                                                : columnSortState ===
                                                                    TableSortDirection.Ascending
                                                                  ? TableSortDirection.Descending
                                                                  : undefined;

                                                        const eventTarget = extractEventTarget(
                                                            event,
                                                            HTMLElement,
                                                        );

                                                        eventTarget.dispatchEvent(
                                                            new TableSortEvent({
                                                                tableKey,
                                                                sort: nextSort
                                                                    ? {
                                                                          columnKey: headerCell.key,
                                                                          direction: nextSort,
                                                                      }
                                                                    : undefined,
                                                            }),
                                                        );
                                                    })
                                                  : nothing}
                                          >
                                              <span class="th-content">
                                                  ${headerCell.content}${sortIconTemplate}
                                              </span>
                                          </th>
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

                        const rowSources = allRowSources[rowIndex];

                        const cells = row.cells.map((cell, cellIndex) => {
                            const isLastCell = cellIndex === row.cells.length - 1;

                            const cellTag =
                                section.direction === StructuredRenderCellDirection.Vertical &&
                                cellIndex === 0
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
                                ${tableHasRowSource
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
    title(section, options, keyChain) {
        const formattedText = formatText(section.text);

        if (!formattedText) {
            return undefined;
        }

        return html`
            ${renderInternalStructuredHtml(section.icon, options, [
                ...keyChain,
                'icon',
            ])}
            <h1 class="title-section-text-content">${formattedText}</h1>
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
    return structuredRenderToHtmlArray(data, options, keyChain, false).filter(check.isTruthy);
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
            ('sectionTitle' in data &&
                keyChain.length > 0 &&
                !(isTopSection && keyChain.at(-1) === 0) &&
                data.sectionTitle) ||
            undefined;
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

        return [
            sectionTitle
                ? html`
                      <h3>${sectionTitle}</h3>
                  `
                : undefined,
            sectionContent,
        ];
    } else if ('sections' in data) {
        const cardSections = structuredRenderToHtmlArray(
            data.sections,
            options,
            [
                ...keyChain,
                'sections',
            ],
            true,
        );

        const cardTitleIconTemplate = data.cardTitleIcon
            ? renderInternalStructuredHtml(data.cardTitleIcon, options, [
                  ...keyChain,
                  'cardTitleIcon',
              ])
            : nothing;

        return [
            html`
                <${ViraCollapsibleCard.assign({
                    expandOnPrint: true,
                    rawCollapsible: !options.useCardStyles,
                    blockExpansion: options.blockCardExpansion,
                    hideHeader: !data.cardTitle,
                    startExpanded:
                        options.expandAllCards ||
                        (options.expandFirstCard && keyChain.at(-1) === 0),
                })}
                    class=${classMap({
                        'raw-collapsible-card': !options.useCardStyles,
                    })}
                >
                    <h2
                        slot=${ViraCollapsibleCard.slotNames['vira-collapsible-card-header']}
                        class="card-title ${classMap({
                            'card-title-with-icon': !!data.cardTitleIcon,
                        })}"
                    >
                        ${cardTitleIconTemplate}${data.cardTitle}
                    </h2>
                    ${cardSections}
                </${ViraCollapsibleCard}>
            `,
        ];
    } else {
        assert.tsType(data).equals<never>();
        throw new Error(`Unexpected structured render type: ${stringify(data)}`);
    }
}

function createSourceTrigger(
    content: HtmlInterpolation,
    options: Readonly<RenderHtmlOptions>,
    rawKeyChain: ReadonlyArray<PropertyKey>,
    rawSources: SourcesInput,
) {
    const sources = createCleanSources(rawSources);

    const sourceKeyChain = [
        ...rawKeyChain,
        'source-icon',
    ];
    const sourceKey = makeChainKey(sourceKeyChain);
    const isSourceExpanded = !!options.currentlyExpanded[sourceKey];

    const sourceIconTemplate = sources
        ? html`
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
          `
        : nothing;

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

    const sourceTemplate = html`
        <${VirSource.assign({
            options,
            sources,
        })}></${VirSource}>
    `;

    if (options.useDrawerForSources) {
        return html`
            <${ViraDrawer.assign({
                open: isSourceExpanded,
                drawerTitle: options.pluralSourcesString,
            })}
                ${listen(ViraDrawer.events.drawerClose, (event) => {
                    const eventTarget = extractEventTarget(event, HTMLElement);

                    eventTarget.dispatchEvent(
                        new SourceExpansionEvent({
                            expanded: false,
                            key: sourceKey,
                        }),
                    );
                })}
            >
                ${sourceTemplate}
            </${ViraDrawer}>
        `;
    }

    return html`
        <${ViraCollapsibleWrapper.assign({
            expanded: isSourceExpanded,
            expandOnPrint: options.expandSourcesOnPrint,
        })}
            class="collapsible-source-wrapper ${classMap({
                'expanded-source': isSourceExpanded,
            })}"
        >
            <span
                slot=${ViraCollapsibleWrapper.slotNames['vira-collapsible-wrapper-header']}
            ></span>
            ${sourceTemplate}
        </${ViraCollapsibleWrapper}>
    `;
}

/**
 * Creates a source wrapper template that renders content alongside an expandable source icon and
 * collapsible source panel. Used internally by {@link renderStructuredHtml} and available for
 * external use via `VirExpandableSource`.
 *
 * @category Internal
 */
export function createSourceWrapper(
    content: HtmlInterpolation,
    options: Readonly<RenderHtmlOptions>,
    rawKeyChain: ReadonlyArray<PropertyKey>,
    rawSources: SourcesInput,
) {
    if (options.hideSources) {
        return html`
            <div class="source-content-wrapper">${content}</div>
        `;
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
