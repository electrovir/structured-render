import {createStructuredRenderSection} from '../create-section.js';

/**
 * Shape definition for {@link RenderDataMarkdown}.
 *
 * @category Internal
 */
export const renderDataMarkdownShape = createStructuredRenderSection('markdown', {
    markdown: '',
});

/**
 * A section that renders markdown content.
 *
 * @category Section
 */
export type RenderDataMarkdown = typeof renderDataMarkdownShape.runtimeType;
