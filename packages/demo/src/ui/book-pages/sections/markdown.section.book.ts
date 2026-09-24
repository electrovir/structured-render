import {createArray} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {StructuredRenderSectionType, VirStructuredRender} from 'structured-render';
import {sectionsBookPage} from '../sections.book.js';

export const markdownSectionBookPage = defineBookPage({
    title: 'Markdown',
    parent: sectionsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Markdown Example',
                            markdown:
                                '## Hello World\n\nThis is **bold** and _italic_ text.\n\n- Item 1\n- Item 2\n- Item 3',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with ordered list',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Ordered List Example',
                            markdown:
                                '1. **False Positives**: Name and DOB matches may not always indicate the same patient.\n2. **Data Currency**: Registry data may lag behind real-time clinical status.\n3. **Legal Compliance**: Ensure all data sharing follows applicable regulations.',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with code',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Markdown with Code',
                            markdown:
                                '### Code Example\n\nHere is some `inline code` and a code block:\n\n```typescript\nconst x = 42;\n```',
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with anchor links into closed details',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Garden Survey Insights',
                            markdown: `# Garden Survey Insights

Reviewed 2 of 2 pages from the spring garden survey on 2000-01-01.

<details open>
<summary>Recorded plants</summary>

| Plant           | Bed          | Status     | Evidence           |
| --------------- | ------------ | ---------- | ------------------ |
| Tomato          | North bed    | recorded   | [**1**](#source-1) |
| Basil           | Herb spiral  | recorded   | [**2**](#source-2) |
| Climbing squash | _unassigned_ | unassigned | [**3**](#source-3) |

Tomatoes were recorded from the planting log. No bed is assigned for the squash because the trellis location is not noted.

</details>

<details open>
<summary>Flags for review</summary>

### Possible missing plant: ground cover

The notes describe a low green mat along the path, and the plant list does not explain it. Weeding along the path already appears on the task list.

**Action:** ask the gardener whether the mat is a planted ground cover. [**4**](#source-4)

### Watering without a matching plant: shade bed

A daily watering schedule is listed for the shade bed, with no plant on the list growing there.

**Action:** confirm what the shade bed watering is for. [**5**](#source-5)

</details>

<details>
<summary>Sources</summary>

### Source 1

**survey.pdf**, page 1

> Tomato seedlings planted in the north bed.

### Source 2

**survey.pdf**, page 1

> Basil thriving in the herb spiral.

### Source 3

**survey.pdf**, page 2

> Squash vines climbing somewhere near the fence.

### Source 4

**survey.pdf**, page 2

> Low green mat spreading along the stone path.

### Source 5

**survey.pdf**, page 2

> Shade bed watered daily at dawn.

${createArray(60, (index) => {
    return `### Source ${index + 6}\n\n**survey.pdf**, page 2\n\n> Filler note.\n\n`;
}).join('')}
</details>`,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });

        defineExample({
            title: 'with Markdown file upload',
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: {
                            type: StructuredRenderSectionType.markdown,
                            sectionTitle: 'Markdown File Upload',
                            markdown:
                                '## Upload a Markdown file\n\nChoose a local `.md` file to replace this content.',
                        },
                        options: {
                            devDebug: true,
                            useCardStyles: true,
                        },
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
