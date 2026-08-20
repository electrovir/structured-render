import {isRuntimeEnv, RuntimeEnv, type PartialWithUndefined} from '@augment-vir/common';
import {renderToPdfBytes} from './pdf/render-pdf-bytes.js';
import {type RenderInput, type RenderPdfOptions} from './render-types.js';

/**
 * Ensures that a given file name has a `.pdf` extension (case insensitive).
 *
 * @category Internal
 */
export function ensurePdfExtension(fileName: string): string {
    return fileName.toLowerCase().endsWith('.pdf') ? fileName : `${fileName}.pdf`;
}

/**
 * Render structured data to a PDF. Works in both browser and Node.js.
 *
 * @category Render
 */
export async function renderToPdf(
    renderInput: Readonly<RenderInput>,
    fileName: string,
    options?: Readonly<PartialWithUndefined<RenderPdfOptions>> | undefined,
): Promise<Uint8Array> {
    return await renderToPdfBytes(renderInput, fileName, options);
}

/**
 * Render structured data to a PDF and trigger a browser download. Only works in a browser, not
 * Node.js.
 *
 * Due to how badly browsers handle directly printing or opening a PDF in a new tab, use this
 * instead. The user will have to click the PDF again to print, but they should be used to that.
 *
 * @category Render
 */
export async function downloadPdf(
    renderInput: Readonly<RenderInput>,
    fileName: string,
    options: PartialWithUndefined<RenderPdfOptions> | undefined = {},
): Promise<void> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${downloadPdf.name} cannot run outside of a browser.`);
    }

    const pdfFileName = ensurePdfExtension(fileName);
    const pdfBytes = await renderToPdfBytes(renderInput, fileName, options);
    const blob = new Blob([new Uint8Array(pdfBytes)], {
        type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blob);
    const anchor = globalThis.document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = pdfFileName;
    anchor.style.display = 'none';
    globalThis.document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(blobUrl);
}
