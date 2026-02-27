import {defineShape, nullableShape} from 'object-shape-tester';
import {structuredRenderSectionShape} from './structured-render-section.js';

/**
 * Shape definition for {@link StructuredRenderCard}.
 *
 * @category Internal
 */
export const structuredRenderCardShape = defineShape({
    cardTitle: nullableShape(''),
    sections: [nullableShape(structuredRenderSectionShape)],
});
/**
 * A card with structured render sections.
 *
 * @category Structured Render Data
 */
export type StructuredRenderCard = typeof structuredRenderCardShape.runtimeType;
