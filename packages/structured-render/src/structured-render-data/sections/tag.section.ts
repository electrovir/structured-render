import {
    enumShape,
    nullableShape,
    partialShape,
    primitiveShape,
    unionShape,
} from 'object-shape-tester';
import {ViraColorVariant} from 'vira';
import {createStructuredRenderSection} from '../create-section.js';

/**
 * Shape definition for {@link StructuredRenderTag}.
 *
 * @category Internal
 */
export const structuredRenderTagShape = createStructuredRenderSection('tag', {
    text: primitiveShape(''),
    useBigTag: nullableShape(false),
    color: nullableShape(
        unionShape(
            {
                custom: partialShape({
                    backgroundColor: nullableShape(''),
                    foregroundColor: nullableShape(''),
                }),
            },
            {
                variant: enumShape(ViraColorVariant),
            },
        ),
    ),
});

/**
 * A section that renders a tag.
 *
 * @category Section
 */
export type StructuredRenderTag = typeof structuredRenderTagShape.runtimeType;
