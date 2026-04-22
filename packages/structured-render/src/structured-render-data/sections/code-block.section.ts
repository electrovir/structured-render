import {nullableShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';

/**
 * A section that renders a block of code.
 *
 * @category Section
 */
export type StructuredRenderCodeBlock = SectionType<
    'codeBlock',
    {
        code: string;
        syntax?: string | null | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderCodeBlock}.
 *
 * @category Internal
 */
export const structuredRenderCodeBlockShape = createStructuredRenderSection(
    'codeBlock',
)<StructuredRenderCodeBlock>({
    syntax: nullableShape(''),
    code: '',
});
