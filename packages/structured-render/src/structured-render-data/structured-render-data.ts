import {defineShape, nullableShape} from 'object-shape-tester';
import {structuredRenderCardShape} from './structured-render-card.js';

/**
 * Shape definition for {@link StructuredRenderData}.
 *
 * @category Internal
 */
export const structuredRenderDataShape = defineShape([nullableShape(structuredRenderCardShape)]);
/**
 * The top data type for this package. All structured render data is contained herein. This should
 * be what anything producing structured render data should produce.
 *
 * @category Structured Render Data
 */
export type StructuredRenderData = typeof structuredRenderDataShape.runtimeType;
