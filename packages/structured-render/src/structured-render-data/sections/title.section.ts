import {nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderIconShape} from './icon.section.js';

/**
 * Shape definition for {@link StructuredRenderTitle}.
 *
 * @category Internal
 */
export const structuredRenderTitleShape = createStructuredRenderSection('title', {
    text: nullableShape(primitiveShape()),
    /** Rendered before the text. */
    icon: nullableShape(structuredRenderIconShape),
});

/**
 * A section that renders a title.
 *
 * @category Section
 */
export type StructuredRenderTitle = typeof structuredRenderTitleShape.runtimeType;
