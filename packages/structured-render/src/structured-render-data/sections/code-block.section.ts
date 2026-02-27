import {nullableShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';

/**
 * Shape definition for {@link StructuredRenderCodeBlock}.
 *
 * @category Internal
 */
export const structuredRenderCodeBlockShape = createStructuredRenderSection('codeBlock', {
    syntax: nullableShape(''),
    code: '',
});

/**
 * A section that renders a block of code.
 *
 * @category Section
 */
export type StructuredRenderCodeBlock = typeof structuredRenderCodeBlockShape.runtimeType;
