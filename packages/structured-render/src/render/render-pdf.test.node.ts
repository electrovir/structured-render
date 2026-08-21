import {assert} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {describe, extractTestNameAsDir, it} from '@augment-vir/test';
import {ColorTypes, PDFDocument} from '@cantoo/pdf-lib';
import {compareImages} from '@virmator/test/dist/web-screenshot-plugin/compare-images.js';
import {existsSync} from 'node:fs';
import {cp, mkdir, readFile, writeFile} from 'node:fs/promises';
import {join, resolve} from 'node:path';
import {pdf} from 'pdf-to-img';
import {ViraColorVariant} from 'vira';
import {renderToPdf, StructuredRenderSectionType, type StructuredRenderData} from '../index.js';
import {exampleCard} from '../structured-render-data/structured-render-data.mock.js';
import {PdfDocumentBuilder} from './pdf/pdf-document-builder.js';
import {getPdfTagColors} from './pdf/pdf-section-renderers.js';

const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..', '..');
const notCommittedDirPath = join(monoRepoDirPath, '.not-committed');
const testOutputDirPath = join(notCommittedDirPath, 'tests');
const testComparisonDirPath = join(monoRepoDirPath, 'test-files');

async function renderPdfToFirstPagePng(pdfBytes: Uint8Array): Promise<Buffer> {
    const document = await pdf(Buffer.from(pdfBytes), {
        scale: 2,
    });

    for await (const page of document) {
        return Buffer.from(page);
    }

    throw new Error('PDF has no pages.');
}

describe(renderToPdf.name, () => {
    it('renders configured tag colors', async (testContext) => {
        const pdfBytes = await renderToPdf(
            [
                {
                    cardTitle: 'Tag colors',
                    sections: [
                        {
                            type: StructuredRenderSectionType.tag,
                            text: 'Warning tag',
                            color: {
                                variant: ViraColorVariant.Warning,
                            },
                        },
                        {
                            type: StructuredRenderSectionType.tag,
                            text: 'Custom tag',
                            color: {
                                custom: {
                                    backgroundColor: '#123456',
                                    foregroundColor: '#fedcba',
                                },
                            },
                        },
                    ],
                },
            ],
            'tag-colors.pdf',
        );
        const pdfFileName = extractTestNameAsDir(testContext) + '.pdf';
        const pngFileName = extractTestNameAsDir(testContext) + '.png';

        await mkdir(testOutputDirPath, {
            recursive: true,
        });
        await writeFile(join(testOutputDirPath, pdfFileName), pdfBytes);
        await writeFile(
            join(testOutputDirPath, pngFileName),
            await renderPdfToFirstPagePng(pdfBytes),
        );

        assert.deepEquals(
            await getPdfTagColors({
                variant: ViraColorVariant.Warning,
            }),
            {
                backgroundColor: {
                    type: ColorTypes.RGB,
                    red: 253 / 255,
                    green: 216 / 255,
                    blue: 155 / 255,
                },
                foregroundColor: {
                    type: ColorTypes.RGB,
                    red: 91 / 255,
                    green: 51 / 255,
                    blue: 1 / 255,
                },
            },
        );
        assert.deepEquals(
            await getPdfTagColors({
                custom: {
                    backgroundColor: '#123456',
                    foregroundColor: '#fedcba',
                },
            }),
            {
                backgroundColor: {
                    type: ColorTypes.RGB,
                    red: 18 / 255,
                    green: 52 / 255,
                    blue: 86 / 255,
                },
                foregroundColor: {
                    type: ColorTypes.RGB,
                    red: 254 / 255,
                    green: 220 / 255,
                    blue: 186 / 255,
                },
            },
        );
    });

    it('renders consumer-defined headers only on pages selected by the callback', async (testContext) => {
        const headerPageNumbers = new Set<number>();
        const pdfBytes = await renderToPdf(
            [
                {
                    sections: [
                        {
                            type: StructuredRenderSectionType.text,
                            text: createArray(160, () => {
                                return 'Example report detail.';
                            }).join('\n'),
                        },
                    ],
                },
            ],
            'custom-page-header.pdf',
            {
                pageHeader: {
                    height: 36,
                    create({pdfDocument, fonts}) {
                        pdfDocument.setAuthor('Test report generator');

                        return ({pageNumber}) => {
                            if (pageNumber !== 1) {
                                return undefined;
                            }

                            return ({page, headerBounds}) => {
                                headerPageNumbers.add(pageNumber);
                                page.drawText(`Example header ${pageNumber}`, {
                                    x: headerBounds.x + 6,
                                    y: headerBounds.y + headerBounds.height - 14,
                                    font: fonts.bold,
                                    size: 10,
                                });
                                page.drawLine({
                                    start: {
                                        x: headerBounds.x,
                                        y: headerBounds.y + 2,
                                    },
                                    end: {
                                        x: headerBounds.x + headerBounds.width,
                                        y: headerBounds.y + 2,
                                    },
                                    thickness: 1,
                                });
                            };
                        };
                    },
                },
            },
        );
        const pdfFileName = extractTestNameAsDir(testContext) + '.pdf';
        const pngFileName = extractTestNameAsDir(testContext) + '.png';

        await mkdir(testOutputDirPath, {
            recursive: true,
        });
        await writeFile(join(testOutputDirPath, pdfFileName), pdfBytes);
        await writeFile(
            join(testOutputDirPath, pngFileName),
            await renderPdfToFirstPagePng(pdfBytes),
        );

        const pdfDocument = await PDFDocument.load(pdfBytes);
        assert.isLengthAtLeast(pdfDocument.getPages(), 2);
        assert.strictEquals(pdfDocument.getAuthor(), 'Test report generator');
        assert.deepEquals([...headerPageNumbers], [1]);
    });

    it('does not reserve header space when the callback returns undefined', async () => {
        const builder = await PdfDocumentBuilder.create({
            pageHeader: {
                height: 36,
                create() {
                    return ({pageNumber}) => {
                        return pageNumber === 1 ? () => {} : undefined;
                    };
                },
            },
        });
        const headerPageCursorY = builder.getCursorY();

        builder.newPage();

        assert.isApproximately(builder.getCursorY() - headerPageCursorY, 36, 0.001);
    });

    /**
     * This test is used to manually verify what the generated PDF looks like. The output i saved
     * into the test-files directory.
     */
    it('renders with screenshot comparison', async (testContext) => {
        const pdfFileName = extractTestNameAsDir(testContext) + '.pdf';
        const pngFileName = extractTestNameAsDir(testContext) + '.png';
        const comparisonOutputPath = join(testComparisonDirPath, pngFileName);

        const pdfBytes = await renderToPdf(exampleCard, 'test');

        await mkdir(testOutputDirPath, {
            recursive: true,
        });
        await writeFile(join(testOutputDirPath, pdfFileName), pdfBytes);

        const pngBuffer = await renderPdfToFirstPagePng(pdfBytes);
        const testPngPath = join(testOutputDirPath, pngFileName);
        await writeFile(testPngPath, pngBuffer);

        if (!existsSync(comparisonOutputPath)) {
            await cp(testPngPath, comparisonOutputPath);
        }

        assert.isTrue(
            (
                await compareImages({
                    baseImageBuffer: await readFile(testPngPath),
                    currentImageBuffer: await readFile(comparisonOutputPath),
                })
            ).passed,
        );
    });

    it('embeds images from online sources', async (testContext) => {
        const pdfFileName = extractTestNameAsDir(testContext) + '.pdf';
        const pngFileName = extractTestNameAsDir(testContext) + '.png';
        const comparisonOutputPath = join(testComparisonDirPath, pngFileName);

        const dataWithImage: StructuredRenderData = [
            {
                cardTitle: 'Image Embedding',
                sections: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'An image should appear below.',
                    },
                    {
                        type: StructuredRenderSectionType.markdown,
                        markdown:
                            '![TypeScript logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/250px-Typescript_logo_2020.svg.png)',
                    },
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Text after the image.',
                    },
                ],
            },
        ];

        const pdfBytes = await renderToPdf(dataWithImage, 'test');

        await mkdir(testOutputDirPath, {
            recursive: true,
        });
        await writeFile(join(testOutputDirPath, pdfFileName), pdfBytes);

        const pngBuffer = await renderPdfToFirstPagePng(pdfBytes);
        const testPngPath = join(testOutputDirPath, pngFileName);
        await writeFile(testPngPath, pngBuffer);

        if (!existsSync(comparisonOutputPath)) {
            await cp(testPngPath, comparisonOutputPath);
        }

        assert.isTrue(
            (
                await compareImages({
                    baseImageBuffer: await readFile(testPngPath),
                    currentImageBuffer: await readFile(comparisonOutputPath),
                })
            ).passed,
        );
    });
});
