import {log} from '@augment-vir/common';
import {join, resolve} from 'node:path';
import {type StructuredRenderData} from '../structured-render-data/structured-render-data.js';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {renderToNodePdf} from './render-pdf.js';

const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..', '..');
const outputPath = join(monoRepoDirPath, '.not-committed', 'test-image-pdf.pdf');

const testData: StructuredRenderData = [
    {
        cardTitle: 'Image Embedding Test',
        sections: [
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Purpose',
                text: 'This PDF tests that external images are fetched and embedded correctly.',
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Single Image',
                markdown:
                    '![Wikipedia logo](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/440px-Wikipedia-logo-v2.svg.png)',
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Multiple Images',
                markdown: [
                    '![Node.js logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/440px-Node.js_logo.svg.png)',
                    '![TypeScript logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png)',
                ].join('\n\n'),
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Duplicate Image',
                markdown: [
                    'These two images share the same URL and should only be fetched once:',
                    '![First](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/440px-Wikipedia-logo-v2.svg.png)',
                    '![Second](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/440px-Wikipedia-logo-v2.svg.png)',
                ].join('\n\n'),
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Broken Image',
                markdown:
                    'This image URL is invalid and should be skipped gracefully:\n\n![Broken](https://invalid.example.test/no-image.png)',
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Image in Mixed Content',
                markdown: [
                    '## Heading with an image below',
                    'Some **bold** and *italic* text before the image.',
                    '![Git logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/320px-Git-logo.svg.png)',
                    'And some text after.',
                ].join('\n\n'),
            },
        ],
    },
];

try {
    log.info(`Rendering PDF to ${outputPath}...`);
    const result = await renderToNodePdf(testData, {
        saveLocationPath: outputPath,
    });
    log.success(`PDF saved to ${result}`);
    process.exit(0);
} catch (error) {
    log.error(error);
    process.exit(1);
}
