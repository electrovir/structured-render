import {type Primitive} from '@augment-vir/assert';
import {
    enumShape,
    nullableShape,
    partialShape,
    primitiveShape,
    unionShape,
} from 'object-shape-tester';
import {ViraColorVariant} from 'vira';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';

/**
 * A section that renders a tag.
 *
 * @category Section
 */
export type StructuredRenderTag = SectionType<
    'tag',
    {
        text: Primitive;
        useBigTag?: boolean | null | undefined;
        color?:
            | {
                  custom: {
                      backgroundColor?: string | null | undefined;
                      foregroundColor?: string | null | undefined;
                  };
              }
            | {
                  variant: ViraColorVariant;
              }
            | null
            | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderTag}.
 *
 * @category Internal
 */
export const structuredRenderTagShape = createStructuredRenderSection('tag')<StructuredRenderTag>({
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
