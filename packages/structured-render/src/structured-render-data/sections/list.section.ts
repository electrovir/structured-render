import {defineShape, nullableShape, unionShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderEmptyShape} from './empty.section.js';
import {structuredRenderIconShape} from './icon.section.js';
import {structuredRenderTagShape} from './tag.section.js';
import {structuredRenderTextShape} from './text.section.js';

/**
 * Shape definition for {@link StructuredRenderListItem}.
 *
 * @category Internal
 */
export const structuredRenderListItemShape = defineShape({
    content: nullableShape(
        unionShape(structuredRenderTextShape, structuredRenderTagShape, structuredRenderEmptyShape),
    ),
    /**
     * Replaces the bullet. If a given icon key is not found in the supported list of icons, it is
     * ignored.
     */
    icon: nullableShape(structuredRenderIconShape),
});

/**
 * Shape definition for {@link StructuredRenderList}.
 *
 * @category Internal
 */
export const structuredRenderListShape = createStructuredRenderSection('list', {
    items: [
        structuredRenderListItemShape,
    ],
});

/**
 * A single item within a {@link StructuredRenderList}.
 *
 * @category Internal
 */
export type StructuredRenderListItem = typeof structuredRenderListItemShape.runtimeType;

/**
 * A section that renders a list of items.
 *
 * @category Section
 */
export type StructuredRenderList = typeof structuredRenderListShape.runtimeType;
