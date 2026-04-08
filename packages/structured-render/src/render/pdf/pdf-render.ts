import {assert, check} from '@augment-vir/assert';
import {mergeDefinedProperties, stringify, type PartialWithUndefined} from '@augment-vir/common';
import {
    sourceHasContent,
    type StructuredRenderSource,
} from '../../structured-render-data/sections/source.section.js';
import {type StructuredRenderSection} from '../../structured-render-data/structured-render-section.js';
import {defaultRenderOptions, type RenderInput, type RenderOptions} from '../render-types.js';
import {
    PdfDocumentBuilder,
    cardGap,
    getPdfColors,
    pdfFontSizes,
    sectionGap,
} from './pdf-document-builder.js';
import {renderSectionToPdf} from './pdf-section-renderers.js';

/**
 * Render structured render data to PDF bytes using pdf-lib. Works in both browser and Node.js.
 * Produces a real PDF with selectable text.
 */
export async function renderToPdfBytes(
    data: Readonly<RenderInput>,
    options?: Readonly<PartialWithUndefined<RenderOptions>> | undefined,
): Promise<Uint8Array> {
    const finalOptions = mergeDefinedProperties(defaultRenderOptions, options);
    const builder = await PdfDocumentBuilder.create();

    await renderInput(data, builder, finalOptions);

    return await builder.save();
}

async function renderInput(
    data: Readonly<RenderInput>,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): Promise<void> {
    if (!data) {
        return;
    }

    if (check.isArray(data)) {
        for (const [
            index,
            entry,
        ] of data.entries()) {
            if (!entry) {
                continue;
            }

            if (index > 0) {
                builder.advanceCursor(cardGap);
            }

            await renderInput(entry, builder, options);
        }
    } else if ('type' in data) {
        await renderSection(data, builder, options, false);
    } else if ('sections' in data) {
        await renderCard(data, builder, options);
    } else {
        assert.tsType(data).equals<never>();
        throw new Error(`Unexpected structured render type: ${stringify(data)}`);
    }
}

async function renderCard(
    card: Readonly<{
        cardTitle?: string | undefined | null;
        sections: ReadonlyArray<StructuredRenderSection | undefined | null>;
    }>,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
): Promise<void> {
    if (card.cardTitle) {
        const lineH = builder.lineHeight(pdfFontSizes.h2);
        builder.ensureSpace(lineH + sectionGap);

        await builder.drawWrappedText(card.cardTitle, {
            font: builder.fonts.bold,
            size: pdfFontSizes.h2,
        });

        builder.advanceCursor(sectionGap / 2);

        /** Draw a separator line under the card title. */
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
    }

    for (const [
        index,
        section,
    ] of card.sections.entries()) {
        if (!section) {
            continue;
        }

        if (index > 0) {
            builder.advanceCursor(sectionGap);
        }

        await renderSection(section, builder, options, index === 0);
    }
}

async function renderSection(
    section: Readonly<StructuredRenderSection>,
    builder: PdfDocumentBuilder,
    options: Readonly<RenderOptions>,
    isFirstCardSection: boolean,
): Promise<void> {
    /** Render section title. */
    if ('sectionTitle' in section && section.sectionTitle && !isFirstCardSection) {
        const lineH = builder.lineHeight(pdfFontSizes.h3);
        builder.ensureSpace(lineH + sectionGap / 2);
        builder.advanceCursor(sectionGap / 2);

        await builder.drawWrappedText(section.sectionTitle, {
            font: builder.fonts.bold,
            size: pdfFontSizes.h3,
        });

        builder.advanceCursor(4);
    }

    /** Render the section content. */
    await renderSectionToPdf(section, builder, options);

    /** Render section-level sources. */
    if (!options.hideSources && 'sources' in section && section.sources) {
        const validSources = section.sources.filter((source): source is StructuredRenderSource => {
            return !!source && sourceHasContent(source);
        });

        for (const source of validSources) {
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

            if (pageLine) {
                await builder.drawWrappedText(`${options.sourceString}: ${pageLine}`, {
                    font: builder.fonts.regular,
                    size: pdfFontSizes.source,
                    color: (await getPdfColors()).gray,
                });
            }
        }
    }
}
