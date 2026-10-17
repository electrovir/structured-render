import {type PartialWithUndefined} from '@augment-vir/common';
import {type MinimalDefinitionWithInputs} from 'element-vir';
import {unionShape} from 'object-shape-tester';
import {type ViraIconSvg} from 'vira';
import {
    VirStructuredRender,
    type VirStructuredRenderOptions,
} from './elements/vir-structured-render.element.js';
import {type RenderInput} from './render/render-types.js';
import {createCollapsibleSectionShape} from './structured-render-data/sections/collapsible.section.js';
import {createStructuredRenderIconShape} from './structured-render-data/sections/icon.section.js';
import {
    createStructuredRenderListItemShape,
    createStructuredRenderListShape,
} from './structured-render-data/sections/list.section.js';
import {createStructuredRenderTableShape} from './structured-render-data/sections/table.section.js';
import {createStructuredRenderTextShape} from './structured-render-data/sections/text.section.js';
import {createStructuredRenderTitleShape} from './structured-render-data/sections/title.section.js';
import {createStructuredRenderCardShape} from './structured-render-data/structured-render-card.js';
import {createStructuredRenderDataShape} from './structured-render-data/structured-render-data.js';
import {createAllStructuredRenderSectionShapes} from './structured-render-data/structured-render-section.js';

/**
 * Inputs for the `VirStructuredRender` returned by {@link createStructuredRender}.
 *
 * @category Internal
 */
export type BoundVirStructuredRenderInputs<IconKey extends string> = Readonly<{
    data: Readonly<RenderInput<IconKey>>;
    options?: Readonly<PartialWithUndefined<Omit<VirStructuredRenderOptions, 'icons'>>> | undefined;
}>;

/**
 * Binds Structured Render to the given icons object (the same object you would pass to the `icons`
 * render option). Returns:
 *
 * - Shapes for every data type that can contain an icon. Unlike the standalone shapes (like
 *   `structuredRenderDataShape`), these reject unknown icon keys at runtime and type `iconKey` as
 *   the icons object's keys.
 * - `VirStructuredRender`: {@link VirStructuredRender} with `icons` already set. Its `assign` omits
 *   the `icons` option and requires `data` to only use the icons object's keys. It can't be
 *   constructed with `new`.
 *
 * @category Util
 */
export function createStructuredRender<const IconKey extends string>(
    icons: Readonly<Record<IconKey, ViraIconSvg>>,
) {
    const iconShape = createStructuredRenderIconShape(icons);

    const boundVirStructuredRender: Omit<typeof VirStructuredRender, 'assign'> & {
        /** Assign inputs to the element. Icon keys in `data` must exist in the bound icons. */
        assign(
            inputs: BoundVirStructuredRenderInputs<IconKey>,
        ): MinimalDefinitionWithInputs<'vir-structured-render'>;
    } = Object.create(VirStructuredRender, {
        assign: {
            value({data, options}: BoundVirStructuredRenderInputs<IconKey>) {
                return VirStructuredRender.assign({
                    data,
                    options: {
                        ...options,
                        icons,
                    },
                });
            },
        },
    });

    return {
        data: createStructuredRenderDataShape(iconShape),
        card: createStructuredRenderCardShape(iconShape),
        section: unionShape(...createAllStructuredRenderSectionShapes(iconShape)),
        icon: iconShape,
        text: createStructuredRenderTextShape(iconShape),
        title: createStructuredRenderTitleShape(iconShape),
        list: createStructuredRenderListShape(iconShape),
        listItem: createStructuredRenderListItemShape(iconShape),
        table: createStructuredRenderTableShape(iconShape),
        collapsible: createCollapsibleSectionShape(iconShape),
        VirStructuredRender: boundVirStructuredRender,
    };
}
