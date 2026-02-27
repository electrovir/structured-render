import {check, checkWrap} from '@augment-vir/assert';
import {ensureArray, type AtLeastTuple, type MaybeArray} from '@augment-vir/common';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';

/**
 * Shape definition for {@link StructuredRenderFileBoundingBox}.
 *
 * @category Internal
 */
export const structuredRenderFileBoundingBoxShape = defineShape({
    x1: -1,
    y1: -1,
    x2: -1,
    y2: -1,
});

/**
 * A bounding box within a source file.
 *
 * @category Section
 */
export type StructuredRenderFileBoundingBox =
    typeof structuredRenderFileBoundingBoxShape.runtimeType;

/**
 * A shape definition for structured render sources. Any structured render can have sources.
 *
 * @category Internal
 */
export const structuredRenderSourceShape = defineShape({
    type: exactShape('source'),
    pageNumbers: nullableShape([nullableShape(-1)]),
    fileName: nullableShape(''),
    fileBoundingBoxes: nullableShape([
        nullableShape(structuredRenderFileBoundingBoxShape),
    ]),
    quote: nullableShape(''),
});

/**
 * A section that renders a source reference.
 *
 * @category Section
 */
export type StructuredRenderSource = typeof structuredRenderSourceShape.runtimeType;

/**
 * All acceptable configurations of a source section that can be rendered.
 *
 * @category Internal
 */
export type SourcesInput = Readonly<MaybeArray<StructuredRenderSource | undefined | null>>;

/**
 * Handle all the possible values for sources and combine them into an easy to use return type.
 *
 * @category Internal
 */
export function createCleanSources(
    rawSources: SourcesInput,
): undefined | AtLeastTuple<StructuredRenderSource, 1> {
    return checkWrap.isLengthAtLeast(ensureArray(rawSources).filter(sourceHasContent), 1);
}

/**
 * Check if a source section has any content.
 *
 * @category Internal
 */
export function sourceHasContent(
    section: Readonly<StructuredRenderSource> | undefined | null,
): section is NonNullable<typeof section> {
    return !!(
        section &&
        (section.quote?.trim() ||
            section.fileName ||
            section.pageNumbers?.filter(check.isDefined).length)
    );
}
