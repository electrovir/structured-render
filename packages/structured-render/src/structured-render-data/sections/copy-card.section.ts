import {type Primitive} from '@augment-vir/assert';
import {nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';

/**
 * A section that renders text inside a bordered card with a button for copying that text to the
 * clipboard.
 *
 * @category Section
 */
export type StructuredRenderCopyCard = SectionType<
    'copyCard',
    {
        text: Primitive;
        /** Rendered as a bold heading at the top of the card. */
        header?: Primitive | null | undefined;
        /** If `true`, the copy button is not rendered. */
        disableCopy?: boolean | null | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderCopyCard}.
 *
 * @category Internal
 */
export const structuredRenderCopyCardShape = createStructuredRenderSection(
    'copyCard',
)<StructuredRenderCopyCard>({
    text: '',
    header: nullableShape(primitiveShape()),
    disableCopy: nullableShape(false),
});
