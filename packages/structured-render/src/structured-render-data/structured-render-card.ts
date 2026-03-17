import {defineShape, nullableShape} from 'object-shape-tester';
import {structuredRenderIconShape} from './sections/icon.section.js';
import {structuredRenderSectionShape} from './structured-render-section.js';

/**
 * Shape definition for {@link StructuredRenderCard}.
 *
 * @category Internal
 */
export const structuredRenderCardShape = defineShape({
    cardTitle: nullableShape(''),
    cardTitleIcon: nullableShape(structuredRenderIconShape),
    sections: [nullableShape(structuredRenderSectionShape)],
});
/**
 * A card with structured render sections.
 *
 * @category Structured Render Data
 */
export type StructuredRenderCard = typeof structuredRenderCardShape.runtimeType;
