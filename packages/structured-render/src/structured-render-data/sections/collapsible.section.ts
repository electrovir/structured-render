import {primitiveShape, unionShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderCodeBlockShape} from './code-block.section.js';
import {structuredRenderEmptyShape} from './empty.section.js';
import {structuredRenderHeadingShape} from './heading.section.js';
import {structuredRenderIconShape} from './icon.section.js';
import {structuredRenderInlineCodeShape} from './inline-code.section.js';
import {structuredRenderListShape} from './list.section.js';
import {renderDataMarkdownShape} from './markdown.section.js';
import {structuredRenderProcessingShape} from './processing.section.js';
import {structuredRenderTableShape} from './table.section.js';
import {structuredRenderTagShape} from './tag.section.js';
import {structuredRenderTextShape} from './text.section.js';

/**
 * A section that wraps any other section in a collapsible.
 *
 * @category Section
 */
export const collapsibleSectionShape = createStructuredRenderSection('collapsible', {
    header: primitiveShape(),
    content: [
        unionShape(
            renderDataMarkdownShape,
            structuredRenderCodeBlockShape,
            structuredRenderEmptyShape,
            structuredRenderHeadingShape,
            structuredRenderIconShape,
            structuredRenderInlineCodeShape,
            structuredRenderListShape,
            structuredRenderProcessingShape,
            structuredRenderTableShape,
            structuredRenderTagShape,
            structuredRenderTextShape,
        ),
    ],
});
