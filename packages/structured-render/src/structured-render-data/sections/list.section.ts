import {nullableShape, unionShape, unsafeShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './empty.section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';
import {structuredRenderSourceShape, type StructuredRenderSource} from './source.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {structuredRenderTextShape, type StructuredRenderText} from './text.section.js';

/**
 * Allowed content for a {@link StructuredRenderListItem}.
 *
 * @category Internal
 */
export type ListItemContent = StructuredRenderText | StructuredRenderTag | StructuredRenderEmpty;

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
export type StructuredRenderListItem = {
    content?: ListItemContent | (ListItemContent | null | undefined)[] | null | undefined;
    /**
     * Replaces the bullet. If a given icon key is not found in the supported list of icons, it is
     * ignored.
     */
    icon?: StructuredRenderIcon | null | undefined;
    sources?: (StructuredRenderSource | null | undefined)[] | null | undefined;
};

/**
 * Shape definition for {@link StructuredRenderListItem}.
 *
 * @category Internal
 */
export const structuredRenderListItemShape = unsafeShape<StructuredRenderListItem>({
    content: nullableShape(unionShape(listItemContentShape, [nullableShape(listItemContentShape)])),
    icon: nullableShape(structuredRenderIconShape),
    sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
});

/**
 * A section that renders a list of items.
 *
 * @category Section
 */
export type StructuredRenderList = SectionType<
    'list',
    {
        items: StructuredRenderListItem[];
    }
>;

/**
 * Shape definition for {@link StructuredRenderList}.
 *
 * @category Internal
 */
export const structuredRenderListShape = createStructuredRenderSection(
    'list',
)<StructuredRenderList>({
    items: [
        structuredRenderListItemShape,
    ],
});
