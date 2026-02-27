import {createStructuredRenderSection} from '../create-section.js';

/**
 * Shape definition for {@link StructuredRenderInlineCode}.
 *
 * @category Internal
 */
export const structuredRenderInlineCodeShape = createStructuredRenderSection('inlineCode', {
    code: '',
});

/**
 * A section that renders inline code.
 *
 * @category Section
 */
export type StructuredRenderInlineCode = typeof structuredRenderInlineCodeShape.runtimeType;
