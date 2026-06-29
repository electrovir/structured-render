import {assert} from '@augment-vir/assert';
import {type ArrayElement} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    StructuredRenderCellDirection,
    type StructuredRenderTable,
} from '../structured-render-data/sections/table.section.js';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {sortTableEntries} from './render-html.js';
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
