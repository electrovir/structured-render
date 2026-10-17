import {check} from '@augment-vir/assert';
import {addSuffix, mapObjectValues} from '@augment-vir/common';
import {
    enumShape,
    exactShape,
    nullableShape,
    unionShape,
    unsafeShape,
    type UnsafeShape,
} from 'object-shape-tester';
import {createColoredIcon, type ViraIconSvg} from 'vira';
import {type RenderOptions} from '../../render/render-types.js';

/**
 * A section that renders an icon in HTML.
 *
 * @category Section
 */
export type StructuredRenderIcon<IconKey extends string = string> = {
    type: 'icon';
    iconKey: IconKey;
    strokeColor?: string | null | undefined;
    fillColor?: string | null | undefined;
    strokeWidth?: string | number | null | undefined;
};

/**
 * Creates a shape for {@link StructuredRenderIcon} whose `iconKey` must be a key of the given icons
 * object. If `icons` is omitted, any string is accepted.
 *
 * @category Internal
 */
export function createStructuredRenderIconShape<const IconKey extends string = string>(
    icons?: Readonly<Record<IconKey, ViraIconSvg>> | undefined,
): UnsafeShape<StructuredRenderIcon<IconKey>> {
    return unsafeShape<StructuredRenderIcon<IconKey>>({
        type: exactShape('icon'),
        iconKey: icons
            ? enumShape(
                  mapObjectValues(icons, (iconKey) => {
                      return iconKey;
                  }),
              )
            : '',
        strokeColor: nullableShape(''),
        fillColor: nullableShape(''),
        strokeWidth: nullableShape(unionShape('', -1)),
    });
}

/**
 * Shape definition for {@link StructuredRenderIcon}.
 *
 * @category Internal
 */
export const structuredRenderIconShape = createStructuredRenderIconShape();

/**
 * Create a Colored Vira icon from {@link StructuredRenderIcon}.
 *
 * @category Internal
 */
export function createStructuredRenderIcon(
    iconSection: Readonly<StructuredRenderIcon>,
    {icons}: Readonly<Pick<RenderOptions, 'icons'>>,
) {
    const icon = icons[iconSection.iconKey];
    if (!icon) {
        return undefined;
    }

    const coloredIcon = createColoredIcon(icon, {
        'vira-icon-fill-color': iconSection.fillColor || undefined,
        'vira-icon-stroke-color': iconSection.strokeColor || undefined,
        'vira-icon-stroke-width': check.isString(iconSection.strokeWidth)
            ? iconSection.strokeWidth
            : check.isNumber(iconSection.strokeWidth)
              ? addSuffix({
                    value: iconSection.strokeWidth,
                    suffix: 'px',
                })
              : undefined,
    });

    return coloredIcon;
}
