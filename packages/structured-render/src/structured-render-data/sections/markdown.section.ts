import {createStructuredRenderSection, type SectionType} from '../create-section.js';

/**
 * A section that renders markdown content.
 *
 * @category Section
 */
export type RenderDataMarkdown = SectionType<
    'markdown',
    {
        markdown: string;
    }
>;

/**
 * Shape definition for {@link RenderDataMarkdown}.
 *
 * @category Internal
 */
export const renderDataMarkdownShape = createStructuredRenderSection(
    'markdown',
)<RenderDataMarkdown>({
    markdown: '',
});
