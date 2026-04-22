import {createStructuredRenderSection, type SectionType} from '../create-section.js';

/**
 * A section that renders inline code.
 *
 * @category Section
 */
export type StructuredRenderInlineCode = SectionType<
    'inlineCode',
    {
        code: string;
    }
>;

/**
 * Shape definition for {@link StructuredRenderInlineCode}.
 *
 * @category Internal
 */
export const structuredRenderInlineCodeShape = createStructuredRenderSection(
    'inlineCode',
)<StructuredRenderInlineCode>({
    code: '',
});
