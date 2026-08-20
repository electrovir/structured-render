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

/** Draws a prepared header on a single PDF page. */
export type PdfPageHeaderRenderer = (context: Readonly<PdfPageHeaderRenderContext>) => void;

/**
 * A consumer-defined header rendered on every PDF page. Its fixed height is reserved above report
 * content, while its renderer receives the raw pdf-lib page for custom drawing.
 */
export type PdfPageHeader = Readonly<{
    height: number;
    /** Prepares resources once before Structured Render creates the first PDF page. */
    create(
        this: void,
        context: Readonly<PdfPageHeaderCreateContext>,
    ): MaybePromise<PdfPageHeaderRenderer>;
}>;
