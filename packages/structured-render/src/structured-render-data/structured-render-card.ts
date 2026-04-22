import {nullableShape, unsafeShape} from 'object-shape-tester';
import {structuredRenderIconShape, type StructuredRenderIcon} from './sections/icon.section.js';
import {
    structuredRenderSectionShape,
    type StructuredRenderSection,
} from './structured-render-section.js';

/**
 * A card with structured render sections.
 *
 * @category Structured Render Data
 */
export type StructuredRenderCard = {
    cardTitle?: string | null | undefined;
    cardTitleIcon?: StructuredRenderIcon | null | undefined;
    sections: (StructuredRenderSection | null | undefined)[];
};

/**
 * Shape definition for {@link StructuredRenderCard}.
 *
 * @category Internal
 */
export const structuredRenderCardShape = unsafeShape<StructuredRenderCard>({
    cardTitle: nullableShape(''),
    cardTitleIcon: nullableShape(structuredRenderIconShape),
    sections: [nullableShape(structuredRenderSectionShape)],
});
