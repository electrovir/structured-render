import {nullableShape, unsafeShape} from 'object-shape-tester';
import {structuredRenderCardShape, type StructuredRenderCard} from './structured-render-card.js';

/**
 * The top data type for this package. All structured render data is contained herein. This should
 * be what anything producing structured render data should produce.
 *
 * @category Structured Render Data
 */
export type StructuredRenderData = (StructuredRenderCard | null | undefined)[];

/**
 * Shape definition for {@link StructuredRenderData}.
 *
 * @category Internal
 */
export const structuredRenderDataShape = unsafeShape<StructuredRenderData>([
    nullableShape(structuredRenderCardShape),
]);
