import {assert, assertWrap, check} from '@augment-vir/assert';
import {
    createArray,
    filterMap,
    mergeDefinedProperties,
    stringify,
    wrapString,
    type ArrayElement,
    type AtLeastTuple,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {convertTemplateToString} from 'element-vir';
import {type StructuredRenderCodeBlock} from '../structured-render-data/sections/code-block.section.js';
import {type StructuredRenderCopyCard} from '../structured-render-data/sections/copy-card.section.js';
import {
    createStructuredRenderIcon,
    type StructuredRenderIcon,
} from '../structured-render-data/sections/icon.section.js';
import {type StructuredRenderInlineCode} from '../structured-render-data/sections/inline-code.section.js';
import {type StructuredRenderList} from '../structured-render-data/sections/list.section.js';
import {type RenderDataMarkdown} from '../structured-render-data/sections/markdown.section.js';
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
import {type StructuredRenderTitle} from '../structured-render-data/sections/title.section.js';
import {type StructuredRenderSection} from '../structured-render-data/structured-render-section.js';
import {
    defaultRenderMarkdownOptions,
    type RenderInput,
    type RenderMarkdownOptions,
    type RenderOptions,
} from './render-types.js';

/**
 * Convert any structured render data part to markdown.
 *
 * @category Render
 */
export function renderStructuredMarkdown(
    data: Readonly<RenderInput>,
    options?: Readonly<PartialWithUndefined<RenderMarkdownOptions>> | undefined,
): string {
    const finalOptions: Readonly<RenderMarkdownOptions> = mergeDefinedProperties(
        defaultRenderMarkdownOptions,
        options,
    );

    return structuredRenderToMarkdownArray(data, finalOptions).filter(check.isTruthy).join('\n\n');
}

const markdownStyleWrapper: Partial<Record<StructuredRenderTextStyle, string>> = {
    [StructuredRenderTextStyle.Bold]: '**',
};

type StructuredRenderTableHeader = ArrayElement<StructuredRenderTable['headers']>;

function buildVerticalTableRows({
    section,
    visibleHeaders,
    options,
    wrapCell,
}: Readonly<{
    section: Readonly<StructuredRenderTable>;
    visibleHeaders: ReadonlyArray<StructuredRenderTableHeader>;
    options: Readonly<RenderOptions>;
    wrapCell: (text: string) => string;
}>): AtLeastTuple<string[], 1> {
    const columnCount = section.entries.length + 1;

    const dataRows = visibleHeaders.map((header) => {
        const headerText = wrapCell(
            header.text ? renderStructuredMarkdown(header.text, options) : header.key,
        );
        const cells = section.entries.map((entry) =>
            wrapCell(renderStructuredMarkdown(entry.data[header.key], options)),
        );

        return [
            headerText,
            ...cells,
        ];
    });

    return [
        createArray(columnCount, () => ''),
        ...dataRows,
    ];
}

function buildHorizontalTableRows({
    section,
    visibleHeaders,
    options,
    wrapCell,
}: Readonly<{
    section: Readonly<StructuredRenderTable>;
    visibleHeaders: ReadonlyArray<StructuredRenderTableHeader>;
    options: Readonly<RenderOptions>;
    wrapCell: (text: string) => string;
}>): AtLeastTuple<string[], 1> {
    const headerRow = visibleHeaders.map((header) =>
        wrapCell(header.text ? renderStructuredMarkdown(header.text, options) : header.key),
    );

    const dataRows = section.entries.map((entry) =>
        visibleHeaders.map((header) =>
            wrapCell(renderStructuredMarkdown(entry.data[header.key], options)),
        ),
    );

    return [
        headerRow,
        ...dataRows,
    ];
}

const tableRowBuilders: Record<
    StructuredRenderCellDirection,
    (
        params: Readonly<{
            section: Readonly<StructuredRenderTable>;
            visibleHeaders: ReadonlyArray<StructuredRenderTableHeader>;
            options: Readonly<RenderOptions>;
            wrapCell: (text: string) => string;
        }>,
    ) => AtLeastTuple<string[], 1>
> = {
    [StructuredRenderCellDirection.Vertical]: buildVerticalTableRows,
    [StructuredRenderCellDirection.Horizontal]: buildHorizontalTableRows,
};

const markdownRenderers: Record<
    StructuredRenderSection['type'],
    (section: StructuredRenderSection, options: Readonly<RenderOptions>) => string
> = {
    icon(section: Readonly<StructuredRenderIcon>, options) {
        const coloredIcon = createStructuredRenderIcon(section, options);

        if (!coloredIcon) {
            return '';
        }

        return convertTemplateToString(coloredIcon.svgTemplate);
    },
    collapsible() {
        return '';
    },
    codeBlock(section: Readonly<StructuredRenderCodeBlock>): string {
        return `\`\`\`${section.syntax || ''}\n${section.code}\n\`\`\``;
    },
    copyCard(section: Readonly<StructuredRenderCopyCard>) {
        const text = section.text == undefined ? '' : String(section.text);
        const headerText = section.header == undefined ? '' : String(section.header);

        if (!text && !headerText) {
            return '';
        }

        return [
            headerText && `### ${headerText}`,
            text,
        ]
            .filter(check.isTruthy)
            .join('\n\n');
    },
    inlineCode(section: Readonly<StructuredRenderInlineCode>): string {
        return `\`${section.code}\``;
    },
    empty() {
        return '';
    },
    list(section: Readonly<StructuredRenderList>, options) {
        return filterMap(
            section.items,
            (item) => {
                const content = renderStructuredMarkdown(item.content, options);
                const icon = renderStructuredMarkdown(item.icon, options);
                if (content) {
                    const itemLine = icon ? `- ${icon} ${content}` : `- ${content}`;
                    const sourcesLine = (item.sources || [])
                        .map((source) => renderStructuredMarkdown(source, options))
                        .filter(check.isTruthy)
                        .join('\n');

                    return sourcesLine ? `${itemLine}\n${sourcesLine}` : itemLine;
                } else {
                    return '';
                }
            },
            check.isTruthy,
        ).join('\n');
    },
    markdown(section: Readonly<RenderDataMarkdown>) {
        return section.markdown;
    },
    tag(section: Readonly<StructuredRenderTag>) {
        if (section.text == undefined) {
            return '';
        }

        return String(section.text);
    },
    processing() {
        return '';
    },
    source(section: Readonly<StructuredRenderSource>, options) {
        if (options.hideSources) {
            return '';
        }

        const filteredPageNumbers = section.pageNumbers?.filter(check.isDefined);
        const pageNumberLine = filteredPageNumbers?.length
            ? `p. ${filteredPageNumbers.join(', ')}`
            : '';

        const pageLine = [
            section.fileName,
            pageNumberLine,
        ]
            .filter(check.isTruthy)
            .join(', ');

        return pageLine ? `<small>${options.sourceString}: ${pageLine}</small>` : '';
    },
    table(section: Readonly<StructuredRenderTable>, options) {
        const visibleHeaders = section.headers.filter((header) => !header.hidden);
        const styleWrapper = (section.style && markdownStyleWrapper[section.style]) || '';
        const wrapCell = (text: string): string =>
            text && styleWrapper
                ? wrapString({
                      value: text,
                      wrapper: styleWrapper,
                  })
                : text;

        const rows = tableRowBuilders[section.direction]({
            section,
            visibleHeaders,
            options,
            wrapCell,
        });
        const columnCount = rows[0].length || 0;
        const colWidths = computeColumnWidths(rows, columnCount);
        const [
            headerRow,
            ...dataRows
        ] = rows;

        return [
            formatRow(headerRow, colWidths),
            formatSeparatorRow(colWidths),
            ...dataRows.map((row) => formatRow(row, colWidths)),
        ].join('\n');
    },
    title(section: Readonly<StructuredRenderTitle>, options) {
        if (section.text == undefined) {
            return '';
        }

        const icon = renderStructuredMarkdown(section.icon, options);
        const text = String(section.text);

        return icon ? `# ${icon} ${text}` : `# ${text}`;
    },
    text(section: Readonly<StructuredRenderText>, options) {
        if (section.text == undefined) {
            return '';
        }

        const styleWrapper = (section.style && markdownStyleWrapper[section.style]) || '';

        const icon = renderStructuredMarkdown(section.icon, options);
        const text = wrapString({
            value: String(section.text),
            wrapper: styleWrapper,
        });

        return icon ? `${icon} ${text}` : text;
    },
} satisfies {
    [SectionType in StructuredRenderSection['type']]: (
        section: Extract<StructuredRenderSection, {type: SectionType}>,
        options: Readonly<RenderOptions>,
    ) => string;
} as Record<
    StructuredRenderSection['type'],
    (section: StructuredRenderSection, options: Readonly<RenderOptions>) => string
>;

function computeColumnWidths(rows: AtLeastTuple<string[], 1>, columnCount: number): number[] {
    return createArray(columnCount, (colIndex) => {
        return rows.reduce((maxWidth, row, rowIndex) => {
            return Math.max(
                maxWidth,
                assertWrap.isDefined(
                    row[colIndex],
                    `No cell at row index ${rowIndex}, column index ${colIndex}`,
                ).length,
            );
        }, 3);
    });
}

function formatRow(cells: string[], widths: number[]): string {
    const paddedCells = cells.map((cell, i) => cell.padEnd(widths[i] ?? 3));
    return `| ${paddedCells.join(' | ')} |`;
}

function formatSeparatorRow(widths: number[]): string {
    const dashes = widths.map((w) => '-'.repeat(w));
    return `| ${dashes.join(' | ')} |`;
}

function structuredRenderToMarkdownArray(
    data: Readonly<RenderInput>,
    options: Readonly<RenderOptions>,
    isFirstCardSection = false,
): (string | undefined)[] {
    if (!data) {
        return [];
    } else if (check.isArray(data)) {
        return data.flatMap((entry) => renderStructuredMarkdown(entry, options));
    } else if ('type' in data) {
        const sectionTitle =
            'sectionTitle' in data && !isFirstCardSection ? data.sectionTitle : undefined;
        const sources = options.hideSources ? [] : ('sources' in data && data.sources) || [];

        return [
            sectionTitle ? `### ${sectionTitle}` : undefined,
            markdownRenderers[data.type](data, options),
            ...sources.map((source) => renderStructuredMarkdown(source, options)),
        ];
    } else if ('sections' in data) {
        return [
            data.cardTitle && `## ${data.cardTitle}`,
            ...data.sections.flatMap((section, index) =>
                structuredRenderToMarkdownArray(section, options, index === 0),
            ),
        ].filter(check.isTruthy);
    } else {
        assert.tsType(data).equals<never>();
        throw new Error(`Unexpected structured render type: ${stringify(data)}`);
    }
}
