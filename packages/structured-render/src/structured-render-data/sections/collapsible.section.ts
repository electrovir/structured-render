import {type Primitive} from '@augment-vir/assert';
import {primitiveShape, unionShape, type UnsafeShape} from 'object-shape-tester';
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
import {createStructuredRenderListShape, type StructuredRenderList} from './list.section.js';
import {renderDataMarkdownShape, type RenderDataMarkdown} from './markdown.section.js';
import {
    structuredRenderProcessingShape,
    type StructuredRenderProcessing,
} from './processing.section.js';
import {createStructuredRenderTableShape, type StructuredRenderTable} from './table.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './tag.section.js';
import {createStructuredRenderTextShape, type StructuredRenderText} from './text.section.js';

/**
 * A section that wraps any other section in a collapsible.
 *
 * @category Section
 */
export type CollapsibleSection<IconKey extends string = string> = SectionType<
    'collapsible',
    {
        header: Primitive;
        content: (
            | RenderDataMarkdown
            | StructuredRenderCodeBlock
            | StructuredRenderEmpty
            | StructuredRenderIcon<IconKey>
            | StructuredRenderInlineCode
            | StructuredRenderList<IconKey>
            | StructuredRenderProcessing
            | StructuredRenderTable<IconKey>
            | StructuredRenderTag
            | StructuredRenderText<IconKey>
        )[];
    }
>;

/**
 * Creates a shape for {@link CollapsibleSection} with the given icon shape.
 *
 * @category Internal
 */
export function createCollapsibleSectionShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return createStructuredRenderSection('collapsible')<CollapsibleSection<IconKey>>({
        header: primitiveShape(),
        content: [
            unionShape(
                renderDataMarkdownShape,
                structuredRenderCodeBlockShape,
                structuredRenderEmptyShape,
                iconShape,
                structuredRenderInlineCodeShape,
                createStructuredRenderListShape(iconShape),
                structuredRenderProcessingShape,
                createStructuredRenderTableShape(iconShape),
                structuredRenderTagShape,
                createStructuredRenderTextShape(iconShape),
            ),
        ],
    });
}

/**
 * Shape definition for {@link CollapsibleSection}.
 *
 * @category Internal
 */
export const collapsibleSectionShape = createCollapsibleSectionShape(structuredRenderIconShape);
