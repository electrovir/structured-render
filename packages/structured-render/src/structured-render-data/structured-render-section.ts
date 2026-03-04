import {assert} from '@augment-vir/assert';
import {arrayToObject, ensureArray, type AnyObject} from '@augment-vir/common';
import {unionShape} from 'object-shape-tester';
import {structuredRenderCodeBlockShape} from './sections/code-block.section.js';
import {structuredRenderEmptyShape} from './sections/empty.section.js';
import {structuredRenderIconShape} from './sections/icon.section.js';
import {structuredRenderInlineCodeShape} from './sections/inline-code.section.js';
import {structuredRenderListShape} from './sections/list.section.js';
import {renderDataMarkdownShape} from './sections/markdown.section.js';
import {structuredRenderProcessingShape} from './sections/processing.section.js';
import {sourceHasContent, structuredRenderSourceShape} from './sections/source.section.js';
import {structuredRenderTableShape, type StructuredRenderTable} from './sections/table.section.js';
import {structuredRenderTagShape} from './sections/tag.section.js';
import {structuredRenderTextShape} from './sections/text.section.js';

/**
 * All structured render section shapes.
 *
 * @category Internal
 */
export const allStructuredRenderSectionShapes = [
    structuredRenderCodeBlockShape,
    structuredRenderInlineCodeShape,
    structuredRenderEmptyShape,
    structuredRenderListShape,
    renderDataMarkdownShape,
    structuredRenderTagShape,
    structuredRenderProcessingShape,
    structuredRenderSourceShape,
    structuredRenderTableShape,
    structuredRenderTextShape,
    structuredRenderIconShape,
] as const;

/**
 * A union of all structured render section shapes.
 *
 * @category Internal
 */
export const structuredRenderSectionShape = unionShape(...allStructuredRenderSectionShapes);
/**
 * Any supported structured render section.
 *
 * @category Internal
 */
export type StructuredRenderSection = typeof structuredRenderSectionShape.runtimeType;
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
        return section.items.some((item) =>
            ensureArray(item.content).some((content) => {
                return doesSectionHaveContent(content);
            }),
        );
    } else if (
        section.type === StructuredRenderSectionType.empty ||
        section.type === StructuredRenderSectionType.processing
    ) {
        return false;
    } else if (section.type === StructuredRenderSectionType.tag) {
        return !!section.text;
    } else if (section.type === StructuredRenderSectionType.codeBlock) {
        return !!section.code;
    } else if (section.type === StructuredRenderSectionType.inlineCode) {
        return !!section.code;
    } else if (section.type === StructuredRenderSectionType.markdown) {
        return !!section.markdown;
    } else if (section.type === StructuredRenderSectionType.table) {
        return section.entries.some((entry) => {
            return Object.values(entry.data).some((value) =>
                ensureArray(value).some((innerValue) => doesSectionHaveContent(innerValue)),
            );
        });
    } else if (section.type === StructuredRenderSectionType.text) {
        return !!String(section.text) || !!section.icon;
    } else if (section.type === StructuredRenderSectionType.source) {
        return sourceHasContent(section);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (section.type === StructuredRenderSectionType.icon) {
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
