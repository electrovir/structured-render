import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {mergeDefinedProperties, type ArrayElement} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, defineElement, html, listen} from 'element-vir';
import {
    StructuredRenderCellDirection,
    type StructuredRenderTable,
} from '../structured-render-data/sections/table.section.js';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {
    createExpandingSource,
    createSourceButton,
    sortTableEntries,
    type SourceTemplateParams,
} from './render-html.js';
import {defaultRenderHtmlOptions} from './render-types.js';
import {SourceExpansionEvent} from './source-expansion-event.js';
import {sourceWrapperStyles} from './source-styles.js';
import {TableSortDirection} from './table-sort-event.js';

function createMonthEntry({
    month,
    monthNumber,
}: Readonly<{month: string; monthNumber: string}>): ArrayElement<StructuredRenderTable['entries']> {
    return {
        data: {
            month: {
                type: StructuredRenderSectionType.text,
                text: month,
            },
            monthNumber: {
                type: StructuredRenderSectionType.text,
                text: monthNumber,
            },
        },
    };
}

const januaryEntry = createMonthEntry({
    month: 'January',
    monthNumber: '1',
});
const februaryEntry = createMonthEntry({
    month: 'February',
    monthNumber: '2',
});
const marchEntry = createMonthEntry({
    month: 'March',
    monthNumber: '3',
});

/** Intentionally not in any natural order so sorting has to do real work. */
const unsortedEntries = [
    marchEntry,
    januaryEntry,
    februaryEntry,
];

function createMonthTable(sortKey: string | undefined): StructuredRenderTable {
    return {
        type: 'table',
        direction: StructuredRenderCellDirection.Horizontal,
        headers: [
            {
                key: 'month',
                text: {
                    type: StructuredRenderSectionType.text,
                    text: 'Month',
                },
                sortKey,
            },
            {
                key: 'monthNumber',
                hidden: true,
            },
        ],
        entries: unsortedEntries,
    };
}

describe(sortTableEntries.name, () => {
    it('sorts a column by its sortKey data instead of its displayed content', () => {
        const result = sortTableEntries({
            section: createMonthTable('monthNumber'),
            currentSort: {
                columnKey: 'month',
                direction: TableSortDirection.Ascending,
            },
        });

        assert.deepEquals(result, [
            januaryEntry,
            februaryEntry,
            marchEntry,
        ]);
    });

    it('reverses sortKey ordering when sorting descending', () => {
        const result = sortTableEntries({
            section: createMonthTable('monthNumber'),
            currentSort: {
                columnKey: 'month',
                direction: TableSortDirection.Descending,
            },
        });

        assert.deepEquals(result, [
            marchEntry,
            februaryEntry,
            januaryEntry,
        ]);
    });

    it('falls back to the displayed content when no sortKey is set', () => {
        const result = sortTableEntries({
            section: createMonthTable(undefined),
            currentSort: {
                columnKey: 'month',
                direction: TableSortDirection.Ascending,
            },
        });

        assert.deepEquals(result, [
            februaryEntry,
            januaryEntry,
            marchEntry,
        ]);
    });

    it('leaves entries unsorted for a column with disableSort', () => {
        const section = createMonthTable('monthNumber');
        const disabledSortSection: StructuredRenderTable = {
            ...section,
            headers: section.headers.map((header) => {
                return header.key === 'month'
                    ? {
                          ...header,
                          disableSort: true,
                      }
                    : header;
            }),
        };

        const result = sortTableEntries({
            section: disabledSortSection,
            currentSort: {
                columnKey: 'month',
                direction: TableSortDirection.Ascending,
            },
        });

        assert.deepEquals(result, unsortedEntries);
    });
});

const SplitSourceTest = defineElement()({
    tagName: 'split-source-test',
    state() {
        return {
            currentlyExpanded: {} as Record<string, boolean>,
        };
    },
    styles: sourceWrapperStyles,
    render({state, updateState}) {
        const params = {
            options: mergeDefinedProperties(defaultRenderHtmlOptions, {
                currentlyExpanded: state.currentlyExpanded,
            }),
            rawKeyChain: [
                'split',
            ],
            rawSources: {
                type: StructuredRenderSectionType.source,
                fileName: 'example.pdf',
                pageNumbers: [
                    3,
                ],
                fileBoundingBoxes: null,
                quote: 'A quoted passage.',
            },
        } satisfies SourceTemplateParams;

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
                <header>${createSourceButton(params)}</header>
                <div
                    style=${css`
                        height: ${window.innerHeight - 20}px;
                    `}
                >
                    Tall content
                </div>
                ${createExpandingSource(params)}
            </div>
        `;
    },
});

describe(createSourceButton.name, () => {
    it('expands and scrolls to an expanding source placed apart from it', async () => {
        const splitSource = assertWrap.instanceOf(
            await testWeb.render(html`
                <${SplitSourceTest}></${SplitSourceTest}>
            `),
            SplitSourceTest,
        );

        await testWeb.click(
            assertWrap.isDefined(splitSource.shadowRoot.querySelector('.source-icon-button')),
        );

        await waitUntil.isTrue(() => {
            const sourceRect = assertWrap
                .isDefined(splitSource.shadowRoot.querySelector('.collapsible-source-wrapper'))
                .getBoundingClientRect();

            return sourceRect.height > 0 && sourceRect.top <= window.innerHeight - 50;
        });
    });
});
