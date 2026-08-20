import {assert} from '@augment-vir/assert';
import {arrayToObject, ensureArray, type AnyObject} from '@augment-vir/common';
import {unionShape} from 'object-shape-tester';
import {
    structuredRenderCodeBlockShape,
    type StructuredRenderCodeBlock,
} from './sections/code-block.section.js';
import {collapsibleSectionShape, type CollapsibleSection} from './sections/collapsible.section.js';
import {
    structuredRenderCopyCardShape,
    type StructuredRenderCopyCard,
} from './sections/copy-card.section.js';
import {structuredRenderEmptyShape, type StructuredRenderEmpty} from './sections/empty.section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './sections/icon.section.js';
import {
    structuredRenderInlineCodeShape,
    type StructuredRenderInlineCode,
} from './sections/inline-code.section.js';
import {structuredRenderListShape, type StructuredRenderList} from './sections/list.section.js';
import {renderDataMarkdownShape, type RenderDataMarkdown} from './sections/markdown.section.js';
import {
    structuredRenderProcessingShape,
    type StructuredRenderProcessing,
} from './sections/processing.section.js';
import {
    sourceHasContent,
    structuredRenderSourceShape,
    type StructuredRenderSource,
} from './sections/source.section.js';
import {structuredRenderTableShape, type StructuredRenderTable} from './sections/table.section.js';
import {structuredRenderTagShape, type StructuredRenderTag} from './sections/tag.section.js';
import {structuredRenderTextShape, type StructuredRenderText} from './sections/text.section.js';
import {structuredRenderTitleShape, type StructuredRenderTitle} from './sections/title.section.js';

/**
 * All structured render section shapes.
 *
 * @category Internal
 */
export const allStructuredRenderSectionShapes = [
    collapsibleSectionShape,
    renderDataMarkdownShape,
    structuredRenderCodeBlockShape,
    structuredRenderCopyCardShape,
    structuredRenderEmptyShape,
    structuredRenderTitleShape,
    structuredRenderIconShape,
    structuredRenderInlineCodeShape,
    structuredRenderListShape,
    structuredRenderProcessingShape,
    structuredRenderSourceShape,
    structuredRenderTableShape,
    structuredRenderTagShape,
    structuredRenderTextShape,
] as const;

/**
 * Any supported structured render section.
 *
 * @category Internal
 */
export type StructuredRenderSection =
    | CollapsibleSection
    | RenderDataMarkdown
    | StructuredRenderCodeBlock
    | StructuredRenderCopyCard
    | StructuredRenderEmpty
    | StructuredRenderTitle
    | StructuredRenderIcon
    | StructuredRenderInlineCode
    | StructuredRenderList
    | StructuredRenderProcessing
    | StructuredRenderSource
    | StructuredRenderTable
    | StructuredRenderTag
    | StructuredRenderText;

/**
 * A union of all structured render section shapes.
 *
 * @category Internal
 */
export const structuredRenderSectionShape = unionShape(...allStructuredRenderSectionShapes);
/**
 * Any supported structured render section type.
 *
 * @category Internal
 */
export type StructuredRenderSectionType = StructuredRenderSection['type'];
/**
 * An enum of all supported structured render section types.
 *
 * @category Internal
 */
export const StructuredRenderSectionType = arrayToObject(
    allStructuredRenderSectionShapes,
    (sectionShape) => {
        return {
            key: sectionShape.default.type,
            value: sectionShape.default.type,
        };
    },
    {
        useRequired: true,
    },
) satisfies Record<StructuredRenderSectionType, StructuredRenderSectionType> as {
    [Key in StructuredRenderSectionType]: Key;
};

/**
 * Checks if the given structured render section has any content.
 *
 * @category Util
 */
export function doesSectionHaveContent(
    section: StructuredRenderSection | undefined | null,
): boolean {
    if (!section) {
        return false;
    } else if (section.type === StructuredRenderSectionType.list) {
        return section.items.some((item) => {
            return ensureArray(item.content).some((content) => {
                return doesSectionHaveContent(content);
            });
        });
    } else if (
        section.type === StructuredRenderSectionType.empty ||
        section.type === StructuredRenderSectionType.processing
    ) {
        return false;
    } else if (section.type === StructuredRenderSectionType.tag) {
        return !!section.text;
    } else if (section.type === StructuredRenderSectionType.codeBlock) {
        return !!section.code;
    } else if (section.type === StructuredRenderSectionType.copyCard) {
        return !!String(section.text) || !!section.header;
    } else if (section.type === StructuredRenderSectionType.inlineCode) {
        return !!section.code;
    } else if (section.type === StructuredRenderSectionType.markdown) {
        return !!section.markdown;
    } else if (section.type === StructuredRenderSectionType.table) {
        return section.entries.some((entry) => {
            return Object.values(entry.data).some((value) => {
                return ensureArray(value).some((innerValue) => doesSectionHaveContent(innerValue));
            });
        });
    } else if (
        section.type === StructuredRenderSectionType.text ||
        section.type === StructuredRenderSectionType.title
    ) {
        return !!String(section.text) || !!section.icon;
    } else if (section.type === StructuredRenderSectionType.source) {
        return sourceHasContent(section);
    } else if (
        section.type === StructuredRenderSectionType.icon ||
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        section.type === StructuredRenderSectionType.collapsible
    ) {
        return true;
    } else {
        assert.tsType(section).equals<never>();
        assert.never(`Unexpected section type: ${String((section as AnyObject).type)}`);
    }
}

/**
 * A helper for falling back to a different structured render section if the given structured render
 * table is empty. Returns a full {@link StructuredRenderSection} with the given `sectionTitle`.
 *
 * @category Util
 */
export function emptyStructuredRenderTableFallback<
    Fallback extends Omit<StructuredRenderSection, 'sectionTitle'>,
>({
    table,
    fallback,
    sectionTitle,
}: {
    table: Omit<StructuredRenderTable, 'sectionTitle'>;
    fallback: Fallback;
    sectionTitle: string;
}): StructuredRenderSection {
    return {
        ...(doesSectionHaveContent(table) ? table : fallback),
        sectionTitle,
    } as StructuredRenderSection;
}
