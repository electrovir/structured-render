import {defineShape, exactShape} from 'object-shape-tester';

/**
 * Shape definition for {@link StructuredRenderEmpty}.
 *
 * @category Internal
 */
export const structuredRenderEmptyShape = defineShape({
    type: exactShape('empty'),
});

/**
 * A section that renders nothing.
 *
 * @category Section
 */
export type StructuredRenderEmpty = typeof structuredRenderEmptyShape.runtimeType;
