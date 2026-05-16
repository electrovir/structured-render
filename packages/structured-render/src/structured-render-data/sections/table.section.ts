import {type ArrayElement} from '@augment-vir/common';
import {enumShape, nullableShape, recordShape, unionShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './empty.section.js';
import {
    structuredRenderInlineCodeShape,
    type StructuredRenderInlineCode,
} from './inline-code.section.js';
import {structuredRenderListShape, type StructuredRenderList} from './list.section.js';
import {renderDataMarkdownShape, type RenderDataMarkdown} from './markdown.section.js';
import {
    structuredRenderProcessingShape,
    type StructuredRenderProcessing,
} from './processing.section.js';
import {structuredRenderSourceShape, type StructuredRenderSource} from './source.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {
    StructuredRenderTextStyle,
    structuredRenderTextShape,
    type StructuredRenderText,
} from './text.section.js';

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
 * All sections allowed inside {@link StructuredRenderTable} cells.
 *
 * @category Internal
 */
export type StructuredRenderShapesAllowedInTable =
    | StructuredRenderText
    | StructuredRenderInlineCode
    | RenderDataMarkdown
    | StructuredRenderTag
    | StructuredRenderList
    | StructuredRenderEmpty
    | StructuredRenderProcessing;

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
 * A section that renders a table.
 *
 * @category Section
 */
export type StructuredRenderTable = SectionType<
    'table',
    {
        direction: StructuredRenderCellDirection;
        /** Applies a text style to all text rendered within the table. */
        style?: StructuredRenderTextStyle | null | undefined;
        headers: {
            key: string;
            text?: StructuredRenderText | null | undefined;
            /**
             * If `true`, all data associated with this header (the column / row) is not rendered at
             * all.
             */
            hidden?: boolean | null | undefined;
        }[];
        entries: {
            data: Record<
                string,
                | (StructuredRenderShapesAllowedInTable | null | undefined)
                | (StructuredRenderShapesAllowedInTable | null | undefined)[]
            >;
            sources?: (StructuredRenderSource | null | undefined)[] | null | undefined;
        }[];
        footerRows?:
            | {
                  /** @default StructuredRenderTableFooterAlignment.Left */
                  alignment?: StructuredRenderTableFooterAlignment | null | undefined;
                  cells:
                      | (StructuredRenderShapesAllowedInTable | null | undefined)
                      | (StructuredRenderShapesAllowedInTable | null | undefined)[];
              }[]
            | null
            | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderTable}.
 *
 * @category Internal
 */
export const structuredRenderTableShape = createStructuredRenderSection(
    'table',
)<StructuredRenderTable>({
    direction: enumShape(StructuredRenderCellDirection),
    style: nullableShape(enumShape(StructuredRenderTextStyle)),
    headers: [
        {
            key: '',
            text: nullableShape(structuredRenderTextShape),
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
            alignment: nullableShape(enumShape(StructuredRenderTableFooterAlignment)),
            cells: unionShape(nullableShape(structuredRenderShapesAllowedInTableShape), [
                nullableShape(structuredRenderShapesAllowedInTableShape),
            ]),
        },
    ]),
});

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
