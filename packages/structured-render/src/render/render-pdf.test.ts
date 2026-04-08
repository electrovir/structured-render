import {describe, itCases} from '@augment-vir/test';
import {ensurePdfExtension} from './render-pdf.js';

describe(ensurePdfExtension.name, () => {
    itCases(ensurePdfExtension, [
        {
            it: 'appends .pdf when missing',
            input: 'report',
            expect: 'report.pdf',
        },
        {
            it: 'keeps .pdf when already present',
            input: 'report.pdf',
            expect: 'report.pdf',
        },
        {
            it: 'accepts uppercase .PDF',
            input: 'report.PDF',
            expect: 'report.PDF',
        },
        {
            it: 'accepts mixed case .Pdf',
            input: 'report.Pdf',
            expect: 'report.Pdf',
        },
        {
            it: 'appends .pdf for other extensions',
            input: 'report.txt',
            expect: 'report.txt.pdf',
        },
        {
            it: 'handles file name with dots',
            input: 'my.report.v2',
            expect: 'my.report.v2.pdf',
        },
        {
            it: 'handles file name with dots ending in .pdf',
            input: 'my.report.v2.pdf',
            expect: 'my.report.v2.pdf',
        },
    ]);
});
