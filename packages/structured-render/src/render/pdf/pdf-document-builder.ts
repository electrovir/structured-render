import {check} from '@augment-vir/assert';
import {type Color, type PDFDocument, type PDFFont, type PDFPage} from '@cantoo/pdf-lib';
import {
    type PdfPageHeader,
    type PdfPageHeaderCallback,
    type PdfPageHeaderFonts,
} from '../pdf-page-header.js';

/** Millimeters to PDF points conversion factor. */
const mmToPoints = 2.835;

/** A4 page dimensions in points. */
const a4 = {
    width: 210 * mmToPoints,
    height: 297 * mmToPoints,
} as const;

/** Default page margins in points. */
const defaultMargins = {
    top: 10 * mmToPoints,
    bottom: 10 * mmToPoints,
    left: 12 * mmToPoints,
    right: 12 * mmToPoints,
} as const;

/** Standard font sizes in points. */
export const pdfFontSizes = {
    body: 8,
    h1: 15,
    h2: 12,
    h3: 10,
    small: 6,
    code: 7,
    source: 6,
} as const;

type PdfColors = {
    black: Color;
    gray: Color;
    lightGray: Color;
    faintGray: Color;
    codeBackground: Color;
    blue: Color;
    white: Color;
    headerBackground: Color;
    tableBorder: Color;
};

let cachedPdfColors: PdfColors | undefined;

/** Standard colors used in PDF rendering. Lazily initialized via dynamic import. */
export async function getPdfColors(): Promise<PdfColors> {
    if (!cachedPdfColors) {
        const {rgb} = await import('@cantoo/pdf-lib');
        cachedPdfColors = {
            black: rgb(0, 0, 0),
            gray: rgb(0.4, 0.4, 0.4),
            lightGray: rgb(0.85, 0.85, 0.85),
            faintGray: rgb(0.5, 0.5, 0.5),
            codeBackground: rgb(0.95, 0.95, 0.95),
            blue: rgb(0, 0, 0.8),
            white: rgb(1, 1, 1),
            headerBackground: rgb(0.97, 0.97, 0.98),
            tableBorder: rgb(0.8, 0.8, 0.8),
        };
    }
    return cachedPdfColors;
}

/** Line height multiplier applied to font size. */
const lineHeightMultiplier = 1.3;

/** Gap between sections in points. */
export const sectionGap = 6;

/** Gap between cards in points. */
export const cardGap = 10;

/** All embedded fonts available for PDF rendering. */
export type PdfFonts = PdfPageHeaderFonts;

/**
 * Core layout engine for building PDF documents. Manages cursor position, page creation, font
 * embedding, text measurement and wrapping, and basic drawing primitives.
 */
export class PdfDocumentBuilder {
    public readonly pdfDoc: PDFDocument;
    public readonly fonts: PdfFonts;
    public readonly contentWidth: number;
    public readonly contentX: number;

    protected readonly pageHeaderHeight: number;
    protected readonly getPageHeaderRenderer: PdfPageHeaderCallback | undefined;

    protected currentPage: PDFPage;
    protected currentPageHeaderHeight: number;
    protected cursorY: number;

    protected constructor(
        pdfDoc: PDFDocument,
        fonts: PdfFonts,
        {
            pageHeaderHeight,
            getPageHeaderRenderer,
        }: Readonly<{
            pageHeaderHeight: number;
            getPageHeaderRenderer?: PdfPageHeaderCallback | undefined;
        }>,
    ) {
        this.pdfDoc = pdfDoc;
        this.fonts = fonts;
        this.contentWidth = a4.width - defaultMargins.left - defaultMargins.right;
        this.contentX = defaultMargins.left;
        this.pageHeaderHeight = pageHeaderHeight;
        this.getPageHeaderRenderer = getPageHeaderRenderer;
        this.currentPageHeaderHeight = 0;
        this.currentPage = this.createNewPage();
        this.cursorY = this.getContentStartY();
    }

    public static async create({
        pageHeader,
    }: Readonly<{
        pageHeader?: PdfPageHeader | undefined;
    }> = {}): Promise<PdfDocumentBuilder> {
        const {PDFDocument, StandardFonts} = await import('@cantoo/pdf-lib');

        const pdfDoc = await PDFDocument.create();

        const [
            regular,
            bold,
            italic,
            boldItalic,
            mono,
            monoBold,
        ] = await Promise.all([
            pdfDoc.embedFont(StandardFonts.Helvetica),
            pdfDoc.embedFont(StandardFonts.HelveticaBold),
            pdfDoc.embedFont(StandardFonts.HelveticaOblique),
            pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique),
            pdfDoc.embedFont(StandardFonts.Courier),
            pdfDoc.embedFont(StandardFonts.CourierBold),
        ]);

        const fonts = {
            regular,
            bold,
            italic,
            boldItalic,
            mono,
            monoBold,
        };

        return new PdfDocumentBuilder(pdfDoc, fonts, {
            pageHeaderHeight: pageHeader?.height ?? 0,
            getPageHeaderRenderer: pageHeader
                ? await pageHeader.create({
                      pdfDocument: pdfDoc,
                      fonts,
                  })
                : undefined,
        });
    }

    public getCursorY(): number {
        return this.cursorY;
    }

    public getPage(): PDFPage {
        return this.currentPage;
    }

    /** Calculate the line height for a given font size. */
    public lineHeight(fontSize: number): number {
        return fontSize * lineHeightMultiplier;
    }

    /** Ensure there is enough vertical space on the current page. Creates a new page if not. */
    public ensureSpace(neededHeight: number): void {
        if (this.cursorY - neededHeight < defaultMargins.bottom) {
            this.newPage();
        }
    }

    /** Create a new page and reset the cursor. */
    public newPage(): void {
        this.currentPage = this.createNewPage();
        this.cursorY = this.getContentStartY();
    }

    /** Move the cursor down by the given amount. */
    public advanceCursor(amount: number): void {
        this.cursorY -= amount;
    }

    /**
     * Draw a single line of text at the current cursor position. Does not wrap or advance the
     * cursor.
     */
    public async drawTextLine(
        text: string,
        {
            font,
            size,
            color,
            x,
            y,
        }: Readonly<{
            font: PDFFont;
            size: number;
            color?: Color | undefined;
            x?: number | undefined;
            y?: number | undefined;
        }>,
    ): Promise<void> {
        const colors = await getPdfColors();
        this.currentPage.drawText(sanitizeText(text, font), {
            x: x ?? this.contentX,
            y: y ?? this.cursorY - size,
            size,
            font,
            color: color ?? colors.black,
        });
    }

    /**
     * Draw wrapped text at the current cursor position and advance the cursor. Returns the total
     * height consumed.
     */
    public async drawWrappedText(
        text: string,
        {
            font,
            size,
            color,
            x,
            maxWidth,
        }: Readonly<{
            font: PDFFont;
            size: number;
            color?: Color | undefined;
            x?: number | undefined;
            maxWidth?: number | undefined;
        }>,
    ): Promise<number> {
        const effectiveMaxWidth = maxWidth ?? this.contentWidth;
        const effectiveX = x ?? this.contentX;
        const lines = wrapText({
            text,
            font,
            fontSize: size,
            maxWidth: effectiveMaxWidth,
        });
        const lineH = this.lineHeight(size);
        const fullHeight = lines.length * lineH;
        const maxContentHeight = this.getContentStartY() - defaultMargins.bottom;

        /**
         * If the full text block fits on a single page but not the remaining space on the current
         * page, start a new page to avoid splitting it across the page break.
         */
        if (fullHeight <= maxContentHeight) {
            this.ensureSpace(fullHeight);
        }

        let totalHeight = 0;

        for (const line of lines) {
            this.ensureSpace(lineH);
            await this.drawTextLine(line, {
                font,
                size,
                color,
                x: effectiveX,
            });
            this.advanceCursor(lineH);
            totalHeight += lineH;
        }

        return totalHeight;
    }

    /** Measure the height that wrapped text would consume without drawing it. */
    public measureWrappedTextHeight(
        text: string,
        {
            font,
            size,
            maxWidth,
        }: Readonly<{
            font: PDFFont;
            size: number;
            maxWidth?: number | undefined;
        }>,
    ): number {
        const lines = wrapText({
            text,
            font,
            fontSize: size,
            maxWidth: maxWidth ?? this.contentWidth,
        });
        return lines.length * this.lineHeight(size);
    }

    /** Draw a horizontal line. */
    public async drawLine({
        x1,
        y1,
        x2,
        y2,
        thickness,
        color,
    }: Readonly<{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        thickness?: number | undefined;
        color?: Color | undefined;
    }>): Promise<void> {
        const colors = await getPdfColors();
        this.currentPage.drawLine({
            start: {
                x: x1,
                y: y1,
            },
            end: {
                x: x2,
                y: y2,
            },
            thickness: thickness ?? 0.5,
            color: color ?? colors.tableBorder,
        });
    }

    /** Draw a filled and/or bordered rectangle. */
    public drawRect({
        x,
        y,
        width,
        height,
        fillColor,
        borderColor,
        borderWidth,
    }: Readonly<{
        x: number;
        y: number;
        width: number;
        height: number;
        fillColor?: Color | undefined;
        borderColor?: Color | undefined;
        borderWidth?: number | undefined;
    }>): void {
        this.currentPage.drawRectangle({
            x,
            y,
            width,
            height,
            ...(fillColor
                ? {
                      color: fillColor,
                  }
                : {}),
            ...(borderColor
                ? {
                      borderColor,
                      borderWidth: borderWidth ?? 0.5,
                  }
                : {}),
        });
    }

    public async save(): Promise<Uint8Array> {
        return await this.pdfDoc.save();
    }

    protected createNewPage(): PDFPage {
        const page = this.pdfDoc.addPage([
            a4.width,
            a4.height,
        ]);
        const pageNumber = this.pdfDoc.getPageCount();
        const renderPageHeader = this.getPageHeaderRenderer?.({
            pageNumber,
        });

        this.currentPageHeaderHeight = renderPageHeader ? this.pageHeaderHeight : 0;

        renderPageHeader?.({
            page,
            pageNumber,
            headerBounds: {
                x: this.contentX,
                y: this.getContentStartY(),
                width: this.contentWidth,
                height: this.currentPageHeaderHeight,
            },
        });

        return page;
    }

    protected getContentStartY(): number {
        return a4.height - defaultMargins.top - this.currentPageHeaderHeight;
    }
}

/** Wrap text into lines that fit within maxWidth. */
export function wrapText({
    text,
    font,
    fontSize,
    maxWidth,
}: Readonly<{text: string; font: PDFFont; fontSize: number; maxWidth: number}>): string[] {
    if (!text) {
        return [''];
    }

    const paragraphs = text.split('\n');
    const allLines: string[] = [];

    paragraphs.forEach((paragraph) => {
        if (!paragraph.trim()) {
            allLines.push('');
            return;
        }

        const words = paragraph.split(/\s+/).filter(check.isTruthy);
        let currentLine = '';

        words.forEach((word) => {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const testWidth = measureTextWidth(testLine, font, fontSize);

            if (testWidth > maxWidth && currentLine) {
                allLines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });

        if (currentLine) {
            allLines.push(currentLine);
        }
    });

    return allLines.length ? allLines : [''];
}

/** Measure the width of text with a given font and size. */
export function measureTextWidth(text: string, font: PDFFont, fontSize: number): number {
    return font.widthOfTextAtSize(sanitizeText(text, font), fontSize);
}

/**
 * Replace characters that the font cannot encode with a fallback. pdf-lib standard fonts only
 * support WinAnsi (Latin-1) characters.
 */
function sanitizeText(text: string, font: PDFFont): string {
    const result: string[] = [];

    for (const char of text) {
        try {
            font.encodeText(char);
            result.push(char);
        } catch {
            result.push('?');
        }
    }

    return result.join('');
}
