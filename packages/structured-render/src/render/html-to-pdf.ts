export async function importHtml2Pdf(): Promise<Html2Pdf> {
    // @ts-expect-error: this module is so messed up it has to be imported all funky
    const html2pdfImport = await import('html2pdf.js/src');

    const html2pdf: typeof html2pdfImport.default =
        (html2pdfImport as unknown as {default?: typeof html2pdfImport.default}).default ||
        (html2pdfImport as unknown as typeof html2pdfImport.default);

    return html2pdf as Html2Pdf;
}

/** Html2pdf.js's internal types are a complete disaster; we have to reconstruct them all like this. */

export type Html2PdfOptions = {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: {
        type?: 'jpeg' | 'png' | 'webp';
        quality?: number;
    };
    enableLinks?: boolean;
    html2canvas?: object;
    jsPDF?: {
        unit?: string;
        format?: string | [number, number];
        orientation?: 'portrait' | 'landscape';
    };
    // cspell:word pagebreak
    pagebreak?: {
        mode?: ReadonlyArray<string>;
        before?: string;
        after?: string;
        avoid?: string;
    };
};

export interface Html2PdfInstance {
    from(src: HTMLElement | string | HTMLCanvasElement | HTMLImageElement): this;
    to(target: 'container' | 'canvas' | 'img' | 'pdf'): this;
    toContainer(): this;
    toCanvas(): this;
    toImg(): this;
    toPdf(): this;
    output(type?: string, options?: any, src?: 'pdf' | 'img'): Promise<any>;
    outputPdf(type?: string, options?: any): Promise<any>;
    outputImg(type?: string, options?: any): Promise<any>;
    save(filename?: string): Promise<void>;
    set(options: Html2PdfOptions): this;
    get(key: string, cbk?: (value: any) => void): Promise<any>;
    then<T>(
        onFulfilled?: (value: any) => T | PromiseLike<T>,
        onRejected?: (reason: any) => any,
    ): Promise<T>;
    thenCore<T>(
        onFulfilled?: (value: any) => T | PromiseLike<T>,
        onRejected?: (reason: any) => any,
    ): Promise<T>;
    thenExternal<T>(
        onFulfilled?: (value: any) => T | PromiseLike<T>,
        onRejected?: (reason: any) => any,
    ): Promise<T>;
    catch<T>(onRejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;
    catchExternal<T>(onRejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;
    error(msg: string): void;
}

export interface Html2Pdf {
    (): Html2PdfInstance;
    new (): Html2PdfInstance;
    (element: HTMLElement, options?: Html2PdfOptions): Promise<void>;
    new (element: HTMLElement, options?: Html2PdfOptions): Promise<void>;
    Worker: new () => Html2PdfInstance;
}
