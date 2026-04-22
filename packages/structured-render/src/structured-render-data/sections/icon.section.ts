import {check} from '@augment-vir/assert';
import {addSuffix} from '@augment-vir/common';
import {exactShape, nullableShape, unionShape, unsafeShape} from 'object-shape-tester';
import {createColoredIcon} from 'vira';
import {type RenderOptions} from '../../render/render-types.js';

/**
 * A section that renders an icon in HTML.
 *
 * @category Section
 */
export type StructuredRenderIcon = {
    type: 'icon';
    iconKey: string;
    strokeColor?: string | null | undefined;
    fillColor?: string | null | undefined;
    strokeWidth?: string | number | null | undefined;
};

/**
 * Shape definition for {@link StructuredRenderIcon}.
 *
 * @category Internal
 */
export const structuredRenderIconShape = unsafeShape<StructuredRenderIcon>({
    type: exactShape('icon'),
    iconKey: '',
    strokeColor: nullableShape(''),
    fillColor: nullableShape(''),
    strokeWidth: nullableShape(unionShape('', -1)),
});

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
