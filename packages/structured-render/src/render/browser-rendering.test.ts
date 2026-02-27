import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {exampleCard} from '../structured-render-data/structured-render-data.mock.js';
import {OutputImageType} from './browser-rendering.js';
import {renderToBrowserImage} from './render-image.js';

describe(renderToBrowserImage.name, () => {
    it('renders', async (testContext) => {
        const imageUrl = await renderToBrowserImage(exampleCard, {
            fileName: 'image.png',
            imageOutputType: OutputImageType.DataUriString,
        });

        const fixture = await testWeb.render(html`
            <img src=${imageUrl as string} />
        `);

        await testWeb.assertScreenshot(fixture, testContext);
    });
});
