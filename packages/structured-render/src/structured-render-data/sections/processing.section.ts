import {defineShape, exactShape} from 'object-shape-tester';

/**
 * Shape definition for {@link StructuredRenderProcessing}.
 *
 * @category Internal
 */
export const structuredRenderProcessingShape = defineShape({
    type: exactShape('processing'),
});

/**
 * A section that renders a processing indicator in HTML.
 *
 * @category Section
 */
export type StructuredRenderProcessing = typeof structuredRenderProcessingShape.runtimeType;
