import {assert} from '@augment-vir/assert';
import {describe, itCases} from '@augment-vir/test';
import {ArrowUp24Icon} from 'vira';
import {type StructuredRenderCodeBlock} from '../structured-render-data/sections/code-block.section.js';
import {type StructuredRenderEmpty} from '../structured-render-data/sections/empty.section.js';
import {type StructuredRenderInlineCode} from '../structured-render-data/sections/inline-code.section.js';
import {type StructuredRenderList} from '../structured-render-data/sections/list.section.js';
import {type RenderDataMarkdown} from '../structured-render-data/sections/markdown.section.js';
import {type StructuredRenderProcessing} from '../structured-render-data/sections/processing.section.js';
import {type StructuredRenderSource} from '../structured-render-data/sections/source.section.js';
import {
    StructuredRenderCellDirection,
    type StructuredRenderTable,
} from '../structured-render-data/sections/table.section.js';
import {type StructuredRenderTag} from '../structured-render-data/sections/tag.section.js';
import {
    StructuredRenderTextStyle,
    type StructuredRenderText,
} from '../structured-render-data/sections/text.section.js';
import {type StructuredRenderCard} from '../structured-render-data/structured-render-card.js';
import {StructuredRenderSectionType} from '../structured-render-data/structured-render-section.js';
import {renderStructuredMarkdown} from './render-markdown.js';

describe(renderStructuredMarkdown.name, () => {
    itCases(
        renderStructuredMarkdown,
        (actual, expected) => {
            const expectedNoExtractWhiteSpace = expected
                .split('\n')
                .map((line) => line.trim())
                .join('\n')
                .trim();

            assert.deepEquals(
                {
                    value: actual,
                },
                {
                    value: expectedNoExtractWhiteSpace,
                },
            );
        },
        [
            {
                it: 'handles null',
                inputs: [
                    null,
                ],
                expect: '',
            },
            {
                it: 'handles undefined',
                inputs: [
                    undefined,
                ],
                expect: '',
            },
            {
                it: 'handles an empty array',
                inputs: [
                    [],
                ],
                expect: '',
            },
            {
                it: 'handles a text section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'This is a text section',
                        icon: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: ArrowUp24Icon.name,
                        },
                    } satisfies StructuredRenderText,
                ],
                expect: `${renderStructuredMarkdown({
                    type: StructuredRenderSectionType.icon,
                    iconKey: ArrowUp24Icon.name,
                })} This is a text section`,
            },
            {
                it: 'handles a bold text section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Bold text',
                        style: StructuredRenderTextStyle.Bold,
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    **Bold text**
                `,
            },
            {
                it: 'handles a faint text section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Faint text',
                        style: StructuredRenderTextStyle.Faint,
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    Faint text
                `,
            },
            {
                it: 'handles a small text section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Small text',
                        style: StructuredRenderTextStyle.Small,
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    Small text
                `,
            },
            {
                it: 'handles an empty section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.empty,
                    } satisfies StructuredRenderEmpty,
                ],
                expect: '',
            },
            {
                it: 'handles a processing section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.processing,
                    } satisfies StructuredRenderProcessing,
                ],
                expect: '',
            },
            {
                it: 'handles a code block section without syntax',
                inputs: [
                    {
                        type: StructuredRenderSectionType.codeBlock,
                        code: 'console.info("hello")',
                    } satisfies StructuredRenderCodeBlock,
                ],
                expect: `
                    \`\`\`
                    console.info("hello")
                    \`\`\`
                `,
            },
            {
                it: 'handles a code block section with syntax',
                inputs: [
                    {
                        type: StructuredRenderSectionType.codeBlock,
                        code: 'const x = 1;',
                        syntax: 'typescript',
                    } satisfies StructuredRenderCodeBlock,
                ],
                expect: `
                    \`\`\`typescript
                    const x = 1;
                    \`\`\`
                `,
            },
            {
                it: 'handles an inline code section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.inlineCode,
                        code: 'myVariable',
                    } satisfies StructuredRenderInlineCode,
                ],
                expect: `
                    \`myVariable\`
                `,
            },
            {
                it: 'handles an inline code section with special characters',
                inputs: [
                    {
                        type: StructuredRenderSectionType.inlineCode,
                        code: 'arr.map(x => x + 1)',
                    } satisfies StructuredRenderInlineCode,
                ],
                expect: `
                    \`arr.map(x => x + 1)\`
                `,
            },
            {
                it: 'handles a markdown section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.markdown,
                        markdown: '# Hello World\n\nSome **bold** text.',
                    } satisfies RenderDataMarkdown,
                ],
                expect: `
                    # Hello World

                    Some **bold** text.
                `,
            },
            {
                it: 'handles a tag section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.tag,
                        text: 'Status: OK',
                    } satisfies StructuredRenderTag,
                ],
                expect: `
                    Status: OK
                `,
            },
            {
                it: 'handles a big tag section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.tag,
                        text: 'Big tag',
                        useBigTag: true,
                    } satisfies StructuredRenderTag,
                ],
                expect: `
                    Big tag
                `,
            },
            {
                it: 'handles a source section with file name only',
                inputs: [
                    {
                        type: StructuredRenderSectionType.source,
                        fileName: 'document.pdf',
                    } satisfies StructuredRenderSource,
                ],
                expect: `
                    <small>Source: document.pdf</small>
                `,
            },
            {
                it: 'handles a source section with page numbers only',
                inputs: [
                    {
                        type: StructuredRenderSectionType.source,
                        pageNumbers: [
                            1,
                            3,
                            5,
                        ],
                    } satisfies StructuredRenderSource,
                ],
                expect: `
                    <small>Source: p. 1, 3, 5</small>
                `,
            },
            {
                it: 'handles a source section with file name and page numbers',
                inputs: [
                    {
                        type: StructuredRenderSectionType.source,
                        fileName: 'report.pdf',
                        pageNumbers: [
                            2,
                            4,
                        ],
                    } satisfies StructuredRenderSource,
                ],
                expect: `
                    <small>Source: report.pdf, p. 2, 4</small>
                `,
            },
            {
                it: 'handles a source section with no file name or page numbers',
                inputs: [
                    {
                        type: StructuredRenderSectionType.source,
                    } satisfies StructuredRenderSource,
                ],
                expect: '',
            },
            {
                it: 'handles a list section with text items',
                inputs: [
                    {
                        type: StructuredRenderSectionType.list,
                        items: [
                            {
                                content: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'First item',
                                },
                            },
                            {
                                content: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Second item',
                                },
                            },
                        ],
                    } satisfies StructuredRenderList,
                ],
                expect: `
                    - First item
                    - Second item
                `,
            },
            {
                it: 'handles a list section with tag items',
                inputs: [
                    {
                        type: StructuredRenderSectionType.list,
                        items: [
                            {
                                content: {
                                    type: StructuredRenderSectionType.tag,
                                    text: 'Tag A',
                                },
                            },
                            {
                                content: {
                                    type: StructuredRenderSectionType.tag,
                                    text: 'Tag B',
                                },
                            },
                        ],
                    } satisfies StructuredRenderList,
                ],
                expect: `
                    - Tag A
                    - Tag B
                `,
            },
            {
                it: 'handles a list section with empty items',
                inputs: [
                    {
                        type: StructuredRenderSectionType.list,
                        items: [
                            {
                                content: {
                                    type: StructuredRenderSectionType.empty,
                                },
                            },
                        ],
                    } satisfies StructuredRenderList,
                ],
                expect: '',
            },
            {
                it: 'handles a table section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Horizontal,
                        headers: [
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
                        ],
                        entries: [
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
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    | Name  | Value |
                    | ----- | ----- |
                    | Alpha | 100   |
                `,
            },
            {
                it: 'handles a table section with hidden headers',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Horizontal,
                        headers: [
                            {
                                key: 'name',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Name',
                                },
                            },
                            {
                                key: 'secret',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Secret',
                                },
                                hidden: true,
                            },
                            {
                                key: 'value',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Value',
                                },
                            },
                        ],
                        entries: [
                            {
                                data: {
                                    name: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Alpha',
                                    },
                                    secret: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'hidden',
                                    },
                                    value: {
                                        type: StructuredRenderSectionType.text,
                                        text: '100',
                                    },
                                },
                            },
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    | Name  | Value |
                    | ----- | ----- |
                    | Alpha | 100   |
                `,
            },
            {
                it: 'handles a table section with code cells',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Horizontal,
                        headers: [
                            {
                                key: 'snippet',
                            },
                        ],
                        entries: [
                            {
                                data: {
                                    snippet: {
                                        type: StructuredRenderSectionType.inlineCode,
                                        code: 'let x = 1;',
                                    },
                                },
                            },
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    | snippet      |
                    | ------------ |
                    | \`let x = 1;\` |
                `,
            },
            {
                it: 'handles a table section with empty cell values',
                inputs: [
                    {
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
                ],
                expect: `
                    | col1 |
                    | ---- |
                    |      |
                `,
            },
            {
                it: 'handles a vertical table section',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Vertical,
                        headers: [
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
                        ],
                        entries: [
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
                            {
                                data: {
                                    name: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Beta',
                                    },
                                    value: {
                                        type: StructuredRenderSectionType.text,
                                        text: '200',
                                    },
                                },
                            },
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    |       |       |      |
                    | ----- | ----- | ---- |
                    | Name  | Alpha | Beta |
                    | Value | 100   | 200  |
                `,
            },
            {
                it: 'handles a vertical table section with hidden headers',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Vertical,
                        headers: [
                            {
                                key: 'name',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Name',
                                },
                            },
                            {
                                key: 'secret',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Secret',
                                },
                                hidden: true,
                            },
                            {
                                key: 'value',
                                text: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Value',
                                },
                            },
                        ],
                        entries: [
                            {
                                data: {
                                    name: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'Alpha',
                                    },
                                    secret: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'hidden',
                                    },
                                    value: {
                                        type: StructuredRenderSectionType.text,
                                        text: '100',
                                    },
                                },
                            },
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    |       |       |
                    | ----- | ----- |
                    | Name  | Alpha |
                    | Value | 100   |
                `,
            },
            {
                it: 'handles a card with a title and sections',
                inputs: [
                    {
                        cardTitle: 'My Card',
                        sections: [
                            {
                                type: StructuredRenderSectionType.text,
                                text: 'Card body text',
                            },
                        ],
                    } satisfies StructuredRenderCard,
                ],
                expect: `
                    ## My Card

                    Card body text
                `,
            },
            {
                it: 'handles a card without a title',
                inputs: [
                    {
                        cardTitle: undefined,
                        sections: [
                            {
                                type: StructuredRenderSectionType.text,
                                text: 'No title card',
                            },
                        ],
                    } satisfies StructuredRenderCard,
                ],
                expect: `
                    No title card
                `,
            },
            {
                it: 'handles an array of mixed sections',
                inputs: [
                    [
                        {
                            type: StructuredRenderSectionType.text,
                            text: 'First',
                        } satisfies StructuredRenderText,
                        {
                            type: StructuredRenderSectionType.tag,
                            text: 'Second',
                        } satisfies StructuredRenderTag,
                    ],
                ],
                expect: `
                    First

                    Second
                `,
            },
            {
                it: 'handles an array with null entries',
                inputs: [
                    [
                        null,
                        {
                            type: StructuredRenderSectionType.text,
                            text: 'After null',
                        } satisfies StructuredRenderText,
                        undefined,
                    ],
                ],
                expect: `
                    After null
                `,
            },
            {
                it: 'handles a tag section with undefined text',
                inputs: [
                    {
                        type: StructuredRenderSectionType.tag,
                        text: undefined,
                    } satisfies StructuredRenderTag,
                ],
                expect: '',
            },
            {
                it: 'handles a text section with undefined text',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: undefined,
                    } satisfies StructuredRenderText,
                ],
                expect: '',
            },
            {
                it: 'handles a vertical table with headers that have no text property',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Vertical,
                        headers: [
                            {
                                key: 'name',
                            },
                            {
                                key: 'value',
                            },
                        ],
                        entries: [
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
                        ],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    |       |       |
                    | ----- | ----- |
                    | name  | Alpha |
                    | value | 100   |
                `,
            },
            {
                it: 'handles an empty table with no headers',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Horizontal,
                        headers: [],
                        entries: [],
                    } satisfies StructuredRenderTable,
                ],
                expect: `
                    |  |
                    |  |
                `,
            },
            {
                it: 'handles a StructuredRenderData array of cards',
                inputs: [
                    [
                        {
                            cardTitle: 'Card 1',
                            sections: [
                                {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Card 1 body',
                                },
                            ],
                        } satisfies StructuredRenderCard,
                        {
                            cardTitle: 'Card 2',
                            sections: [
                                {
                                    type: StructuredRenderSectionType.tag,
                                    text: 'Tag',
                                },
                            ],
                        } satisfies StructuredRenderCard,
                    ],
                ],
                expect: `
                    ## Card 1

                    Card 1 body

                    ## Card 2

                    Tag
                `,
            },
            {
                it: 'renders a section title when sectionTitle is set',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Hello',
                        sectionTitle: 'My Section',
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    ### My Section

                    Hello
                `,
            },
            {
                it: 'does not render a section title when sectionTitle is undefined',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'No title here',
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    No title here
                `,
            },
            {
                it: 'renders a section title on a code block',
                inputs: [
                    {
                        type: StructuredRenderSectionType.codeBlock,
                        code: 'const x = 1;',
                        syntax: 'typescript',
                        sectionTitle: 'Code',
                    } satisfies StructuredRenderCodeBlock,
                ],
                expect: `
                    ### Code

                    \`\`\`typescript
                    const x = 1;
                    \`\`\`
                `,
            },
            {
                it: 'handles a source section with undefined page numbers in the array',
                inputs: [
                    {
                        type: StructuredRenderSectionType.source,
                        pageNumbers: [
                            1,
                            undefined,
                            3,
                        ],
                    } satisfies StructuredRenderSource,
                ],
                expect: `
                    <small>Source: p. 1, 3</small>
                `,
            },
            {
                it: 'renders a section with sources',
                inputs: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'Main content',
                        sources: [
                            {
                                type: StructuredRenderSectionType.source,
                                fileName: 'doc.pdf',
                                pageNumbers: [
                                    1,
                                    2,
                                ],
                            },
                        ],
                    } satisfies StructuredRenderText,
                ],
                expect: `
                    Main content

                    <small>Source: doc.pdf, p. 1, 2</small>
                `,
            },
            {
                it: 'throws for an unexpected structured render type',
                inputs: [
                    {
                        // @ts-expect-error: intentionally invalid input type
                        unexpected: true,
                    },
                ],
                throws: {
                    matchConstructor: Error,
                    matchMessage: 'Unexpected structured render type',
                },
            },
            {
                it: 'throws for an unsupported table direction',
                inputs: [
                    {
                        type: StructuredRenderSectionType.table,
                        // @ts-expect-error: intentionally invalid direction type
                        direction: 'diagonal',
                        headers: [
                            {
                                key: 'col1',
                            },
                        ],
                        entries: [],
                    },
                ],
                throws: {
                    matchConstructor: TypeError,
                    matchMessage: 'is not a function',
                },
            },
        ],
    );
});
