import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {Star24Icon} from 'vira';
import {
    StructuredRenderCellDirection,
    type StructuredRenderTable,
} from './sections/table.section.js';
import {
    doesSectionHaveContent,
    emptyStructuredRenderTableFallback,
    StructuredRenderSectionType,
} from './structured-render-section.js';

describe(doesSectionHaveContent.name, () => {
    itCases(doesSectionHaveContent, assert.strictEquals, [
        {
            it: 'returns true for text with content',
            input: {
                type: StructuredRenderSectionType.text,
                text: 'hello',
            },
            expect: true,
        },
        {
            it: 'returns true for text with an icon but no text',
            input: {
                type: StructuredRenderSectionType.text,
                text: '',
                icon: {
                    type: StructuredRenderSectionType.icon,
                    iconKey: Star24Icon.name,
                },
            },
            expect: true,
        },
        {
            it: 'returns true for tag with text',
            input: {
                type: StructuredRenderSectionType.tag,
                text: 'status',
            },
            expect: true,
        },
        {
            it: 'returns true for codeBlock with code',
            input: {
                type: StructuredRenderSectionType.codeBlock,
                code: 'console.info("hi")',
            },
            expect: true,
        },
        {
            it: 'returns true for inlineCode with code',
            input: {
                type: StructuredRenderSectionType.inlineCode,
                code: 'x',
            },
            expect: true,
        },
        {
            it: 'returns true for markdown with content',
            input: {
                type: StructuredRenderSectionType.markdown,
                markdown: '# Title',
            },
            expect: true,
        },
        {
            it: 'returns true for a list with content items',
            input: {
                type: StructuredRenderSectionType.list,
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'item',
                        },
                    },
                ],
            },
            expect: true,
        },
        {
            it: 'returns true for a table with entries that have content',
            input: {
                type: StructuredRenderSectionType.table,
                direction: StructuredRenderCellDirection.Horizontal,
                headers: [
                    {
                        key: 'col1',
                    },
                ],
                entries: [
                    {
                        data: {
                            col1: {
                                type: StructuredRenderSectionType.text,
                                text: 'value',
                            },
                        },
                    },
                ],
            } satisfies StructuredRenderTable,
            expect: true,
        },
        {
            it: 'returns true for source with fileName',
            input: {
                type: StructuredRenderSectionType.source,
                fileName: 'test.pdf',
            },
            expect: true,
        },
        {
            it: 'returns true for source with pageNumbers',
            input: {
                type: StructuredRenderSectionType.source,
                pageNumbers: [
                    1,
                    2,
                ],
            },
            expect: true,
        },
    ]);

    itCases(doesSectionHaveContent, assert.strictEquals, [
        {
            it: 'returns false for null',
            input: null,
            expect: false,
        },
        {
            it: 'returns false for undefined',
            input: undefined,
            expect: false,
        },
        {
            it: 'returns false for empty section',
            input: {
                type: StructuredRenderSectionType.empty,
            },
            expect: false,
        },
        {
            it: 'returns false for processing section',
            input: {
                type: StructuredRenderSectionType.processing,
            },
            expect: false,
        },
        {
            it: 'returns false for tag without text',
            input: {
                type: StructuredRenderSectionType.tag,
                text: undefined,
            },
            expect: false,
        },
        {
            it: 'returns false for codeBlock without code',
            input: {
                type: StructuredRenderSectionType.codeBlock,
                code: '',
            },
            expect: false,
        },
        {
            it: 'returns false for inlineCode without code',
            input: {
                type: StructuredRenderSectionType.inlineCode,
                code: '',
            },
            expect: false,
        },
        {
            it: 'returns false for markdown without content',
            input: {
                type: StructuredRenderSectionType.markdown,
                markdown: '',
            },
            expect: false,
        },
        {
            it: 'returns false for a list with only empty items',
            input: {
                type: StructuredRenderSectionType.list,
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.empty,
                        },
                    },
                ],
            },
            expect: false,
        },
        {
            it: 'returns false for a table with entries that have no content',
            input: {
                type: StructuredRenderSectionType.table,
                direction: StructuredRenderCellDirection.Horizontal,
                headers: [
                    {
                        key: 'col1',
                    },
                ],
                entries: [
                    {
                        data: {
                            col1: undefined,
                        },
                    },
                ],
            } satisfies StructuredRenderTable,
            expect: false,
        },
        {
            it: 'returns false for source with no fields',
            input: {
                type: StructuredRenderSectionType.source,
            },
            expect: false,
        },
        {
            it: 'returns false for source with empty pageNumbers',
            input: {
                type: StructuredRenderSectionType.source,
                pageNumbers: [],
            },
            expect: false,
        },
        {
            it: 'returns false for source with only undefined pageNumbers',
            input: {
                type: StructuredRenderSectionType.source,
                pageNumbers: [undefined],
            },
            expect: false,
        },
    ]);

    it('throws for an unexpected section type', () => {
        assert.throws(() => {
            doesSectionHaveContent({
                type: 'nonexistent',
            } as any);
        });
    });
});

describe(emptyStructuredRenderTableFallback.name, () => {
    const fallbackSection = {
        type: StructuredRenderSectionType.text,
        text: 'No data',
    } as const;

    it('returns the table when it has content', () => {
        const table: Omit<StructuredRenderTable, 'sectionTitle'> = {
            type: 'table',
            direction: StructuredRenderCellDirection.Horizontal,
            headers: [
                {
                    key: 'col1',
                },
            ],
            entries: [
                {
                    data: {
                        col1: {
                            type: StructuredRenderSectionType.text,
                            text: 'value',
                        },
                    },
                },
            ],
        };

        const result = emptyStructuredRenderTableFallback(table, fallbackSection);
        assert.deepEquals(result, table);
    });

    it('returns the fallback when the table has no content', () => {
        const table: Omit<StructuredRenderTable, 'sectionTitle'> = {
            type: 'table',
            direction: StructuredRenderCellDirection.Horizontal,
            headers: [
                {
                    key: 'col1',
                },
            ],
            entries: [
                {
                    data: {
                        col1: undefined,
                    },
                },
            ],
        };

        const result = emptyStructuredRenderTableFallback(table, fallbackSection);
        assert.deepEquals(result, fallbackSection);
    });

    it('returns the fallback when the table has empty entries', () => {
        const table: Omit<StructuredRenderTable, 'sectionTitle'> = {
            type: 'table',
            direction: StructuredRenderCellDirection.Horizontal,
            headers: [
                {
                    key: 'col1',
                },
            ],
            entries: [],
        };

        const result = emptyStructuredRenderTableFallback(table, fallbackSection);
        assert.deepEquals(result, fallbackSection);
    });
});
