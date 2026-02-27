import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {StructuredRenderSectionType} from '../structured-render-section.js';
import {createRenderDataTable, type StructuredRenderTable} from './table.section.js';

describe(createRenderDataTable.name, () => {
    it('creates a table with headers and entries', () => {
        const headers: StructuredRenderTable['headers'] = [
            {
                key: 'name',
                text: {
                    type: StructuredRenderSectionType.text,
                    text: 'Name',
                },
            },
            {
                key: 'value',
                text: {
                    type: StructuredRenderSectionType.text,
                    text: 'Value',
                },
            },
        ];

        const result = createRenderDataTable(headers, [
            {
                data: {
                    name: {
                        type: StructuredRenderSectionType.text,
                        text: 'Alpha',
                    },
                    value: {
                        type: StructuredRenderSectionType.text,
                        text: '100',
                    },
                },
            },
        ]);

        assert.deepEquals(result.headers, headers);
        assert.strictEquals(result.entries.length, 1);
        assert.isUndefined(result.footerRows);
    });

    it('creates a table with footer rows', () => {
        const headers: StructuredRenderTable['headers'] = [
            {key: 'col1'},
        ];

        const footerRows: StructuredRenderTable['footerRows'] = [
            {
                cells: {
                    type: StructuredRenderSectionType.text,
                    text: 'Total',
                },
            },
        ];

        const result = createRenderDataTable(
            headers,
            [
                {
                    data: {
                        col1: {
                            type: StructuredRenderSectionType.text,
                            text: 'data',
                        },
                    },
                },
            ],
            footerRows,
        );

        assert.deepEquals(result.footerRows, footerRows);
    });

    it('creates a table with sources on entries', () => {
        const headers: StructuredRenderTable['headers'] = [
            {key: 'col1'},
        ];

        const result = createRenderDataTable(headers, [
            {
                data: {
                    col1: {
                        type: StructuredRenderSectionType.text,
                        text: 'data',
                    },
                },
                sources: [
                    {
                        type: 'source',
                        fileName: 'test.pdf',
                        pageNumbers: [1],
                    },
                ],
            },
        ]);

        assert.strictEquals(result.entries.length, 1);
        assert.isDefined(result.entries[0]?.sources);
    });

    it('creates a table with empty entries', () => {
        const headers: StructuredRenderTable['headers'] = [
            {key: 'col1'},
        ];

        const result = createRenderDataTable(headers, []);

        assert.deepEquals(result.headers, headers);
        assert.strictEquals(result.entries.length, 0);
    });
});
