import {type Primitive} from '@augment-vir/assert';
import {enumShape, nullableShape, primitiveShape, type UnsafeShape} from 'object-shape-tester';
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
export type StructuredRenderText<IconKey extends string = string> = SectionType<
    'text',
    {
        text?: Primitive | null | undefined;
        style?: StructuredRenderTextStyle | null | undefined;
        /** Rendered before the text. */
        icon?: StructuredRenderIcon<IconKey> | null | undefined;
    }
>;

/**
 * Creates a shape for {@link StructuredRenderText} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderTextShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return createStructuredRenderSection('text')<StructuredRenderText<IconKey>>({
        text: nullableShape(primitiveShape()),
        style: nullableShape(enumShape(StructuredRenderTextStyle)),
        icon: nullableShape(iconShape),
    });
}

/**
 * Shape definition for {@link StructuredRenderText}.
 *
 * @category Internal
 */
export const structuredRenderTextShape = createStructuredRenderTextShape(structuredRenderIconShape);
