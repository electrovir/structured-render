# Structured Render

A type-safe library for defining structured data as JSON and rendering it into multiple output formats: HTML, Markdown, PDFs, and images. Useful for rendering arbitrary data from any source (AI outputs, reports, APIs) into consistent, styled views.

## Install

```sh
npm i structured-render
```

## Concepts

### Data hierarchy

Structured Render uses a three-level hierarchy:

1. **`StructuredRenderData`**: the top-level type. An array of cards.
2. **`StructuredRenderCard`**: a container with an optional title, optional title icon, and an array of sections.
3. **`StructuredRenderSection`**: a union of all renderable content types (text, table, list, tag, markdown, code block, etc.).

All data types are defined with [`object-shape-tester`](https://www.npmjs.com/package/object-shape-tester), providing both runtime validation and compile-time TypeScript types.

### Section types

Every section has a `type` field (discriminant), an optional `sectionTitle`, and optional `sources`. Use `StructuredRenderSectionType` to reference type values.

| Type          | Description                         | Key fields                                                  |
| ------------- | ----------------------------------- | ----------------------------------------------------------- |
| `text`        | Plain or styled text                | `text`, `style?`, `icon?`                                   |
| `markdown`    | Raw markdown content                | `markdown`                                                  |
| `codeBlock`   | Fenced code block                   | `code`, `syntax?`                                           |
| `inlineCode`  | Inline code span                    | `code`                                                      |
| `table`       | Horizontal or vertical table        | `direction`, `headers`, `entries`, `footerRows?`            |
| `list`        | Bulleted list of items              | `items` (each with `content`, `icon?`, `sources?`)          |
| `tag`         | Colored label / badge               | `text`, `color?`, `useBigTag?`                              |
| `icon`        | SVG icon reference                  | `iconKey`, `strokeColor?`, `fillColor?`                     |
| `collapsible` | Collapsible wrapper around sections | `header`, `content`                                         |
| `source`      | Reference to a source document      | `fileName?`, `pageNumbers?`, `quote?`, `fileBoundingBoxes?` |
| `empty`       | Renders nothing (placeholder)       |                                                             |
| `processing`  | Loading indicator                   |                                                             |

## Usage

### Building structured data

Anything producing outputs to be consumed by this package should produce `StructuredRenderData` instances.

#### Text

```ts
import {StructuredRenderSectionType, StructuredRenderTextStyle} from 'structured-render';

// Basic text
const textSection = {
    type: StructuredRenderSectionType.text,
    sectionTitle: 'Summary',
    text: 'Overall project health is good.',
};

// Styled text
const boldText = {
    type: StructuredRenderSectionType.text,
    text: 'Important note.',
    style: StructuredRenderTextStyle.Bold,
};

const faintText = {
    type: StructuredRenderSectionType.text,
    text: 'Additional details.',
    style: StructuredRenderTextStyle.Faint,
};

// Text with an icon
const textWithIcon = {
    type: StructuredRenderSectionType.text,
    text: 'Completed task.',
    icon: {
        type: StructuredRenderSectionType.icon,
        iconKey: 'StatusSuccess24Icon',
        strokeColor: 'green',
    },
};
```

#### Markdown

```ts
const markdownSection = {
    type: StructuredRenderSectionType.markdown,
    sectionTitle: 'Key Findings',
    markdown:
        '### Strengths\n\n- **Code coverage** improved to 89%.\n- Build times remain under 3 minutes.',
};
```

#### Code blocks

```ts
// Fenced code block with syntax highlighting
const codeBlock = {
    type: StructuredRenderSectionType.codeBlock,
    sectionTitle: 'Config',
    syntax: 'json',
    code: JSON.stringify({project: 'my-app', version: '1.0.0'}, null, 4),
};

// Inline code
const inlineCode = {
    type: StructuredRenderSectionType.inlineCode,
    code: 'const x = 42;',
};
```

#### Tables

Tables support two directions: `Horizontal` (headers as a top row, entries add rows) and `Vertical` (headers as a left column, entries add columns). Use the `createRenderDataTable` helper for type-safe table construction.

```ts
import {
    createRenderDataTable,
    StructuredRenderCellDirection,
    StructuredRenderSectionType,
} from 'structured-render';

const table = createRenderDataTable(
    StructuredRenderCellDirection.Horizontal,
    [
        {key: 'name'},
        {key: 'status'},
    ],
    [
        {
            data: {
                name: {
                    type: StructuredRenderSectionType.text,
                    text: 'Auth module',
                },
                status: {
                    type: StructuredRenderSectionType.tag,
                    text: 'Healthy',
                    color: {variant: 'positive'},
                },
            },
        },
        {
            data: {
                name: {
                    type: StructuredRenderSectionType.text,
                    text: 'API layer',
                },
                status: {
                    type: StructuredRenderSectionType.tag,
                    text: 'Degraded',
                    color: {variant: 'warning'},
                },
            },
        },
    ],
);
```

Table cells can contain `text`, `inlineCode`, `markdown`, `tag`, `list`, `empty`, or `processing` sections.

Headers support custom display text and can be hidden:

```ts
const headers = [
    {key: 'name', text: {type: StructuredRenderSectionType.text, text: 'Module Name'}},
    {key: 'internal', hidden: true},
];
```

##### Empty table fallback

Use `emptyStructuredRenderTableFallback` to show a fallback section when a table has no data:

```ts
import {emptyStructuredRenderTableFallback} from 'structured-render';

const section = emptyStructuredRenderTableFallback({
    table: createRenderDataTable(StructuredRenderCellDirection.Vertical, headers, []),
    fallback: {
        type: StructuredRenderSectionType.text,
        text: 'No data available.',
    },
    sectionTitle: 'Results',
});
```

#### Lists

```ts
const list = {
    type: StructuredRenderSectionType.list,
    sectionTitle: 'Action Items',
    items: [
        {
            content: {
                type: StructuredRenderSectionType.text,
                text: 'Increase test coverage.',
            },
            icon: {
                type: StructuredRenderSectionType.icon,
                iconKey: 'StatusWarning24Icon',
                strokeColor: 'orange',
            },
        },
        {
            content: {
                type: StructuredRenderSectionType.text,
                text: 'Update documentation.',
            },
        },
    ],
};
```

List item content supports `text`, `tag`, or `empty` sections. Each item can have optional `sources`.

#### Tags

```ts
// Tag with a color variant (from Vira)
const tag = {
    type: StructuredRenderSectionType.tag,
    text: 'Active',
    color: {variant: 'positive'},
};

// Tag with custom colors
const customTag = {
    type: StructuredRenderSectionType.tag,
    text: 'Critical',
    color: {
        custom: {
            backgroundColor: '#e74c3c',
            foregroundColor: '#ffffff',
        },
    },
};

// Big tag
const bigTag = {
    type: StructuredRenderSectionType.tag,
    text: 'Featured',
    useBigTag: true,
};
```

#### Sources

Sources provide reference/citation metadata and can be attached to any section or list item via the `sources` field.

```ts
const sectionWithSources = {
    type: StructuredRenderSectionType.text,
    text: 'Patient requires follow-up.',
    sources: [
        {
            type: StructuredRenderSectionType.source,
            fileName: 'intake-report.pdf',
            pageNumbers: [
                3,
                5,
            ],
            quote: 'Follow-up recommended within 30 days.',
            fileBoundingBoxes: [
                {x1: 0.1, y1: 0.2, x2: 0.9, y2: 0.3},
            ],
        },
    ],
};
```

#### Collapsible sections

```ts
const collapsible = {
    type: StructuredRenderSectionType.collapsible,
    header: 'Details',
    content: [
        {
            type: StructuredRenderSectionType.text,
            text: 'This content is hidden by default.',
        },
        {
            type: StructuredRenderSectionType.list,
            items: [
                {
                    content: {
                        type: StructuredRenderSectionType.text,
                        text: 'Nested list inside collapsible.',
                    },
                },
            ],
        },
    ],
};
```

### Assembling cards

Cards group sections under an optional title and optional title icon.

```ts
import {type StructuredRenderData} from 'structured-render';

const data: StructuredRenderData = [
    {
        cardTitle: 'Project Health Report',
        cardTitleIcon: {
            type: StructuredRenderSectionType.icon,
            iconKey: 'StatusSuccess24Icon',
            strokeColor: 'green',
        },
        sections: [
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Summary',
                text: 'All systems operational.',
            },
            {
                type: StructuredRenderSectionType.table,
                sectionTitle: 'Module Metrics',
                direction: 'horizontal',
                headers: [
                    {key: 'module'},
                    {key: 'coverage'},
                ],
                entries: [
                    {
                        data: {
                            module: {type: StructuredRenderSectionType.text, text: 'Core'},
                            coverage: {type: StructuredRenderSectionType.inlineCode, code: '94%'},
                        },
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Next Review',
                text: 'Scheduled for Q3 2026.',
                style: StructuredRenderTextStyle.Faint,
            },
        ],
    },
];
```

### Rendering to HTML

#### Web component (`VirStructuredRender`)

The easiest way to render structured data in a web app using [element-vir](https://www.npmjs.com/package/element-vir).

```ts
import {html} from 'element-vir';
import {VirStructuredRender} from 'structured-render';

html`
    <${VirStructuredRender.assign({
        data,
        options: {
            useCardStyles: true,
            expandAllCards: true,
            isPhoneSize: false,
        },
    })}></${VirStructuredRender}>
`;
```

##### HTML rendering options

All options are optional and have sensible defaults.

| Option                   | Default                   | Description                                              |
| ------------------------ | ------------------------- | -------------------------------------------------------- |
| `useCardStyles`          | `false`                   | Wrap cards in collapsible card components with borders   |
| `expandAllCards`         | `false`                   | Start all cards expanded                                 |
| `expandFirstCard`        | `false`                   | Start only the first card expanded                       |
| `blockCardExpansion`     | `false`                   | Expand all cards and disable toggling                    |
| `isPhoneSize`            | `false`                   | Use phone-optimized layout (tables become stacked cards) |
| `isTabletSize`           | `false`                   | Use tablet-optimized layout (VirStructuredRender only)   |
| `expandSourcesOnPrint`   | `false`                   | Auto-expand sources when printing                        |
| `hideViewOnPageButtons`  | `false`                   | Hide "view on page" buttons in sources                   |
| `currentlyExpanded`      | `{}`                      | Track which sections/sources are expanded                |
| `icons`                  | Vira's `allIconsByName`   | Override the icon set for `iconKey` lookups              |
| `sourceIcon`             | `DocumentSearch24Icon`    | Icon shown for source expansion                          |
| `processingIcon`         | `LoaderAnimated24Icon`    | Icon shown next to processing text                       |
| `viewOnPageIcon`         | `EyeOpen24Icon`           | Icon for "view on page" buttons                          |
| `markdownStyles`         | Built-in styles           | CSS for internal markdown rendering                      |
| `createViewOnPageString` | `` `View on page ${n}` `` | Custom text for page navigation buttons                  |

The element emits `SourceExpansionEvent` when a source is expanded or collapsed. You can also provide custom icons by passing an `icons` map keyed by icon name.

##### CSS variables

`VirStructuredRender` exposes CSS variables for font size customization:

-   `--vir-structured-render-h1-font-size` (default: `24px`)
-   `--vir-structured-render-h2-font-size` (default: `18px`)
-   `--vir-structured-render-h3-font-size` (default: `16px`)
-   `--vir-structured-render-small-font-size` (default: `12px`)

#### `VirExpandableSource`

A standalone element for rendering content with an expandable source citation, without needing a full `VirStructuredRender` wrapper.

```ts
import {html} from 'element-vir';
import {VirExpandableSource, StructuredRenderSectionType} from 'structured-render';

html`
    <${VirExpandableSource.assign({
        sources: [
            {
                type: StructuredRenderSectionType.source,
                fileName: 'report.pdf',
                pageNumbers: [
                    1,
                    2,
                ],
                quote: 'Relevant excerpt from the document.',
            },
        ],
    })}>
        <span>Content that has a source citation.</span>
    </${VirExpandableSource}>
`;
```

#### `renderStructuredHtml`

For lower-level control, render directly to HTML templates without a web component:

```ts
import {renderStructuredHtml} from 'structured-render';

const htmlTemplate = renderStructuredHtml(data, {
    useCardStyles: true,
    expandAllCards: true,
});
```

### Rendering to Markdown

```ts
import {renderStructuredMarkdown} from 'structured-render';

const markdown = renderStructuredMarkdown(data);
// Returns a markdown string with headings, tables, lists, etc.
```

### Rendering to PDF

```ts
// Node.js
import {renderToNodePdf} from 'structured-render';

const outputPath = await renderToNodePdf(data, {
    saveLocationPath: '/tmp/report.pdf',
});

// Browser - download
import {renderToBrowserPdf} from 'structured-render';

await renderToBrowserPdf(data, {
    fileName: 'report',
});

// Browser - print dialog
import {printPdf} from 'structured-render';

await printPdf(data, {
    fileName: 'report',
});
```

### Rendering to image

```ts
// Node.js
import {renderToNodeImage} from 'structured-render';

const outputPath = await renderToNodeImage(data, {
    saveLocationPath: '/tmp/report.png',
});

// Browser - download
import {renderToBrowserImage} from 'structured-render';

await renderToBrowserImage(data, {
    fileName: 'report',
});
```

## Utilities

### `doesSectionHaveContent`

Recursively checks if a section has any meaningful content. Useful for conditionally rendering sections.

```ts
import {doesSectionHaveContent} from 'structured-render';

if (doesSectionHaveContent(section)) {
    // render the section
}
```

### `createCleanSources`

Normalizes source input (single or array, with possible nulls) into a clean array or `undefined`.

```ts
import {createCleanSources} from 'structured-render';

const sources = createCleanSources(rawSources);
// Returns AtLeastTuple<StructuredRenderSource, 1> | undefined
```

### `sourceHasContent`

Type guard that checks whether a source has any meaningful content (quote, file name, or page numbers).

### `VirMarkdown`

A web component that safely renders markdown as sanitized HTML using `marked` and `DOMPurify`.

```ts
import {html} from 'element-vir';
import {VirMarkdown} from 'structured-render';

html`
    <${VirMarkdown.assign({
        markdownString: '**Hello** world',
    })}></${VirMarkdown}>
`;
```

## Flexible input

All rendering functions accept `RenderInput`, which is flexible about what you pass in:

```ts
type RenderInput = MaybeArray<
    StructuredRenderData | StructuredRenderCard | StructuredRenderSection | null | undefined
>;
```

You can pass a full `StructuredRenderData` array, a single card, a single section, or even an array mixing these. This makes it easy to render just a piece of structured data without wrapping it in the full hierarchy.
