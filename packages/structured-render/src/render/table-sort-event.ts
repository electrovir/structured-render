import {defineTypedEvent} from 'element-vir';

/**
 * Sort direction for table columns.
 *
 * @category Internal
 */
export enum TableSortDirection {
    Ascending = 'ascending',
    Descending = 'descending',
}

/**
 * Describes the current sort state for a single table.
 *
 * @category Internal
 */
export type TableSortState = Readonly<{
    columnKey: string;
    direction: TableSortDirection;
}>;

/**
 * This event is emitted when a table column header sort button is clicked.
 *
 * @category Internal
 */
export const TableSortEvent = defineTypedEvent<
    Readonly<{
        tableKey: string;
        sort: TableSortState | undefined;
    }>
>()('table-sort');
