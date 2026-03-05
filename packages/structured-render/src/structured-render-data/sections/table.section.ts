import {type ArrayElement} from '@augment-vir/common';
import {enumShape, nullableShape, recordShape, unionShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderEmptyShape} from './empty.section.js';
import {structuredRenderInlineCodeShape} from './inline-code.section.js';
import {structuredRenderListShape} from './list.section.js';
import {renderDataMarkdownShape} from './markdown.section.js';
import {structuredRenderProcessingShape} from './processing.section.js';
import {structuredRenderSourceShape, type StructuredRenderSource} from './source.section.js';
import {structuredRenderTagShape} from './tag.section.js';
import {structuredRenderTextShape} from './text.section.js';

/**
 * Footer alignment options for {@link StructuredRenderTable}.
 *
 * @category Options
 * @default StructuredRenderTableFooterAlignment.Left
 */
export enum StructuredRenderTableFooterAlignment {
    /** @default */
    Left = 'left',
    Right = 'right',
}

/**
 * Controls which direction cells render for {@link StructuredRenderTable}.
 *
 * @category Options
 */
export enum StructuredRenderCellDirection {
    /**
     * Each cell in a table entry is rendered to the _right_ of the previous one; the cells run
     * horizontally and increase the table's _width_. Headers run along the first row. Each table
     * entry creates a new _row_.
     */
    Horizontal = 'horizontal',
    /**
     * Each cell in a table entry is rendered _below_ the previous one; the cells run vertically and
     * increase the table's _height_. Headers run down the first column. Each table entry creates a
     * new _column_.
     */
    Vertical = 'vertical',
}

/**
 * All section shapes allowed inside {@link StructuredRenderTable} cells.
 *
 * @category Internal
 */
export const structuredRenderShapesAllowedInTableShape = unionShape(
    structuredRenderTextShape,
    structuredRenderInlineCodeShape,
    renderDataMarkdownShape,
    structuredRenderTagShape,
    structuredRenderListShape,
    structuredRenderEmptyShape,
    structuredRenderProcessingShape,
);
/**
 * All section shapes allowed inside {@link StructuredRenderTable} cells.
 *
 * @category Internal
 */
export type StructuredRenderShapesAllowedInTable =
    typeof structuredRenderShapesAllowedInTableShape.runtimeType;

/**
 * Shape definition for {@link StructuredRenderTable}.
 *
 * @category Internal
 */
export const structuredRenderTableShape = createStructuredRenderSection('table', {
    direction: enumShape(StructuredRenderCellDirection),
    headers: [
        {
            key: '',
            text: nullableShape(structuredRenderTextShape),
            /**
             * If `true`, all data associated with this header (the column / row) is not rendered at
             * all.
             */
            hidden: nullableShape(false),
        },
    ],
    entries: [
        {
            data: recordShape({
                keys: '',
                values: unionShape(nullableShape(structuredRenderShapesAllowedInTableShape), [
                    nullableShape(structuredRenderShapesAllowedInTableShape),
                ]),
            }),
            sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
        },
    ],
    footerRows: nullableShape([
        {
            /** @default StructuredRenderTableFooterAlignment.Left */
            alignment: nullableShape(enumShape(StructuredRenderTableFooterAlignment)),
            cells: unionShape(nullableShape(structuredRenderShapesAllowedInTableShape), [
                nullableShape(structuredRenderShapesAllowedInTableShape),
            ]),
        },
    ]),
});

/**
 * A section that renders a table.
 *
 * @category Section
 */
export type StructuredRenderTable = typeof structuredRenderTableShape.runtimeType;

/**
 * A helper for defining a {@link StructuredRenderTable} instance.
 *
 * @category Util
 */
export function createRenderDataTable<const Headers extends StructuredRenderTable['headers']>(
    direction: StructuredRenderCellDirection,
    headers: Headers,
    entries: {
        data: Record<
            ArrayElement<Headers>['key'],
            StructuredRenderShapesAllowedInTable | undefined
        >;
        sources?: (StructuredRenderSource | undefined)[] | undefined;
    }[],
    footerRows?: StructuredRenderTable['footerRows'],
): StructuredRenderTable {
    return {
        type: 'table',
        direction,
        headers,
        entries,
        footerRows,
    };
}
