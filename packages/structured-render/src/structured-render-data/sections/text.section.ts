import {enumShape, nullableShape, primitiveShape} from 'object-shape-tester';
import {createStructuredRenderSection} from '../create-section.js';
import {structuredRenderIconShape} from './icon.section.js';

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
 * Shape definition for {@link StructuredRenderText}.
 *
 * @category Internal
 */
export const structuredRenderTextShape = createStructuredRenderSection('text', {
    text: primitiveShape(''),
    style: nullableShape(enumShape(StructuredRenderTextStyle)),
    /** Rendered before the text. */
    icon: nullableShape(structuredRenderIconShape),
});

/**
 * A section that renders text.
 *
 * @category Section
 */
export type StructuredRenderText = typeof structuredRenderTextShape.runtimeType;
