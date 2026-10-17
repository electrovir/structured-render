import {nullableShape, unionShape, unsafeShape, type UnsafeShape} from 'object-shape-tester';
import {structuredRenderIconShape, type StructuredRenderIcon} from './sections/icon.section.js';
import {
    createAllStructuredRenderSectionShapes,
    type StructuredRenderSection,
} from './structured-render-section.js';

/**
 * A card with structured render sections.
 *
 * @category Structured Render Data
 */
export type StructuredRenderCard<IconKey extends string = string> = {
    cardTitle?: string | null | undefined;
    cardTitleIcon?: StructuredRenderIcon<IconKey> | null | undefined;
    sections: (StructuredRenderSection<IconKey> | null | undefined)[];
};

/**
 * Creates a shape for {@link StructuredRenderCard} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderCardShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return unsafeShape<StructuredRenderCard<IconKey>>({
        cardTitle: nullableShape(''),
        cardTitleIcon: nullableShape(iconShape),
        sections: [
            nullableShape(unionShape(...createAllStructuredRenderSectionShapes(iconShape))),
        ],
    });
}

/**
 * Shape definition for {@link StructuredRenderCard}.
 *
 * @category Internal
 */
export const structuredRenderCardShape = createStructuredRenderCardShape(structuredRenderIconShape);
