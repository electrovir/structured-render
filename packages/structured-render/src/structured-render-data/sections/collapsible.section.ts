import {type Primitive} from '@augment-vir/assert';
import {primitiveShape, unionShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {
    structuredRenderCodeBlockShape,
    type StructuredRenderCodeBlock,
} from './code-block.section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './empty.section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';
import {
    structuredRenderInlineCodeShape,
    type StructuredRenderInlineCode,
} from './inline-code.section.js';
import {structuredRenderListShape, type StructuredRenderList} from './list.section.js';
import {renderDataMarkdownShape, type RenderDataMarkdown} from './markdown.section.js';
import {
    structuredRenderProcessingShape,
    type StructuredRenderProcessing,
} from './processing.section.js';
import {structuredRenderTableShape, type StructuredRenderTable} from './table.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {structuredRenderTextShape, type StructuredRenderText} from './text.section.js';

/**
 * A section that wraps any other section in a collapsible.
 *
 * @category Section
 */
export type CollapsibleSection = SectionType<
    'collapsible',
    {
        header: Primitive;
        content: (
            | RenderDataMarkdown
            | StructuredRenderCodeBlock
            | StructuredRenderEmpty
            | StructuredRenderIcon
            | StructuredRenderInlineCode
            | StructuredRenderList
            | StructuredRenderProcessing
            | StructuredRenderTable
            | StructuredRenderTag
            | StructuredRenderText
        )[];
    }
>;

/**
 * Shape definition for {@link CollapsibleSection}.
 *
 * @category Internal
 */
export const collapsibleSectionShape = createStructuredRenderSection(
    'collapsible',
)<CollapsibleSection>({
    header: primitiveShape(),
    content: [
        unionShape(
            renderDataMarkdownShape,
            structuredRenderCodeBlockShape,
            structuredRenderEmptyShape,
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
