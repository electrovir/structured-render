import {type Primitive} from '@augment-vir/assert';
import {enumShape, nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';

/**
 * Style options for {@link StructuredRenderText}.
 *
 * @category Options
 */
export enum StructuredRenderTextStyle {
    Faint = 'faint',
    Small = 'small',
    Bold = 'bold',
}

/**
 * A section that renders text.
 *
 * @category Section
 */
export type StructuredRenderText = SectionType<
    'text',
    {
        text?: Primitive | null | undefined;
        style?: StructuredRenderTextStyle | null | undefined;
        /** Rendered before the text. */
        icon?: StructuredRenderIcon | null | undefined;
    }
>;

/**
 * Shape definition for {@link StructuredRenderText}.
 *
 * @category Internal
 */
export const structuredRenderTextShape = createStructuredRenderSection(
    'text',
)<StructuredRenderText>({
    text: nullableShape(primitiveShape()),
    style: nullableShape(enumShape(StructuredRenderTextStyle)),
    icon: nullableShape(structuredRenderIconShape),
});
