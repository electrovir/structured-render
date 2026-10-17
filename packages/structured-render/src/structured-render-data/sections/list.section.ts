import {nullableShape, unionShape, unsafeShape, type UnsafeShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './empty.section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';
import {structuredRenderSourceShape, type StructuredRenderSource} from './source.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {
    createStructuredRenderTextShape,
    structuredRenderTextShape,
    type StructuredRenderText,
} from './text.section.js';

/**
 * Allowed content for a {@link StructuredRenderListItem}.
 *
 * @category Internal
 */
export type ListItemContent<IconKey extends string = string> =
    | StructuredRenderText<IconKey>
    | StructuredRenderTag
    | StructuredRenderEmpty;

/**
 * Allowed shapes for list item content.
 *
 * @category Internal
 */
export const listItemContentShape = unionShape(
    structuredRenderTextShape,
    structuredRenderTagShape,
    structuredRenderEmptyShape,
);

/**
 * A single item within a {@link StructuredRenderList}.
 *
 * @category Internal
 */
export type StructuredRenderListItem<IconKey extends string = string> = {
    content?:
        | ListItemContent<IconKey>
        | (ListItemContent<IconKey> | null | undefined)[]
        | null
        | undefined;
    /**
     * Replaces the bullet. If a given icon key is not found in the supported list of icons, it is
     * ignored.
     */
    icon?: StructuredRenderIcon<IconKey> | null | undefined;
    sources?: (StructuredRenderSource | null | undefined)[] | null | undefined;
};

/**
 * Creates a shape for {@link StructuredRenderListItem} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderListItemShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    const contentShape = unionShape(
        createStructuredRenderTextShape(iconShape),
        structuredRenderTagShape,
        structuredRenderEmptyShape,
    );

    return unsafeShape<StructuredRenderListItem<IconKey>>({
        content: nullableShape(unionShape(contentShape, [nullableShape(contentShape)])),
        icon: nullableShape(iconShape),
        sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
    });
}

/**
 * Shape definition for {@link StructuredRenderListItem}.
 *
 * @category Internal
 */
export const structuredRenderListItemShape =
    createStructuredRenderListItemShape(structuredRenderIconShape);

/**
 * A section that renders a list of items.
 *
 * @category Section
 */
export type StructuredRenderList<IconKey extends string = string> = SectionType<
    'list',
    {
        items: StructuredRenderListItem<IconKey>[];
    }
>;

/**
 * Creates a shape for {@link StructuredRenderList} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderListShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return createStructuredRenderSection('list')<StructuredRenderList<IconKey>>({
        items: [
            createStructuredRenderListItemShape(iconShape),
        ],
    });
}

/**
 * Shape definition for {@link StructuredRenderList}.
 *
 * @category Internal
 */
export const structuredRenderListShape = createStructuredRenderListShape(structuredRenderIconShape);
