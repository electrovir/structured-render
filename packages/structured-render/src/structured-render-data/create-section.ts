import {type AnyObject} from '@augment-vir/common';
import {exactShape, nullableShape, unsafeShape, type UnsafeShape} from 'object-shape-tester';
import {
    structuredRenderSourceShape,
    type StructuredRenderSource,
} from './sections/source.section.js';

/**
 * Used to create a new structured render section with common properties. Not _all_ sections use
 * this, but most do.
 *
 * @category Internal
 */
export function createStructuredRenderSection<const SectionTypeName extends string>(
    sectionTypeName: SectionTypeName,
) {
    return <ExtraProperties extends AnyObject = never>(
        extraProperties: Record<
            Exclude<keyof NoInfer<ExtraProperties>, keyof SharedSectionTypes<any>>,
            any
        >,
    ): UnsafeShape<SharedSectionTypes<SectionTypeName> & ExtraProperties> => {
        return unsafeShape({
            type: exactShape(sectionTypeName),
            sectionTitle: nullableShape(''),
            sources: nullableShape([nullableShape(structuredRenderSourceShape)]),
            ...extraProperties,
        });
    };
}

/**
 * Used to create section types.
 *
 * @category Internal
 */
export type SharedSectionTypes<SectionTypeName extends string> = {
    sectionTitle?: string | undefined | null;
    type: SectionTypeName;
    sources?: (StructuredRenderSource | null | undefined)[] | null | undefined;
};

/**
 * Used to create section types.
 *
 * @category Internal
 */
export type SectionType<
    SectionTypeName extends string,
    ExtraProperties extends AnyObject,
> = SharedSectionTypes<SectionTypeName> & ExtraProperties;
