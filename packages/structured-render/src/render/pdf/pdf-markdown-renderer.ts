import {type Color, type PDFFont} from '@cantoo/pdf-lib';
import {type Token, type Tokens, marked} from 'marked';
import {
    type PdfDocumentBuilder,
    getPdfColors,
    measureTextWidth,
    pdfFontSizes,
    sectionGap,
} from './pdf-document-builder.js';

/** Render a markdown string to PDF draw calls using marked's lexer. */
export async function renderMarkdownTokensToPdf(
    markdown: string,
    builder: PdfDocumentBuilder,
): Promise<void> {
    const tokens = marked.lexer(markdown);
    await renderBlockTokens(tokens, builder);
}

async function renderBlockTokens(
    tokens: ReadonlyArray<Token>,
    builder: PdfDocumentBuilder,
): Promise<void> {
    for (const token of tokens) {
        await renderBlockToken(token, builder);
    }
}

async function renderBlockToken(token: Token, builder: PdfDocumentBuilder): Promise<void> {
    if (token.type === 'heading') {
        const headingToken = token as Tokens.Heading;
        const fontSize = getHeadingFontSize(headingToken.depth);
        const lineH = builder.lineHeight(fontSize);

        builder.ensureSpace(lineH + sectionGap);
        builder.advanceCursor(sectionGap / 2);

        const segments = await flattenInlineTokens(headingToken.tokens, builder, {
            bold: true,
        });
        await renderTextSegments(segments, builder, fontSize, builder.contentWidth);

        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'paragraph') {
        const paragraphToken = token as Tokens.Paragraph;
        const segments = await flattenInlineTokens(paragraphToken.tokens, builder, {});

        /** Check for image-only paragraphs. */
        const imageSegments = segments.filter((segment) => segment.isImage);

        if (imageSegments.length > 0) {
            for (const segment of imageSegments) {
                if (segment.imageUrl) {
                    await renderImageFromUrl(segment.imageUrl, segment.text, builder);
                }
            }

            /** Render any remaining non-image text. */
            const textSegments = segments.filter((segment) => !segment.isImage);

            if (textSegments.length > 0) {
                await renderTextSegments(
                    textSegments,
                    builder,
                    pdfFontSizes.body,
                    builder.contentWidth,
                );
            }
        } else {
            await renderTextSegments(segments, builder, pdfFontSizes.body, builder.contentWidth);
        }

        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'code') {
        const codeToken = token as Tokens.Code;
        const padding = 8;
        const codeHeight = builder.measureWrappedTextHeight(codeToken.text, {
            font: builder.fonts.mono,
            size: pdfFontSizes.code,
            maxWidth: builder.contentWidth - padding * 2,
        });
        const totalHeight = codeHeight + padding * 2;

        builder.ensureSpace(Math.min(totalHeight, builder.lineHeight(pdfFontSizes.code) * 3));

        builder.drawRect(
            builder.contentX,
            builder.getCursorY() - totalHeight,
            builder.contentWidth,
            totalHeight,
            {
                fillColor: (await getPdfColors()).codeBackground,
            },
        );

        const savedY = builder.getCursorY();
        builder.advanceCursor(padding);

        await builder.drawWrappedText(codeToken.text, {
            font: builder.fonts.mono,
            size: pdfFontSizes.code,
            x: builder.contentX + padding,
            maxWidth: builder.contentWidth - padding * 2,
        });

        const consumed = savedY - builder.getCursorY();

        if (consumed < totalHeight) {
            builder.advanceCursor(totalHeight - consumed);
        }

        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'blockquote') {
        const blockquoteToken = token as Tokens.Blockquote;
        const indent = 20;
        const barWidth = 3;

        const savedContentX = builder.contentX;
        const savedContentWidth = builder.contentWidth;

        /** Temporarily adjust content area for indentation. */
        (builder as {contentX: number}).contentX = savedContentX + indent;
        (builder as {contentWidth: number}).contentWidth = savedContentWidth - indent;

        const startY = builder.getCursorY();

        await renderBlockTokens(blockquoteToken.tokens, builder);

        const endY = builder.getCursorY();
        const barHeight = startY - endY;

        /** Draw the left bar. */
        builder.drawRect(savedContentX + 4, endY, barWidth, barHeight, {
            fillColor: (await getPdfColors()).lightGray,
        });

        /** Restore content area. */
        (builder as {contentX: number}).contentX = savedContentX;
        (builder as {contentWidth: number}).contentWidth = savedContentWidth;

        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'list') {
        const listToken = token as Tokens.List;

        for (const [
            index,
            item,
        ] of listToken.items.entries()) {
            const bulletIndent = 15;
            const bullet = listToken.ordered ? `${(listToken.start || 1) + index}.` : '\u2022';
            const lineH = builder.lineHeight(pdfFontSizes.body);

            builder.ensureSpace(lineH);

            await builder.drawTextLine(bullet, {
                font: builder.fonts.regular,
                size: pdfFontSizes.body,
            });

            const segments = await flattenBlockToInlineSegments(item.tokens, builder);
            await renderTextSegments(
                segments,
                builder,
                pdfFontSizes.body,
                builder.contentWidth - bulletIndent,
                builder.contentX + bulletIndent,
            );
        }

        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'hr') {
        builder.ensureSpace(sectionGap);
        builder.advanceCursor(sectionGap / 2);
        await builder.drawLine(
            builder.contentX,
            builder.getCursorY(),
            builder.contentX + builder.contentWidth,
            builder.getCursorY(),
            {
                color: (await getPdfColors()).lightGray,
                thickness: 1,
            },
        );
        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'table') {
        await renderMarkdownTable(token as Tokens.Table, builder);
        builder.advanceCursor(sectionGap / 2);
    } else if (token.type === 'html') {
        /** Strip HTML tags and render as plain text. */
        // eslint-disable-next-line sonarjs/slow-regex
        const plainText = (token as Tokens.HTML).text.replace(/<[^>]*>/g, '').trim();

        if (plainText) {
            await builder.drawWrappedText(plainText, {
                font: builder.fonts.regular,
                size: pdfFontSizes.small,
                color: (await getPdfColors()).gray,
            });
        }
    } else if (token.type === 'space') {
        builder.advanceCursor(sectionGap / 3);
    } else if ('text' in token && typeof token.text === 'string' && token.text.trim()) {
        /** For unhandled token types, attempt to render raw text. */
        await builder.drawWrappedText(token.text, {
            font: builder.fonts.regular,
            size: pdfFontSizes.body,
        });
    }
}

type TextSegment = {
    text: string;
    font: PDFFont;
    color: Color;
    isImage?: boolean | undefined;
    imageUrl?: string | undefined;
};

/** Flatten inline tokens into a flat list of text segments with font/color info. */
async function flattenInlineTokens(
    tokens: ReadonlyArray<Token>,
    builder: PdfDocumentBuilder,
    context: Readonly<{
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        code?: boolean | undefined;
        color?: Color | undefined;
    }>,
): Promise<TextSegment[]> {
    const segments: TextSegment[] = [];

    const colors = await getPdfColors();

    for (const token of tokens) {
        if (token.type === 'text') {
            const textToken = token as Tokens.Text;
            segments.push({
                text: textToken.text,
                font: getInlineFont(builder, context),
                color: context.color ?? colors.black,
            });

            if (textToken.tokens) {
                segments.push(...(await flattenInlineTokens(textToken.tokens, builder, context)));
            }
        } else if (token.type === 'strong') {
            segments.push(
                ...(await flattenInlineTokens((token as Tokens.Strong).tokens, builder, {
                    ...context,
                    bold: true,
                })),
            );
        } else if (token.type === 'em') {
            segments.push(
                ...(await flattenInlineTokens((token as Tokens.Em).tokens, builder, {
                    ...context,
                    italic: true,
                })),
            );
        } else if (token.type === 'codespan') {
            segments.push({
                text: (token as Tokens.Codespan).text,
                font: builder.fonts.mono,
                color: context.color ?? colors.black,
            });
        } else if (token.type === 'link') {
            segments.push(
                ...(await flattenInlineTokens((token as Tokens.Link).tokens, builder, {
                    ...context,
                    color: colors.blue,
                })),
            );
        } else if (token.type === 'image') {
            const imageToken = token as Tokens.Image;
            segments.push({
                text: imageToken.text || imageToken.title || '[image]',
                font: builder.fonts.regular,
                color: colors.black,
                isImage: true,
                imageUrl: imageToken.href,
            });
        } else if (token.type === 'br') {
            segments.push({
                text: '\n',
                font: getInlineFont(builder, context),
                color: context.color ?? colors.black,
            });
        } else if (token.type === 'del') {
            segments.push(
                ...(await flattenInlineTokens((token as Tokens.Del).tokens, builder, {
                    ...context,
                    color: colors.gray,
                })),
            );
        } else if ('text' in token && typeof token.text === 'string') {
            segments.push({
                text: token.text,
                font: getInlineFont(builder, context),
                color: context.color ?? colors.black,
            });
        }
    }

    return segments;
}

/** Flatten block tokens (like paragraphs in a list item) into inline segments. */
async function flattenBlockToInlineSegments(
    tokens: ReadonlyArray<Token>,
    builder: PdfDocumentBuilder,
): Promise<TextSegment[]> {
    const segments: TextSegment[] = [];

    for (const token of tokens) {
        if (token.type === 'text' || token.type === 'paragraph') {
            const typedToken = token as Tokens.Text | Tokens.Paragraph;

            if (typedToken.tokens) {
                segments.push(...(await flattenInlineTokens(typedToken.tokens, builder, {})));
            } else {
                segments.push({
                    text: typedToken.text,
                    font: builder.fonts.regular,
                    color: (await getPdfColors()).black,
                });
            }
        } else if ('text' in token && typeof token.text === 'string') {
            segments.push({
                text: token.text,
                font: builder.fonts.regular,
                color: (await getPdfColors()).black,
            });
        }
    }

    return segments;
}

/** Render text segments with word wrapping, handling font/color changes across segments. */
async function renderTextSegments(
    segments: ReadonlyArray<TextSegment>,
    builder: PdfDocumentBuilder,
    fontSize: number,
    maxWidth: number,
    startX?: number,
): Promise<void> {
    const effectiveX = startX ?? builder.contentX;
    const lineH = builder.lineHeight(fontSize);
    let currentLineX = effectiveX;

    /** Combine all segments into words with their formatting. */
    type FormattedWord = {
        text: string;
        font: PDFFont;
        color: Color;
    };

    const formattedWords: FormattedWord[] = [];

    segments.forEach((segment) => {
        if (segment.isImage) {
            return;
        }

        const words = segment.text.split(/(\s+)/);

        words.forEach((word) => {
            if (word) {
                formattedWords.push({
                    text: word,
                    font: segment.font,
                    color: segment.color,
                });
            }
        });
    });

    type LineEntry = FormattedWord & {x: number};
    let currentLine: LineEntry[] = [];
    let lineWidth = 0;

    async function flushLine(): Promise<void> {
        if (currentLine.length === 0) {
            return;
        }

        builder.ensureSpace(lineH);

        for (const entry of currentLine) {
            await builder.drawTextLine(entry.text, {
                font: entry.font,
                size: fontSize,
                color: entry.color,
                x: entry.x,
            });
        }

        builder.advanceCursor(lineH);
        currentLine = [];
        lineWidth = 0;
        currentLineX = effectiveX;
    }

    for (const formattedWord of formattedWords) {
        if (formattedWord.text === '\n') {
            await flushLine();
            continue;
        }

        const wordWidth = measureTextWidth(formattedWord.text, formattedWord.font, fontSize);

        if (
            lineWidth + wordWidth > maxWidth &&
            currentLine.length > 0 &&
            formattedWord.text.trim()
        ) {
            await flushLine();
        }

        currentLine.push({
            ...formattedWord,
            x: currentLineX + lineWidth,
        });
        lineWidth += wordWidth;
    }

    await flushLine();
}

function getInlineFont(
    builder: PdfDocumentBuilder,
    context: Readonly<{
        bold?: boolean | undefined;
        italic?: boolean | undefined;
        code?: boolean | undefined;
    }>,
): PDFFont {
    if (context.code) {
        return builder.fonts.mono;
    } else if (context.bold && context.italic) {
        return builder.fonts.boldItalic;
    } else if (context.bold) {
        return builder.fonts.bold;
    } else if (context.italic) {
        return builder.fonts.italic;
    }

    return builder.fonts.regular;
}

function getHeadingFontSize(depth: number): number {
    if (depth === 1) {
        return pdfFontSizes.h1;
    } else if (depth === 2) {
        return pdfFontSizes.h2;
    } else if (depth === 3) {
        return pdfFontSizes.h3;
    }

    return pdfFontSizes.body;
}

async function renderMarkdownTable(
    tableToken: Tokens.Table,
    builder: PdfDocumentBuilder,
): Promise<void> {
    const cellPadding = 4;
    const rowHeight = builder.lineHeight(pdfFontSizes.body) + cellPadding * 2;

    /** Compute column widths from headers and cell content. */
    const naturalWidths = tableToken.header.map((headerCell, colIndex) => {
        let maxWidth = measureTextWidth(headerCell.text, builder.fonts.bold, pdfFontSizes.body);

        tableToken.rows.forEach((row) => {
            const cell = row[colIndex];

            if (cell) {
                const cellWidth = measureTextWidth(
                    cell.text,
                    builder.fonts.regular,
                    pdfFontSizes.body,
                );
                maxWidth = Math.max(maxWidth, cellWidth);
            }
        });

        return maxWidth + cellPadding * 2;
    });

    const totalNatural = naturalWidths.reduce((sum, width) => sum + width, 0);
    const columnWidths =
        totalNatural <= builder.contentWidth
            ? naturalWidths.map((width) => (width / totalNatural) * builder.contentWidth)
            : naturalWidths.map((width) => {
                  return Math.max(30, (width / totalNatural) * builder.contentWidth);
              });

    /** Draw header row. */
    builder.ensureSpace(rowHeight);
    const headerRowTop = builder.getCursorY();
    const headerRowBottom = headerRowTop - rowHeight;

    builder.drawRect(builder.contentX, headerRowBottom, builder.contentWidth, rowHeight, {
        fillColor: (await getPdfColors()).headerBackground,
    });

    let cellX = builder.contentX;

    for (const [
        colIndex,
        headerCell,
    ] of tableToken.header.entries()) {
        await builder.drawTextLine(headerCell.text, {
            font: builder.fonts.bold,
            size: pdfFontSizes.body,
            x: cellX + cellPadding,
            y: headerRowBottom + cellPadding,
        });
        cellX += columnWidths[colIndex] ?? 60;
    }

    await builder.drawLine(
        builder.contentX,
        headerRowBottom,
        builder.contentX + builder.contentWidth,
        headerRowBottom,
        {
            color: (await getPdfColors()).tableBorder,
        },
    );

    builder.advanceCursor(rowHeight);

    /** Draw data rows. */
    for (const row of tableToken.rows) {
        builder.ensureSpace(rowHeight);
        const dataRowBottom = builder.getCursorY() - rowHeight;
        let dataCellX = builder.contentX;

        for (const [
            colIndex,
            cell,
        ] of row.entries()) {
            await builder.drawTextLine(cell.text, {
                font: builder.fonts.regular,
                size: pdfFontSizes.body,
                x: dataCellX + cellPadding,
                y: dataRowBottom + cellPadding,
            });
            dataCellX += columnWidths[colIndex] ?? 60;
        }

        await builder.drawLine(
            builder.contentX,
            dataRowBottom,
            builder.contentX + builder.contentWidth,
            dataRowBottom,
            {
                color: (await getPdfColors()).tableBorder,
            },
        );

        builder.advanceCursor(rowHeight);
    }
}

async function renderImageFromUrl(
    url: string,
    altText: string,
    builder: PdfDocumentBuilder,
): Promise<void> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            await builder.drawWrappedText(`[${altText}]`, {
                font: builder.fonts.italic,
                size: pdfFontSizes.body,
                color: (await getPdfColors()).gray,
            });
            return;
        }

        const contentType = response.headers.get('content-type') || '';
        const arrayBuffer = await response.arrayBuffer();
        const imageBytes = new Uint8Array(arrayBuffer);

        let image: Awaited<ReturnType<typeof builder.pdfDoc.embedPng>>;

        if (contentType.includes('png')) {
            image = await builder.pdfDoc.embedPng(imageBytes);
        } else if (contentType.includes('jpeg') || contentType.includes('jpg')) {
            image = await builder.pdfDoc.embedJpg(imageBytes);
        } else {
            /** Try PNG first, fall back to JPEG. */
            try {
                image = await builder.pdfDoc.embedPng(imageBytes);
            } catch {
                image = await builder.pdfDoc.embedJpg(imageBytes);
            }
        }

        const maxWidth = builder.contentWidth;
        const maxHeight = 300;
        const scale = Math.min(maxWidth / image.width, maxHeight / image.height, 1);
        const drawWidth = image.width * scale;
        const drawHeight = image.height * scale;

        builder.ensureSpace(drawHeight + sectionGap);

        builder.getPage().drawImage(image, {
            x: builder.contentX,
            y: builder.getCursorY() - drawHeight,
            width: drawWidth,
            height: drawHeight,
        });

        builder.advanceCursor(drawHeight + sectionGap / 2);
    } catch {
        await builder.drawWrappedText(`[${altText}]`, {
            font: builder.fonts.italic,
            size: pdfFontSizes.body,
            color: (await getPdfColors()).gray,
        });
    }
}
