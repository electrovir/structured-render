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

    /**
     * Firefox uses PDF.js to render PDFs in iframes, which doesn't support printing via
     * `contentWindow.print()` on blob URLs. Open a new window instead so Firefox's native PDF
     * viewer handles it.
     */
    if (navigator.userAgent.toLowerCase().includes('firefox')) {
        const printWindow = globalThis.window.open(blobUrl);

        if (!printWindow) {
            URL.revokeObjectURL(blobUrl);
            throw new Error('Failed to open print window. Check your popup blocker settings.');
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
    globalThis.document.body.append(printFrame);

    return new Promise<void>((resolve) => {
        printFrame.onload = () => {
            const contentWindow = printFrame.contentWindow;

            if (!contentWindow) {
                URL.revokeObjectURL(blobUrl);
                printFrame.remove();
                resolve();
                return;
            }

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
             * window. Some browsers don't fire `afterprint` on the iframe's contentWindow when the
             * user cancels.
             */
            function focusFallback() {
                resolveOnce();
            }

            contentWindow.addEventListener(
                'afterprint',
                () => {
                    resolveOnce();
                },
                {once: true},
            );

            globalThis.window.addEventListener('focus', focusFallback, {once: true});

            contentWindow.print();
        };
    });
}
