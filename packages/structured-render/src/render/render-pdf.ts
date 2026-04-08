import {isRuntimeEnv, RuntimeEnv, wait, type PartialWithUndefined} from '@augment-vir/common';
import {waitForAnimationFrame} from '@augment-vir/web';
import {renderToPdfBytes} from './pdf/pdf-render.js';
import {type RenderInput, type RenderOptions} from './render-types.js';

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
    options?: Readonly<PartialWithUndefined<RenderOptions>> | undefined,
): Promise<Uint8Array> {
    return await renderToPdfBytes(renderInput, options);
}

/**
 * Render structured data to a PDF and trigger a browser download. Only works in a browser, not
 * Node.js.
 *
 * @category Render
 */
export async function downloadPdf(
    renderInput: Readonly<RenderInput>,
    fileName: string,
    options: PartialWithUndefined<RenderOptions> | undefined = {},
): Promise<void> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${downloadPdf.name} cannot run outside of a browser.`);
    }

    const pdfBytes = await renderToPdfBytes(renderInput, options);
    const blob = new Blob([new Uint8Array(pdfBytes)], {
        type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blob);
    const anchor = globalThis.document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = ensurePdfExtension(fileName);
    anchor.style.display = 'none';
    globalThis.document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(blobUrl);
}

/**
 * Render structured data to a PDF and open it in a new browser tab. Only works in a browser, not
 * Node.js.
 *
 * @category Render
 */
export async function openPdf(
    renderInput: Readonly<RenderInput>,
    fileName: string,
    options: PartialWithUndefined<RenderOptions> | undefined = {},
): Promise<void> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${openPdf.name} cannot run outside of a browser.`);
    }

    const pdfBytes = await renderToPdfBytes(renderInput, options);
    const blob = new Blob([new Uint8Array(pdfBytes)], {
        type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blob);
    const pdfWindow = globalThis.window.open(blobUrl);

    if (!pdfWindow) {
        URL.revokeObjectURL(blobUrl);
        throw new Error('Failed to open PDF tab. Check your popup blocker settings.');
    }

    pdfWindow.document.title = ensurePdfExtension(fileName);
}

/**
 * Render to a PDF and trigger the browser's print feature to print that PDF. Only works in a
 * browser, not Node.js.
 *
 * @category Render
 */
export async function printPdf(
    renderInput: Readonly<RenderInput>,
    fileName: string,
    options: PartialWithUndefined<RenderOptions> | undefined = {},
): Promise<void> {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${printPdf.name} cannot run outside of a browser.`);
    }

    const pdfBytes = await renderToPdfBytes(renderInput, options);
    const blob = new Blob([new Uint8Array(pdfBytes)], {
        type: 'application/pdf',
    });
    const blobUrl = URL.createObjectURL(blob);

    const userAgent = navigator.userAgent.toLowerCase();

    /**
     * Firefox uses PDF.js to render PDFs in iframes, which doesn't support printing via
     * `contentWindow.print()` on blob URLs.
     *
     * IOS Safari renders PDFs in iframes constrained to the iframe's viewport, so a hidden 1x1
     * iframe only prints the first page. iPadOS Safari reports as "Macintosh" in its user agent, so
     * we also check `maxTouchPoints` to detect it.
     *
     * In both cases, open a new window so the platform's native PDF viewer handles all pages.
     */
    const isFirefox = userAgent.includes('firefox');
    const isIos =
        /iphone|ipad|ipod/.test(userAgent) ||
        (userAgent.includes('macintosh') && navigator.maxTouchPoints > 1);

    if (isFirefox || isIos) {
        const printWindow = globalThis.window.open(blobUrl);

        if (!printWindow) {
            URL.revokeObjectURL(blobUrl);
            throw new Error('Failed to open print window. Check your popup blocker settings.');
        }

        if (fileName) {
            printWindow.document.title = ensurePdfExtension(fileName);
        }

        return;
    }

    const printFrame = globalThis.document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.left = '-10000px';
    printFrame.style.top = '0';
    printFrame.style.width = '1px';
    printFrame.style.height = '1px';
    printFrame.style.border = 'none';
    printFrame.style.opacity = '0';
    printFrame.src = blobUrl;

    if (fileName) {
        printFrame.title = ensurePdfExtension(fileName);
    }

    globalThis.document.body.append(printFrame);

    await new Promise<void>((resolve) => {
        printFrame.addEventListener(
            'load',
            () => {
                resolve();
            },
            {
                once: true,
            },
        );
    });

    const contentWindow = printFrame.contentWindow;

    if (!contentWindow) {
        URL.revokeObjectURL(blobUrl);
        printFrame.remove();
        return;
    }

    if (fileName) {
        contentWindow.document.title = ensurePdfExtension(fileName);
    }

    /**
     * The iframe's `load` event fires when the blob data is fetched, but the browser's built-in PDF
     * viewer still needs time to parse and paint the PDF. Without this wait, `print()` can capture
     * a blank/grey frame roughly 50% of the time. Animation frames alone are insufficient because
     * the PDF viewer renders asynchronously outside the normal DOM paint cycle, so an additional
     * delay is needed to let it finish.
     */
    await waitForAnimationFrame(3);
    await wait({
        milliseconds: 250,
    });
    await waitForAnimationFrame(3);

    return new Promise<void>((resolve) => {
        function cleanup() {
            URL.revokeObjectURL(blobUrl);
            printFrame.remove();
            resolve();
        }

        let resolved = false;

        function resolveOnce() {
            if (resolved) {
                return;
            }
            resolved = true;
            globalThis.window.removeEventListener('focus', focusFallback);
            cleanup();
        }

        /**
         * Fallback: when the print dialog closes (print or cancel), focus returns to the main
         * window. Some browsers don't fire `afterprint` on the iframe's contentWindow when the user
         * cancels.
         */
        function focusFallback() {
            resolveOnce();
        }

        contentWindow.addEventListener(
            'afterprint',
            () => {
                resolveOnce();
            },
            {
                once: true,
            },
        );

        globalThis.window.addEventListener('focus', focusFallback, {
            once: true,
        });

        contentWindow.print();
    });
}
