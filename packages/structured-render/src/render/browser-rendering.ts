import {assert, assertWrap} from '@augment-vir/assert';
import {
    isRuntimeEnv,
    mergeDefinedProperties,
    RuntimeEnv,
    stringify,
    type PartialWithUndefined,
} from '@augment-vir/common';
import DOMPurify from 'dompurify';
import {convertTemplateToString, html} from 'element-vir';
import {marked} from 'marked';
import {type RequireExactlyOne} from 'type-fest';
import {importHtml2Pdf, type Html2Pdf, type Html2PdfOptions} from './html-to-pdf.js';
import {baseContentResetStyles, contentDivClass} from './render-markdown-styles.js';
import {renderStructuredMarkdown} from './render-markdown.js';
import {
    defaultRenderMarkdownOptions,
    type RenderInput,
    type RenderMarkdownOptions,
} from './render-types.js';

/**
 * @deprecated This should only be used in the function passed to Playwright. It is declared here
 *   for type safety purposes.
 */
declare const html2pdf: Html2Pdf;

// cspell:disable
/**
 * Output method types for jsPDF. Extracted from:
 * https://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#output
 *
 * @category Internal
 */
export enum OutputPdfType {
    /** Returns the PDF as an `ArrayBuffer`. */
    ArrayBuffer = 'arraybuffer',
    /** Returns the PDF as a `Blob`. */
    Blob = 'blob',
    /** Returns a blob URI string pointing to the generated PDF. */
    BlobUri = 'bloburi',
    /** Alias for `BlobUri`. Returns a blob URL string pointing to the generated PDF. */
    BlobUrl = 'bloburl',
    /** Returns the PDF as a base-64 data URI string. */
    DataUriString = 'datauristring',
    /** Alias for `DataUriString`. Returns the PDF as a base-64 data URL string. */
    DataUrlString = 'dataurlstring',
    /** Navigates the current page location to the generated data URI. Returns `undefined`. */
    DataUri = 'datauri',
    /**
     * Alias for `DataUri`. Navigates the current page location to the generated data URL. Returns
     * `undefined`.
     */
    DataUrl = 'dataurl',
    /**
     * Opens the generated PDF data URL in a new window. Returns the `Window` or `null`. Throws if
     * the global is not a window object (e.g. Node).
     */
    DataUrlNewWindow = 'dataurlnewwindow',
    /**
     * Opens a PDF object in a new window. Returns the `Window` or `null`. Throws if the global is
     * not a window object (e.g. Node).
     */
    PdfObjectNewWindow = 'pdfobjectnewwindow',
    /** Opens the PDF via pdf.js in a new window. Returns the `Window` or `null`. */
    PdfJsNewWindow = 'pdfjsnewwindow',
    /** Simply download the file. */
    Download = 'download',
}
// cspell:enable

// cspell:disable
/**
 * Html2Pdf.js image output output types.
 *
 * @category Internal
 */
export enum OutputImageType {
    /** Returns an img element as a string. */
    Img = 'img',
    /** Returns a data URI string. */
    DataUriString = 'datauristring',
    /** Returns a data URI string. Alias for `DataUriString`. */
    DataUrlString = 'dataurlstring',
    /** Returns a data URI. */
    DataUri = 'datauri',
    /** Returns a data URI. Alias for `DataUri`. */
    DataUrl = 'dataurl',
    /** Simply download the file. */
    Download = 'download',
}
// cspell:enable

function createHtml2PdfOptions(fileName: string): Html2PdfOptions {
    return {
        margin: [
            25,
            15,
        ],
        filename: fileName,
        image: {
            type: 'jpeg',
            quality: 0.98,
        },
        html2canvas: {
            scale: 2,
            logging: false,
            scrollX: 0,
            scrollY: 0,
            useCORS: true,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
        },
        // cspell:word pagebreak
        pagebreak: {
            mode: [
                'css',
                'legacy',
            ],
        },
    };
}

/**
 * Internal common in-browser structure render renderer.
 *
 * @category Internal
 */
export async function renderInBrowser(
    structuredRenderData: Readonly<RenderInput>,
    {
        fileName,
        outputType,
        options: userOptions,
    }: Readonly<{
        fileName: string;
        outputType: RequireExactlyOne<{
            image: OutputImageType;
            pdf: OutputPdfType;
        }>;
        options?: Readonly<PartialWithUndefined<RenderMarkdownOptions>> | undefined;
    }>,
) {
    if (!isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderInNode.name} cannot run outside of a browser.`);
    }
    const options = mergeDefinedProperties(defaultRenderMarkdownOptions, userOptions);

    const [htmlToPdf] = await Promise.all([
        importHtml2Pdf(),
        preloadHtml2Canvas(),
    ]);

    const dirtyHtml = await marked.parse(renderStructuredMarkdown(structuredRenderData, options));

    const htmlString = convertTemplateToString(html`
        <div class=${contentDivClass}>${DOMPurify.sanitize(dirtyHtml)}</div>
    `);

    /**
     * Render in a clean iframe context so html2canvas only clones the minimal iframe document
     * instead of the entire host page DOM (which is extremely slow on complex pages).
     */
    const html2PdfOptions = createHtml2PdfOptions(fileName);
    const canvas = await renderHtmlToCanvas(htmlString, String(options.styles), html2PdfOptions);
    const instance = htmlToPdf().set(html2PdfOptions).from(canvas);

    if (outputType.pdf) {
        if (outputType.pdf === OutputPdfType.Download) {
            return await instance.save(fileName);
        } else {
            return await instance.outputPdf(outputType.pdf, {
                filename: fileName,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (outputType.image) {
        if (outputType.image === OutputImageType.Download) {
            return await instance.toImg().save(fileName);
        } else {
            return await instance.outputImg(outputType.image);
        }
    } else {
        assert.tsType(outputType).equals<never>();
        throw new Error(`Invalid output type: ${stringify(outputType)}`);
    }
}

/**
 * Render HTML content to a canvas using a clean, minimal iframe. This avoids the massive
 * performance penalty from html2canvas cloning the entire host page document (including all custom
 * elements, shadow DOM, and styles) just to render a small content div.
 */
async function renderHtmlToCanvas(
    htmlString: string,
    stylesString: string,
    html2PdfOptions: Html2PdfOptions,
): Promise<HTMLCanvasElement> {
    const marginArray = normalizeMargin(html2PdfOptions.margin);
    /** A4 page width in mm. */
    const pageWidthMm = 210;
    const innerWidthMm = pageWidthMm - marginArray[1] - marginArray[3];

    const iframe = globalThis.document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = '-10000px';
    iframe.style.top = '0';
    iframe.style.width = `${innerWidthMm}mm`;
    iframe.style.height = '0';
    iframe.style.border = 'none';
    iframe.setAttribute('aria-hidden', 'true');
    iframe.srcdoc = [
        '<!DOCTYPE html><html><head><style>',
        baseContentResetStyles,
        stylesString,
        '</style></head><body style="margin:0;padding:0;">',
        htmlString,
        '</body></html>',
    ].join('');
    globalThis.document.body.append(iframe);

    try {
        await new Promise<void>((resolve) => {
            iframe.addEventListener(
                'load',
                () => {
                    resolve();
                },
                {
                    once: true,
                },
            );
        });

        const iframeDoc = assertWrap.isDefined(iframe.contentDocument);
        await iframeDoc.fonts.ready;

        /**
         * Elements from the iframe exist in a different window context, so `instanceof HTMLElement`
         * (from the parent window) fails. Use assertWrap.isDefined since we control the HTML
         * written to the iframe and know the first child is always an element.
         */
        const contentElement = assertWrap.isDefined(
            iframeDoc.body.firstElementChild,
        ) as unknown as HTMLElement;

        return await importHtml2Canvas()(contentElement, {
            ...(html2PdfOptions.html2canvas as Record<string, unknown>),
        });
    } finally {
        iframe.remove();
    }
}

let cachedHtml2Canvas:
    | ((element: HTMLElement, options?: object) => Promise<HTMLCanvasElement>)
    | undefined;

function importHtml2Canvas(): (
    element: HTMLElement,
    options?: object,
) => Promise<HTMLCanvasElement> {
    if (!cachedHtml2Canvas) {
        throw new Error('html2canvas has not been loaded yet. Call preloadHtml2Canvas() first.');
    }
    return cachedHtml2Canvas;
}

async function preloadHtml2Canvas(): Promise<void> {
    if (!cachedHtml2Canvas) {
        // @ts-expect-error: html2canvas is a CJS module that doesn't properly resolve under node16 module resolution.
        cachedHtml2Canvas = (await import('html2canvas')).default;
    }
}

function normalizeMargin(margin: Html2PdfOptions['margin']): [number, number, number, number] {
    if (margin == undefined) {
        return [
            0,
            0,
            0,
            0,
        ];
    }
    if (typeof margin === 'number') {
        return [
            margin,
            margin,
            margin,
            margin,
        ];
    }
    if (margin.length === 2) {
        return [
            margin[0],
            margin[1],
            margin[0],
            margin[1],
        ];
    }
    return [
        margin[0],
        margin[1],
        margin[2],
        margin[3],
    ];
}

/**
 * Internal common Node.js structure render renderer.
 *
 * @category Internal
 * @returns The output file path.
 */
export async function renderInNode(
    structuredRenderData: Readonly<RenderInput>,
    {
        saveLocationPath,
        outputType,
        options: userOptions,
    }: Readonly<{
        saveLocationPath: string;
        outputType: RequireExactlyOne<{
            image: true;
            pdf: true;
        }>;
        options?: Readonly<PartialWithUndefined<RenderMarkdownOptions>> | undefined;
    }>,
): Promise<string> {
    if (isRuntimeEnv(RuntimeEnv.Web)) {
        throw new Error(`${renderInNode.name} cannot run inside of a browser.`);
    }
    const options = mergeDefinedProperties(defaultRenderMarkdownOptions, userOptions);

    const {chromium} = await import('playwright');
    const {readFile, writeFile, mkdir} = await import('node:fs/promises');
    const {createRequire} = await import('node:module');
    const {basename, dirname} = await import('node:path');

    const require = createRequire(import.meta.url);
    const [
        html2pdfScript,
        domPurifyScript,
    ] = await Promise.all([
        readFile(require.resolve('html2pdf.js/dist/html2pdf.bundle.min.js'), 'utf-8'),
        readFile(require.resolve('dompurify/dist/purify.min.js'), 'utf-8'),
    ]);

    const dirtyHtml = await marked.parse(renderStructuredMarkdown(structuredRenderData, options));
    const baseHtmlString = convertTemplateToString(html`
        <style id="styles">
            ${options.styles}
        </style>
    `);

    const browser = await chromium.launch();
    try {
        const page = await browser.newPage();
        await page.setContent(baseHtmlString, {
            waitUntil: 'networkidle',
        });
        await page.addScriptTag({
            content: html2pdfScript,
        });
        await page.addScriptTag({
            content: domPurifyScript,
        });

        const html2pdfOptions = createHtml2PdfOptions(basename(saveLocationPath));
        if (outputType.image) {
            html2pdfOptions.image = {
                type: 'png',
            };
        }

        const pdfBase64 = await page.evaluate(
            async ({
                html2pdfOptions,
                outputType,
                dirtyMarkdown,
                wrapperClass,
                outputImageType,
                outputPdfType,
            }) => {
                const cleanHtml = DOMPurify.sanitize(dirtyMarkdown);

                // eslint-disable-next-line @typescript-eslint/no-deprecated
                const instance = html2pdf()
                    .set(html2pdfOptions)
                    .from(`<div class="${wrapperClass}">${cleanHtml}</div>`);

                if (outputType.image) {
                    return await instance.outputImg(outputImageType, {
                        filename: html2pdfOptions.filename,
                    });
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                } else if (outputType.pdf) {
                    return await instance.outputPdf(outputPdfType, {
                        filename: html2pdfOptions.filename,
                    });
                } else {
                    throw new Error('Invalid output type selected.');
                }
            },
            {
                html2pdfOptions,
                outputType,
                dirtyMarkdown: dirtyHtml,
                wrapperClass: contentDivClass,
                outputImageType: OutputImageType.DataUriString,
                outputPdfType: OutputPdfType.DataUriString,
            },
        );

        const base64Data = pdfBase64.split(',')[1];
        await mkdir(dirname(saveLocationPath), {
            recursive: true,
        });
        await writeFile(saveLocationPath, Buffer.from(base64Data, 'base64'));
    } finally {
        await browser.close();
    }

    return saveLocationPath;
}
