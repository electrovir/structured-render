import {assert} from '@augment-vir/assert';
import {describe, extractTestNameAsDir, it} from '@augment-vir/test';
import {compareImages} from '@virmator/test/dist/web-screenshot-plugin/compare-images.js';
import {existsSync} from 'node:fs';
import {cp, mkdir, readFile, writeFile} from 'node:fs/promises';
import {join, resolve} from 'node:path';
import {pdf} from 'pdf-to-img';
import {renderToPdf, StructuredRenderSectionType, type StructuredRenderData} from '../index.js';
import {exampleCard} from '../structured-render-data/structured-render-data.mock.js';

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
            (await compareImages(await readFile(testPngPath), await readFile(comparisonOutputPath)))
                .passed,
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
            (await compareImages(await readFile(testPngPath), await readFile(comparisonOutputPath)))
                .passed,
        );
    });
});
