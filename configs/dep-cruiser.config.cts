import {defineConfig} from '@virmator/deps/configs/dep-cruiser.config.base.js';
import {type IConfiguration} from 'dependency-cruiser';

const baseConfig = defineConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': {
            from: [
                'src/index\\.ts$',
            ],
        },
        'not-to-unresolvable': {
            to: [
                /** This _is_ resolvable, it's already working in tests (we only use it in tests). */
                'pdf-to-img',
            ],
        },
        'not-to-mock': {
            from: [
                'src/ui/book-pages/examples/example-card-comparison.book.ts',
            ],
        },
    },
    omitRules: [
        // enter rule names here to omit
    ],
});

const depCruiserConfig: IConfiguration = {
    ...baseConfig,
};

module.exports = depCruiserConfig;
