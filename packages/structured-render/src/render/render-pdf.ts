import {isRuntimeEnv, RuntimeEnv, type PartialWithUndefined} from '@augment-vir/common';
import {OutputPdfType, renderInBrowser, renderInNode} from './browser-rendering.js';
import {type RenderInput, type RenderOptions} from './render-types.js';

/**
 * Render to a PDF. Only works in Node.js, not a browser.
 *
 * @category Render
 * @returns The output file path.
 */
export async function renderToNodePdf(
    renderInput: Readonly<RenderInput>,
    params: Readonly<{
        saveLocationPath: string;
        options?: PartialWithUndefined<RenderOptions> | undefined;
    }>,
): Promise<string> {
    if (isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderToNodePdf.name} cannot run inside of a browser.`);
    }

    return await renderInNode(renderInput, {
        outputType: {
            pdf: true,
        },
        ...params,
    });
}

/**
 * Render to a PDF. Only works in a browser, not Node.js.
 *
 * @category Render
 */
export async function renderToBrowserPdf(
    renderInput: Readonly<RenderInput>,
    {
        pdfOutputType,
        ...params
    }: Readonly<
        {
            fileName: string;
        } & PartialWithUndefined<{
            pdfOutputType: OutputPdfType;
            options: RenderOptions;
        }>
    >,
): Promise<unknown> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderToBrowserPdf.name} cannot run outside of a browser.`);
    }

    return renderInBrowser(renderInput, {
        outputType: {
            pdf: pdfOutputType || OutputPdfType.Download,
        },
        ...params,
    });
}

/**
 * Render to a PDF and trigger the browser's print feature to print that PDF. Only works in a
 * browser, not Node.js.
 *
 * @category Render
 */
export async function printPdf(
    renderInput: Readonly<RenderInput>,
    params: Readonly<
        {
            fileName: string;
        } & PartialWithUndefined<{
            options: RenderOptions;
        }>
    >,
): Promise<void> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${printPdf.name} cannot run outside of a browser.`);
    }

    const pdfBlob = (await renderInBrowser(renderInput, {
        outputType: {
            pdf: OutputPdfType.Blob,
        },
        ...params,
    })) as Blob;

    const blobUrl = URL.createObjectURL(pdfBlob);
    const printFrame = globalThis.document.createElement('iframe');
    printFrame.style.display = 'none';
    printFrame.src = blobUrl;
    globalThis.document.body.append(printFrame);

    return new Promise((resolve) => {
        printFrame.onload = () => {
            printFrame.contentWindow?.print();
            URL.revokeObjectURL(blobUrl);
            resolve();
            printFrame.remove();
        };
    });
}
