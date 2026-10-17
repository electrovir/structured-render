import {nullableShape, unsafeShape, type UnsafeShape} from 'object-shape-tester';
import {structuredRenderIconShape, type StructuredRenderIcon} from './sections/icon.section.js';
import {
    createStructuredRenderCardShape,
    type StructuredRenderCard,
} from './structured-render-card.js';

/**
 * The top data type for this package. All structured render data is contained herein. This should
 * be what anything producing structured render data should produce.
 *
 * @category Structured Render Data
 */
export type StructuredRenderData<IconKey extends string = string> = (
    | StructuredRenderCard<IconKey>
    | null
    | undefined
)[];

/**
 * Creates a shape for {@link StructuredRenderData} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderDataShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return unsafeShape<StructuredRenderData<IconKey>>([
        nullableShape(createStructuredRenderCardShape(iconShape)),
    ]);
}

/**
 * Shape definition for {@link StructuredRenderData}.
 *
 * @category Internal
 */
export const structuredRenderDataShape = createStructuredRenderDataShape(structuredRenderIconShape);
