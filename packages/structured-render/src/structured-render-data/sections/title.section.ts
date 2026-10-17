import {type Primitive} from '@augment-vir/assert';
import {nullableShape, primitiveShape, type UnsafeShape} from 'object-shape-tester';
import {createStructuredRenderSection, type SectionType} from '../create-section.js';
import {structuredRenderIconShape, type StructuredRenderIcon} from './icon.section.js';

/**
 * A section that renders a title.
 *
 * @category Section
 */
export type StructuredRenderTitle<IconKey extends string = string> = SectionType<
    'title',
    {
        text?: Primitive | null | undefined;
        /** Rendered before the text. */
        icon?: StructuredRenderIcon<IconKey> | null | undefined;
    }
>;

/**
 * Creates a shape for {@link StructuredRenderTitle} with the given icon shape.
 *
 * @category Internal
 */
export function createStructuredRenderTitleShape<IconKey extends string>(
    iconShape: UnsafeShape<StructuredRenderIcon<IconKey>>,
) {
    return createStructuredRenderSection('title')<StructuredRenderTitle<IconKey>>({
        text: nullableShape(primitiveShape()),
        icon: nullableShape(iconShape),
    });
}

/**
 * Shape definition for {@link StructuredRenderTitle}.
 *
 * @category Internal
 */
export const structuredRenderTitleShape =
    createStructuredRenderTitleShape(structuredRenderIconShape);
