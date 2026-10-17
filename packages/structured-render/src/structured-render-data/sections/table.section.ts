import {type ArrayElement} from '@augment-vir/common';
import {
    enumShape,
    nullableShape,
    recordShape,
    unionShape,
    type UnsafeShape,
} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './empty.section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';
import {
    structuredRenderInlineCodeShape,
    type StructuredRenderInlineCode,
} from './inline-code.section.js';
import {
    createStructuredRenderListShape,
    structuredRenderListShape,
    type StructuredRenderList,
} from './list.section.js';
import {renderDataMarkdownShape, type RenderDataMarkdown} from './markdown.section.js';
import {
    structuredRenderProcessingShape,
    type StructuredRenderProcessing,
} from './processing.section.js';
import {structuredRenderSourceShape, type StructuredRenderSource} from './source.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {
    StructuredRenderTextStyle,
    createStructuredRenderTextShape,
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
export type StructuredRenderShapesAllowedInTable<IconKey extends string = string> =
    | StructuredRenderText<IconKey>
    | StructuredRenderInlineCode
    | RenderDataMarkdown
    | StructuredRenderTag
    | StructuredRenderList<IconKey>
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
export type StructuredRenderTable<IconKey extends string = string> = SectionType<
    'table',
    {
        direction: StructuredRenderCellDirection;
        /** Applies a text style to all text rendered within the table. */
        style?: StructuredRenderTextStyle | null | undefined;
        headers: {
            key: string;
            text?: StructuredRenderText<IconKey> | null | undefined;
            /**
             * If `true`, all data associated with this header (the column / row) is not rendered at
             * all.
             */
            hidden?: boolean | null | undefined;
            /**
             * If set, sorting this column uses the value found at this data key in each entry
             * instead of the column's own `key`. Use this when the displayed content differs from
             * the value you want to sort by (e.g. a human-readable date is displayed but an ISO or
             * epoch value is used for sorting). The referenced key is typically provided by a
             * separate `hidden` header.
             */
            sortKey?: string | null | undefined;
            /**
             * If `true`, this column cannot be sorted by the user: its header is not interactive
             * and no sort indicator is shown. Only applies to horizontal tables, which are the only
             * sortable kind.
             */
            disableSort?: boolean | null | undefined;
        }[];
        entries: {
            data: Record<
                string,
                | (StructuredRenderShapesAllowedInTable<IconKey> | null | undefined)
                | (StructuredRenderShapesAllowedInTable<IconKey> | null | undefined)[]
            >;
            sources?: (StructuredRenderSource | null | undefined)[] | null | undefined;
        }[];
        footerRows?:
            | {
                  /** @default StructuredRenderTableFooterAlignment.Left */
                  alignment?: StructuredRenderTableFooterAlignment | null | undefined;
                  cells:
                      | (StructuredRenderShapesAllowedInTable<IconKey> | null | undefined)
                      | (StructuredRenderShapesAllowedInTable<IconKey> | null | undefined)[];
              }[]
            | null
            | undefined;
    }
>;

/**
 * Creates a shape for {@link StructuredRenderTable} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderTableShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    const textShape = createStructuredRenderTextShape(iconShape);
    const cellShape = unionShape(
        textShape,
        structuredRenderInlineCodeShape,
        renderDataMarkdownShape,
        structuredRenderTagShape,
        createStructuredRenderListShape(iconShape),
        structuredRenderEmptyShape,
        structuredRenderProcessingShape,
    );

    return createStructuredRenderSection('table')<StructuredRenderTable<IconKey>>({
        direction: enumShape(StructuredRenderCellDirection),
        style: nullableShape(enumShape(StructuredRenderTextStyle)),
        headers: [
            {
                key: '',
                text: nullableShape(textShape),
                hidden: nullableShape(false),
                sortKey: nullableShape(''),
                disableSort: nullableShape(false),
            },
        ],
        entries: [
            {
                data: recordShape({
                    keys: '',
                    values: unionShape(nullableShape(cellShape), [
                        nullableShape(cellShape),
                    ]),
                }),
                sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
            },
        ],
        footerRows: nullableShape([
            {
                alignment: nullableShape(enumShape(StructuredRenderTableFooterAlignment)),
                cells: unionShape(nullableShape(cellShape), [
                    nullableShape(cellShape),
                ]),
            },
        ]),
    });
}

/**
 * Shape definition for {@link StructuredRenderTable}.
 *
 * @category Internal
 */
export const structuredRenderTableShape =
    createStructuredRenderTableShape(structuredRenderIconShape);

/**
 * A helper for defining a {@link StructuredRenderTable} instance.
 *
 * @category Util
 */
export function createRenderDataTable<
    const HeaderKey extends string,
    const IconKey extends string = never,
>({
    direction,
    headers,
    entries,
    footerRows,
}: Readonly<{
    direction: StructuredRenderCellDirection;
    /**
     * Header keys are inferred as their own type parameter, rather than read from a generic
     * `headers` type, because a `data` key type derived from another inferred type parameter blocks
     * TypeScript from inferring `IconKey` from `data`.
     */
    headers: (ArrayElement<StructuredRenderTable<IconKey>['headers']> & {key: HeaderKey})[];
    entries: {
        data: Record<HeaderKey, StructuredRenderShapesAllowedInTable<IconKey> | undefined>;
        sources?: (StructuredRenderSource | undefined)[] | undefined;
    }[];
    footerRows?: StructuredRenderTable<IconKey>['footerRows'];
}>): StructuredRenderTable<IconKey> {
    return {
        type: 'table',
        direction,
        headers,
        entries,
        footerRows,
    };
}
