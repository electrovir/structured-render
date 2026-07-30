import {check} from '@augment-vir/assert';
import {createArray, ensureArray, type MaybePromise} from '@augment-vir/common';
import {type Color, type PDFFont} from '@cantoo/pdf-lib';
import {convertTemplateToString} from 'element-vir';
import {
    createStructuredRenderIcon,
    type StructuredRenderIcon,
} from '../../structured-render-data/sections/icon.section.js';
import {
    sourceHasContent,
    type StructuredRenderSource,
} from '../../structured-render-data/sections/source.section.js';
import {
    StructuredRenderCellDirection,
    type StructuredRenderTable,
} from '../../structured-render-data/sections/table.section.js';
import {StructuredRenderTextStyle} from '../../structured-render-data/sections/text.section.js';
import {
    StructuredRenderSectionType,
    type StructuredRenderSection,
} from '../../structured-render-data/structured-render-section.js';
import {type RenderOptions} from '../render-types.js';
import {
    getPdfColors,
    measureTextWidth,
    pdfFontSizes,
    sectionGap,
    wrapText,
    type PdfDocumentBuilder,
} from './pdf-document-builder.js';
import {renderMarkdownTokensToPdf} from './pdf-markdown-renderer.js';

type PdfSectionRenderer = (
    section: StructuredRenderSection,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
) => MaybePromise<void>;

/** Renders a single section to the PDF document. */
export async function renderSectionToPdf(
    section: Readonly<StructuredRenderSection>,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): Promise<void> {
    const renderer = pdfSectionRenderers[section.type];
    await renderer(section, builder, options);
}

/** Extract plain text from a section for measurement purposes. */
export function extractSectionText(
    section: Readonly<StructuredRenderSection> | undefined | null,
    options: Readonly<RenderOptions>,
): string {
    if (!section) {
        return '';
    } else if (section.type === StructuredRenderSectionType.text) {
        return section.text == undefined ? '' : String(section.text);
    } else if (section.type === StructuredRenderSectionType.inlineCode) {
        return section.code;
    } else if (
        section.type === StructuredRenderSectionType.tag ||
        section.type === StructuredRenderSectionType.title
    ) {
        return section.text == undefined ? '' : String(section.text);
    } else if (section.type === StructuredRenderSectionType.markdown) {
        return section.markdown;
    } else if (section.type === StructuredRenderSectionType.list) {
        return section.items
            .map((item) => {
                return ensureArray(item.content)
                    .map((content) => extractSectionText(content, options))
                    .join(' ');
            })
            .join(', ');
    } else {
        return '';
    }
}

async function renderSource(
    source: Readonly<StructuredRenderSource>,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): Promise<void> {
    if (!sourceHasContent(source)) {
        return;
    }

    const filteredPageNumbers = source.pageNumbers?.filter(check.isDefined);
    const pageNumberLine = filteredPageNumbers?.length
        ? `p. ${filteredPageNumbers.join(', ')}`
        : '';

    const pageLine = [
        source.fileName,
        pageNumberLine,
    ]
        .filter(check.isTruthy)
        .join(', ');

    if (!pageLine) {
        return;
    }

    const text = `${options.sourceString}: ${pageLine}`;
    await builder.drawWrappedText(text, {
        font: builder.fonts.regular,
        size: pdfFontSizes.source,
        color: (await getPdfColors()).gray,
    });
}

async function renderSources(
    sources: ReadonlyArray<StructuredRenderSource | undefined | null> | undefined | null,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): Promise<void> {
    if (!sources || options.hideSources) {
        return;
    }

    for (const source of sources) {
        if (source && sourceHasContent(source)) {
            await renderSource(source, builder, options);
        }
    }
}

const pdfSectionRenderers: Record<StructuredRenderSection['type'], PdfSectionRenderer> = {
    async title(rawSection, builder, options) {
        if (rawSection.text == undefined) {
            return;
        }

        const text = String(rawSection.text);

        if (!text) {
            return;
        }

        const iconWidth = drawIcon(rawSection.icon, builder, options);

        await builder.drawWrappedText(text, {
            font: builder.fonts.bold,
            size: pdfFontSizes.h1,
            x: iconWidth ? builder.contentX + iconWidth + 4 : undefined,
            maxWidth: iconWidth ? builder.contentWidth - iconWidth - 4 : undefined,
        });
    },

    async copyCard(rawSection, builder) {
        const text = rawSection.text == undefined ? '' : String(rawSection.text);
        const headerText = rawSection.header == undefined ? '' : String(rawSection.header);

        if (!text && !headerText) {
            return;
        }

        if (headerText) {
            await builder.drawWrappedText(headerText, {
                font: builder.fonts.bold,
                size: pdfFontSizes.body,
            });
            builder.advanceCursor(4);
        }

        if (text) {
            await builder.drawWrappedText(text, {
                font: builder.fonts.regular,
                size: pdfFontSizes.body,
            });
        }
    },

    async text(rawSection, builder, options) {
        if (rawSection.text == undefined) {
            return;
        }

        const text = String(rawSection.text);

        if (!text) {
            return;
        }

        const iconWidth = drawIcon(rawSection.icon, builder, options);
        const fontConfig = await getTextStyleConfig(rawSection.style, builder);

        await builder.drawWrappedText(text, {
            font: fontConfig.font,
            size: fontConfig.size,
            color: fontConfig.color,
            x: iconWidth ? builder.contentX + iconWidth + 4 : undefined,
            maxWidth: iconWidth ? builder.contentWidth - iconWidth - 4 : undefined,
        });
    },

    async tag(rawSection, builder) {
        if (rawSection.text == undefined) {
            return;
        }

        const text = String(rawSection.text);

        if (!text) {
            return;
        }

        const fontSize = rawSection.useBigTag ? pdfFontSizes.body : pdfFontSizes.small;
        const padding = 4;
        const textWidth = measureTextWidth(text, builder.fonts.regular, fontSize);
        const tagWidth = textWidth + padding * 2;
        const tagHeight = builder.lineHeight(fontSize) + padding;

        builder.ensureSpace(tagHeight);

        builder.drawRect({
            x: builder.contentX,
            y: builder.getCursorY() - tagHeight,
            width: tagWidth,
            height: tagHeight,
            fillColor: (await getPdfColors()).lightGray,
        });

        await builder.drawTextLine(text, {
            font: builder.fonts.regular,
            size: fontSize,
            x: builder.contentX + padding,
            y: builder.getCursorY() - tagHeight + padding / 2,
        });

        builder.advanceCursor(tagHeight + 2);
    },

    async codeBlock(rawSection, builder) {
        if (!rawSection.code) {
            return;
        }

        const padding = 8;
        const codeHeight = builder.measureWrappedTextHeight(rawSection.code, {
            font: builder.fonts.mono,
            size: pdfFontSizes.code,
            maxWidth: builder.contentWidth - padding * 2,
        });
        const totalHeight = codeHeight + padding * 2;

        builder.ensureSpace(Math.min(totalHeight, builder.lineHeight(pdfFontSizes.code) * 3));

        builder.drawRect({
            x: builder.contentX,
            y: builder.getCursorY() - totalHeight,
            width: builder.contentWidth,
            height: totalHeight,
            fillColor: (await getPdfColors()).codeBackground,
        });

        const savedY = builder.getCursorY();
        builder.advanceCursor(padding);

        await builder.drawWrappedText(rawSection.code, {
            font: builder.fonts.mono,
            size: pdfFontSizes.code,
            x: builder.contentX + padding,
            maxWidth: builder.contentWidth - padding * 2,
        });

        /** Ensure cursor is past the background rect. */
        const consumed = savedY - builder.getCursorY();

        if (consumed < totalHeight) {
            builder.advanceCursor(totalHeight - consumed);
        }
    },

    async inlineCode(rawSection, builder) {
        if (!rawSection.code) {
            return;
        }

        await builder.drawWrappedText(rawSection.code, {
            font: builder.fonts.mono,
            size: pdfFontSizes.code,
        });
    },

    async list(rawSection, builder, options) {
        const bulletIndent = 15;

        for (const item of rawSection.items) {
            const contentSections = ensureArray(item.content).filter(check.isTruthy);
            const text = contentSections
                .map((content) => extractSectionText(content, options))
                .filter(check.isTruthy)
                .join(' ');

            if (!text) {
                continue;
            }

            const lineH = builder.lineHeight(pdfFontSizes.body);
            builder.ensureSpace(lineH);

            const itemIconWidth = drawIcon(item.icon, builder, options);

            if (!itemIconWidth) {
                await builder.drawTextLine('\u2022', {
                    font: builder.fonts.regular,
                    size: pdfFontSizes.body,
                });
            }

            await builder.drawWrappedText(text, {
                font: builder.fonts.regular,
                size: pdfFontSizes.body,
                x: builder.contentX + bulletIndent,
                maxWidth: builder.contentWidth - bulletIndent,
            });

            await renderSources(item.sources, builder, options);
        }
    },

    async table(rawSection, builder, options) {
        const visibleHeaders = rawSection.headers.filter((header) => !header.hidden);

        if (visibleHeaders.length === 0 || rawSection.entries.length === 0) {
            return;
        }

        const styleConfig = await getTextStyleConfig(rawSection.style, builder);

        if (rawSection.direction === StructuredRenderCellDirection.Horizontal) {
            await renderHorizontalTable({
                section: rawSection,
                visibleHeaders,
                builder,
                options,
                styleConfig,
            });
        } else {
            await renderVerticalTable({
                section: rawSection,
                visibleHeaders,
                builder,
                options,
                styleConfig,
            });
        }
    },

    async markdown(rawSection, builder) {
        if (!rawSection.markdown) {
            return;
        }

        await renderMarkdownTokensToPdf(rawSection.markdown, builder);
    },

    async source(rawSection, builder, options) {
        if (options.hideSources) {
            return;
        }

        await renderSource(rawSection, builder, options);
    },

    icon(rawSection, builder, options) {
        const iconWidth = drawIcon(rawSection, builder, options);

        if (iconWidth) {
            builder.advanceCursor(builder.lineHeight(pdfFontSizes.body));
        }
    },

    async collapsible(rawSection, builder, options) {
        if (rawSection.header) {
            await builder.drawWrappedText(String(rawSection.header), {
                font: builder.fonts.bold,
                size: pdfFontSizes.body,
            });
            builder.advanceCursor(4);
        }

        const contentSections = ensureArray(rawSection.content).filter(check.isTruthy);

        for (const contentSection of contentSections) {
            await renderSectionToPdf(contentSection, builder, options);
            builder.advanceCursor(sectionGap / 2);
        }
    },

    processing() {
        /** Processing indicators are meaningless in a static PDF. */
    },

    empty() {
        /** Nothing to render. */
    },
} satisfies {
    [SectionType in StructuredRenderSection['type']]: (
        section: Extract<StructuredRenderSection, {type: SectionType}>,
        builder: PdfDocumentBuilder,
        options: Readonly<RenderOptions>,
    ) => MaybePromise<void>;
} as Record<StructuredRenderSection['type'], PdfSectionRenderer>;

async function getTextStyleConfig(
    style: StructuredRenderTextStyle | undefined | null,
    builder: PdfDocumentBuilder,
): Promise<{font: PDFFont; size: number; color: Color}> {
    if (style === StructuredRenderTextStyle.Bold) {
        return {
            font: builder.fonts.bold,
            size: pdfFontSizes.body,
            color: (await getPdfColors()).black,
        };
    } else if (style === StructuredRenderTextStyle.Faint) {
        return {
            font: builder.fonts.regular,
            size: pdfFontSizes.body,
            color: (await getPdfColors()).faintGray,
        };
    } else if (style === StructuredRenderTextStyle.Small) {
        return {
            font: builder.fonts.regular,
            size: pdfFontSizes.small,
            color: (await getPdfColors()).black,
        };
    } else {
        return {
            font: builder.fonts.regular,
            size: pdfFontSizes.body,
            color: (await getPdfColors()).black,
        };
    }
}

const iconSize = 10;

/**
 * Draw an icon SVG at the current cursor position. Returns the width consumed (0 if no icon was
 * drawn).
 */
function drawIcon(
    iconSection: Readonly<StructuredRenderIcon> | undefined | null,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): number {
    if (!iconSection || !iconSection.iconKey) {
        return 0;
    }

    const coloredIcon = createStructuredRenderIcon(iconSection, options);

    if (!coloredIcon) {
        return 0;
    }

    const rawSvg = convertTemplateToString(coloredIcon.svgTemplate);

    /**
     * Replace CSS `var()` references with actual values. `createColoredIcon` sets colors as CSS
     * custom properties on the host element, but pdf-lib needs inline values in the SVG.
     */
    const cssVarValues: Record<string, string> = {
        '--vira-icon-stroke-color': iconSection.strokeColor || 'currentColor',
        '--vira-icon-fill-color': iconSection.fillColor || 'none',
    };

    const cssVarPattern = /var\(--([^,)]+),([^)]+)\)/g;
    const svgString = rawSvg.replace(cssVarPattern, (_match, varName, fallback) => {
        return cssVarValues[`--${varName.trim()}`] || fallback.trim();
    });

    const lineH = builder.lineHeight(pdfFontSizes.body);
    builder.ensureSpace(lineH);

    try {
        /** Align icon vertically with text. */
        builder.getPage().drawSvg(svgString, {
            x: builder.contentX,
            y: builder.getCursorY(),
            width: iconSize,
            height: iconSize,
        });

        return iconSize;
    } catch {
        /** If the SVG cannot be parsed, skip the icon silently. */
        return 0;
    }
}

type TableHeader = StructuredRenderTable['headers'][number];

type TableStyleConfig = {font: PDFFont; size: number; color: Color};

async function renderHorizontalTable({
    section,
    visibleHeaders,
    builder,
    options,
    styleConfig,
}: Readonly<{
    section: Readonly<StructuredRenderTable>;
    visibleHeaders: ReadonlyArray<TableHeader>;
    builder: PdfDocumentBuilder;
    options: Readonly<RenderOptions>;
    styleConfig: Readonly<TableStyleConfig>;
}>): Promise<void> {
    const cellPadding = 3;
    const columnWidths = computeColumnWidths({
        section,
        visibleHeaders,
        builder,
        options,
        cellPadding,
        styleConfig,
    });

    /** Draw header row. */
    await drawTableRow({
        cells: visibleHeaders.map((header) => {
            return header.text ? extractSectionText(header.text, options) : header.key;
        }),
        columnWidths,
        builder,
        cellPadding,
        isHeader: true,
        styleConfig,
    });

    /** Draw data rows. */
    for (const entry of section.entries) {
        const cells = visibleHeaders.map((header) => {
            const cellData = entry.data[header.key];
            const cellSections = ensureArray(cellData).filter(check.isTruthy);
            return cellSections
                .map((cellSection) => extractSectionText(cellSection, options))
                .filter(check.isTruthy)
                .join(' ');
        });

        await drawTableRow({
            cells,
            columnWidths,
            builder,
            cellPadding,
            isHeader: false,
            styleConfig,
        });

        await renderSources(entry.sources, builder, options);
    }

    /** Draw footer rows. */
    if (section.footerRows) {
        for (const footerRow of section.footerRows) {
            const cellSections = ensureArray(footerRow.cells).filter(check.isTruthy);
            const text = cellSections
                .map((cellSection) => extractSectionText(cellSection, options))
                .filter(check.isTruthy)
                .join(' ');

            if (text) {
                const lineH = builder.lineHeight(styleConfig.size);
                builder.ensureSpace(lineH);
                await builder.drawWrappedText(text, {
                    font: builder.fonts.bold,
                    size: styleConfig.size,
                    color: styleConfig.color,
                });
            }
        }
    }
}

async function renderVerticalTable({
    section,
    visibleHeaders,
    builder,
    options,
    styleConfig,
}: Readonly<{
    section: Readonly<StructuredRenderTable>;
    visibleHeaders: ReadonlyArray<TableHeader>;
    builder: PdfDocumentBuilder;
    options: Readonly<RenderOptions>;
    styleConfig: Readonly<TableStyleConfig>;
}>): Promise<void> {
    const cellPadding = 3;

    /** For vertical tables, each header becomes a row with entry data as columns. */
    const columnWidth = builder.contentWidth / (section.entries.length + 1);
    const columnWidths = createArray(section.entries.length + 1, () => columnWidth);

    for (const header of visibleHeaders) {
        const headerText = header.text ? extractSectionText(header.text, options) : header.key;

        const cells = [
            headerText,
            ...section.entries.map((entry) => {
                const cellData = entry.data[header.key];
                const cellSections = ensureArray(cellData).filter(check.isTruthy);
                return cellSections
                    .map((cellSection) => extractSectionText(cellSection, options))
                    .filter(check.isTruthy)
                    .join(' ');
            }),
        ];

        await drawTableRow({
            cells,
            columnWidths,
            builder,
            cellPadding,
            isHeader: false,
            boldFirstCell: true,
            styleConfig,
        });
    }
}

function computeColumnWidths({
    section,
    visibleHeaders,
    builder,
    options,
    cellPadding,
    styleConfig,
}: Readonly<{
    section: Readonly<StructuredRenderTable>;
    visibleHeaders: ReadonlyArray<TableHeader>;
    builder: PdfDocumentBuilder;
    options: Readonly<RenderOptions>;
    cellPadding: number;
    styleConfig: Readonly<TableStyleConfig>;
}>): number[] {
    const minColumnWidth = 25;
    const dataFont = styleConfig.font;

    const naturalWidths = visibleHeaders.map((header) => {
        const headerText = header.text ? extractSectionText(header.text, options) : header.key;
        let maxWidth = measureTextWidth(headerText, builder.fonts.bold, styleConfig.size);

        section.entries.forEach((entry) => {
            const cellData = entry.data[header.key];
            const cellSections = ensureArray(cellData).filter(check.isTruthy);
            const cellText = cellSections
                .map((cellSection) => extractSectionText(cellSection, options))
                .filter(check.isTruthy)
                .join(' ');
            const cellWidth = measureTextWidth(cellText, dataFont, styleConfig.size);
            maxWidth = Math.max(maxWidth, cellWidth);
        });

        return maxWidth + cellPadding * 2;
    });

    const totalNatural = naturalWidths.reduce((sum, width) => sum + width, 0);
    const availableWidth = builder.contentWidth;

    if (totalNatural <= availableWidth) {
        /** Distribute extra space proportionally. */
        const scale = availableWidth / totalNatural;
        return naturalWidths.map((width) => width * scale);
    }

    /** Shrink proportionally but respect minimum width. */
    return naturalWidths.map((width) => {
        return Math.max(minColumnWidth, (width / totalNatural) * availableWidth);
    });
}

async function drawTableRow({
    cells,
    columnWidths,
    builder,
    cellPadding,
    isHeader,
    boldFirstCell,
    styleConfig,
}: Readonly<{
    cells: ReadonlyArray<string>;
    columnWidths: ReadonlyArray<number>;
    builder: PdfDocumentBuilder;
    cellPadding: number;
    isHeader: boolean;
    boldFirstCell?: boolean | undefined;
    styleConfig: Readonly<TableStyleConfig>;
}>): Promise<void> {
    const fontSize = styleConfig.size;
    const lineH = builder.lineHeight(fontSize);

    /** Wrap each cell's text and determine the row height from the tallest cell. */
    const cellWrappedLines = cells.map((cellText, cellIndex) => {
        const columnWidth = columnWidths[cellIndex] ?? 60;
        const useBold = isHeader || (boldFirstCell && cellIndex === 0);
        const font = useBold ? builder.fonts.bold : styleConfig.font;
        const maxTextWidth = columnWidth - cellPadding * 2;
        return wrapText({
            text: cellText,
            font,
            fontSize,
            maxWidth: maxTextWidth,
        });
    });

    const maxLineCount = Math.max(1, ...cellWrappedLines.map((lines) => lines.length));
    const rowHeight = maxLineCount * lineH + cellPadding * 2;

    builder.ensureSpace(rowHeight);

    const rowTop = builder.getCursorY();
    const rowBottom = rowTop - rowHeight;
    let cellX = builder.contentX;

    if (isHeader) {
        builder.drawRect({
            x: builder.contentX,
            y: rowBottom,
            width: builder.contentWidth,
            height: rowHeight,
            fillColor: (await getPdfColors()).headerBackground,
        });
    }

    for (const [
        cellIndex,
        lines,
    ] of cellWrappedLines.entries()) {
        const columnWidth = columnWidths[cellIndex] ?? 60;
        const useBold = isHeader || (boldFirstCell && cellIndex === 0);
        const font = useBold ? builder.fonts.bold : styleConfig.font;

        for (const [
            lineIndex,
            line,
        ] of lines.entries()) {
            await builder.drawTextLine(line, {
                font,
                size: fontSize,
                color: styleConfig.color,
                x: cellX + cellPadding,
                y: rowTop - cellPadding - fontSize - lineIndex * lineH,
            });
        }

        cellX += columnWidth;
    }

    /** Draw row border. */
    await builder.drawLine({
        x1: builder.contentX,
        y1: rowBottom,
        x2: builder.contentX + builder.contentWidth,
        y2: rowBottom,
        color: (await getPdfColors()).tableBorder,
    });

    builder.advanceCursor(rowHeight);
}
