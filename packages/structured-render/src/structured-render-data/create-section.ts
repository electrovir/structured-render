import {type AnyObject} from '@augment-vir/common';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';
import {structuredRenderSourceShape} from './sections/source.section.js';

/**
 * Used to create a new structured render section with common properties. Not _all_ sections use
 * this, but most do.
 *
 * @category Internal
 */
export function createStructuredRenderSection<
    const Type extends string,
    ExtraProperties extends AnyObject,
>(structuredRenderType: Type, extraProperties: ExtraProperties) {
    return defineShape({
        type: exactShape(structuredRenderType),
        sectionTitle: nullableShape(''),
        sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
        ...extraProperties,
    });
}
