import {arrayToObject, getObjectTypedValues} from '@augment-vir/common';
import {type ViraIconSvg} from 'vira';
import {type RenderOptions} from './render-types.js';

/**
 * Creates an icons object for the `icons` option of {@link RenderOptions}, keyed by each icon's
 * `name` rather than by the input object's keys. Reference an icon's key with
 * `iconMap.<IconName>.name`.
 *
 * @category Util
 * @example
 *
 * ```ts
 * import {LucideCircleAlertIcon, LucideStarIcon} from 'vira';
 *
 * const icons = mapIconsByName({LucideCircleAlertIcon, LucideStarIcon});
 * // {CircleAlert: LucideCircleAlertIcon, Star: LucideStarIcon}
 * ```
 */
export function mapIconsByName<const Icons extends Readonly<Record<string, ViraIconSvg>>>(
    icons: Icons,
) {
    return arrayToObject(
        getObjectTypedValues<Readonly<Record<string, ViraIconSvg>>>(icons),
        (icon) => {
            return {
                key: icon.name,
                value: icon,
            };
        },
        {
            useRequired: true,
        },
    ) satisfies Record<string, ViraIconSvg> as {
        [Icon in Icons[keyof Icons] as Icon['name']]: Icon;
    };
}
