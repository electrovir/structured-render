import {assert} from '@augment-vir/assert';
import {
    describe,
    extractTestNameAsDir,
    it,
    itCasesWithContext,
    type UniversalTestContext,
} from '@augment-vir/test';
import {compareImages} from '@virmator/test/dist/web-screenshot-plugin/compare-images.js';
import {css, unsafeCSS, type CSSResult} from 'element-vir';
import {existsSync} from 'node:fs';
import {cp, readFile} from 'node:fs/promises';
import {join, resolve} from 'node:path';
import {noNativeSpacing} from 'vira';
import {exampleCard} from '../structured-render-data/structured-render-data.mock.js';
import {renderToNodeImage} from './render-image.js';
import {contentDivClass} from './render-markdown-styles.js';
import {renderToNodePdf} from './render-pdf.js';
import {type RenderInput} from './render-types.js';

const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..', '..');
const notCommittedDirPath = join(monoRepoDirPath, '.not-committed');
const testOutputDirPath = join(notCommittedDirPath, 'tests');
const testComparisonDirPath = join(monoRepoDirPath, 'test-files');

async function compareImageOutputs(
    testContext: UniversalTestContext,
    structuredRenderData: Readonly<RenderInput>,
    styles?: string | CSSResult | undefined,
) {
    const imageFileName = extractTestNameAsDir(testContext) + '.png';
    const comparisonOutputPath = join(testComparisonDirPath, imageFileName);

    const testImageOutputPath = await renderToNodeImage(structuredRenderData, {
        saveLocationPath: join(testOutputDirPath, imageFileName),
        options: {
            styles,
        },
    });

    if (!existsSync(comparisonOutputPath)) {
        await cp(testImageOutputPath, comparisonOutputPath);
    }

    assert.isTrue(
        (
            await compareImages(
                await readFile(testImageOutputPath),
                await readFile(comparisonOutputPath),
            )
        ).passed,
    );
}

describe(renderToNodeImage.name, () => {
    itCasesWithContext(compareImageOutputs, [
        {
            it: 'handles default styles',
            inputs: [
                exampleCard,
            ],
            throws: undefined,
        },
        {
            it: 'handles custom styles',
            inputs: [
                exampleCard,
                css`
                    .${unsafeCSS(contentDivClass)} {
                        font-family: serif;
                        color: darkred;
                        background: #ccc;

                        & * {
                            font-family: inherit;
                            font-size: inherit;
                            ${noNativeSpacing}
                        }
                    }
                `,
            ],
            throws: undefined,
        },
    ]);
});

describe(renderToNodePdf.name, () => {
    it('renders', async (testContext) => {
        await renderToNodePdf(exampleCard, {
            saveLocationPath: join(testOutputDirPath, extractTestNameAsDir(testContext) + '.pdf'),
        });
    });
});
