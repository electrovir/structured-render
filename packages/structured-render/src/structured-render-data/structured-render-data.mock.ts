import {Star24Icon, StatusSuccess24Icon} from 'vira';
import {StructuredRenderCellDirection} from './sections/table.section.js';
import {StructuredRenderTextStyle} from './sections/text.section.js';
import {type StructuredRenderData} from './structured-render-data.js';
import {StructuredRenderSectionType} from './structured-render-section.js';

export const exampleCard: StructuredRenderData = [
    {
        cardTitle: 'Example Structured Render',
        sections: [
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Overview',
                text: 'This is an example of structured render data with multiple section types.',
            },
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Features',
                markdown:
                    '## Highlights\n\n- **Fast** rendering\n- Supports multiple output formats\n- Flexible section composition',
            },
            {
                type: StructuredRenderSectionType.codeBlock,
                sectionTitle: 'Code Example',
                syntax: 'typescript',
                code: 'import {renderToNodeImage} from "structured-render";\n\nconst output = await renderToNodeImage(data, {saveLocationPath: "output.png"});',
            },
            {
                type: StructuredRenderSectionType.table,
                sectionTitle: 'Comparison',
                direction: StructuredRenderCellDirection.Horizontal,
                headers: [
                    {
                        key: 'feature',
                    },
                    {
                        key: 'status',
                    },
                ],
                entries: [
                    {
                        data: {
                            feature: {
                                type: StructuredRenderSectionType.text,
                                text: 'Image Export',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Supported',
                            },
                        },
                    },
                    {
                        data: {
                            feature: {
                                type: StructuredRenderSectionType.text,
                                text: 'PDF Export',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Supported',
                            },
                        },
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.list,
                sectionTitle: 'Quick Notes',
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Runs in Node.js',
                        },
                        icon: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: StatusSuccess24Icon.name,
                            strokeColor: 'green',
                        },
                    },
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Outputs PNG',
                            style: StructuredRenderTextStyle.Small,
                        },
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.icon,
                iconKey: Star24Icon.name,
                strokeColor: 'yellow',
            },
        ],
    },
];
