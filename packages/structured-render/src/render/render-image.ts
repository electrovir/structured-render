import {isRuntimeEnv, RuntimeEnv, type PartialWithUndefined} from '@augment-vir/common';
import {OutputImageType, renderInBrowser, renderInNode} from './browser-rendering.js';
import {type RenderInput, type RenderMarkdownOptions} from './render-types.js';

/**
 * Render to an image. Only works in Node.js, not a browser.
 *
 * @category Render
 * @returns The output file path.
 */
export async function renderToNodeImage(
    structuredRenderData: Readonly<RenderInput>,
    params: Readonly<{
        saveLocationPath: string;
        options?: PartialWithUndefined<RenderMarkdownOptions> | undefined;
    }>,
): Promise<string> {
    if (isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderToNodeImage.name} cannot run inside of a browser.`);
    }

    return await renderInNode(structuredRenderData, {
        outputType: {
            image: true,
        },
        ...params,
    });
}

/**
 * Render to an image. Only works in a browser, not Node.js.
 *
 * @category Render
 */
export async function renderToBrowserImage(
    structuredRenderData: Readonly<RenderInput>,
    {
        imageOutputType,
        ...params
    }: Readonly<
        {
            fileName: string;
        } & PartialWithUndefined<{
            options: PartialWithUndefined<RenderMarkdownOptions>;
            imageOutputType: OutputImageType;
        }>
    >,
): Promise<unknown> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderToBrowserImage.name} cannot run outside of a browser.`);
    }
    return renderInBrowser(structuredRenderData, {
        outputType: {
            image: imageOutputType || OutputImageType.Download,
        },
        ...params,
    });
}
