import {type MaybePromise} from '@augment-vir/common';
import {type PDFDocument, type PDFFont, type PDFPage} from '@cantoo/pdf-lib';

/** The built-in PDF fonts available to a page header. */
export type PdfPageHeaderFonts = Readonly<{
    regular: PDFFont;
    bold: PDFFont;
    italic: PDFFont;
    boldItalic: PDFFont;
    mono: PDFFont;
    monoBold: PDFFont;
}>;

/** The rectangular area reserved for a page header, using PDF coordinates. */
export type PdfPageHeaderBounds = Readonly<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;

/** Values available while preparing a PDF page header once per document. */
export type PdfPageHeaderCreateContext = Readonly<{
    pdfDocument: PDFDocument;
    fonts: PdfPageHeaderFonts;
}>;

/** Values available while rendering a PDF page header for an individual page. */
export type PdfPageHeaderRenderContext = Readonly<{
    page: PDFPage;
    pageNumber: number;
    headerBounds: PdfPageHeaderBounds;
}>;

/** Draws a header selected for a single PDF page. */
export type PdfPageHeaderRenderer = (context: Readonly<PdfPageHeaderRenderContext>) => void;

/** Selects whether a page has a header and, if it does, supplies its drawer. */
export type PdfPageHeaderCallback = (
    context: Readonly<{pageNumber: number}>,
) => PdfPageHeaderRenderer | undefined;

/**
 * A consumer-defined header. Its height is reserved above report content only on pages whose
 * callback returns a drawer, which receives the raw pdf-lib page for custom drawing.
 */
export type PdfPageHeader = Readonly<{
    height: number;
    /** Prepares resources once before Structured Render creates the first PDF page. */
    create(
        this: void,
        context: Readonly<PdfPageHeaderCreateContext>,
    ): MaybePromise<PdfPageHeaderCallback>;
}>;
