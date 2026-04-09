import {nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderIconShape} from './icon.section.js';

/**
 * Shape definition for {@link StructuredRenderHeading}.
 *
 * @category Internal
 */
export const structuredRenderHeadingShape = createStructuredRenderSection('heading', {
    text: nullableShape(primitiveShape()),
    /** Rendered before the text. */
    icon: nullableShape(structuredRenderIconShape),
});

/**
 * A section that renders a heading.
 *
 * @category Section
 */
export type StructuredRenderHeading = typeof structuredRenderHeadingShape.runtimeType;
