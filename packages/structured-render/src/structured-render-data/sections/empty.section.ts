import {exactShape, unsafeShape} from 'object-shape-tester';

/**
 * A section that renders nothing.
 *
 * @category Section
 */
export type StructuredRenderEmpty = {
    type: 'empty';
};

/**
 * Shape definition for {@link StructuredRenderEmpty}.
 *
 * @category Internal
 */
export const structuredRenderEmptyShape = unsafeShape<StructuredRenderEmpty>({
    type: exactShape('empty'),
});
