import {type Primitive} from '@augment-vir/assert';
import {nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';

/**
 * A section that renders a title.
 *
 * @category Section
 */
export type StructuredRenderTitle = SectionType<
    'title',
    {
        text?: Primitive | null | undefined;
        /** Rendered before the text. */
        icon?: StructuredRenderIcon | null | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderTitle}.
 *
 * @category Internal
 */
export const structuredRenderTitleShape = createStructuredRenderSection(
    'title',
)<StructuredRenderTitle>({
    text: nullableShape(primitiveShape()),
    icon: nullableShape(structuredRenderIconShape),
});
