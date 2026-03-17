import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    StructuredRenderCellDirection,
    StructuredRenderSectionType,
    StructuredRenderTextStyle,
    VirStructuredRender,
} from 'structured-render';
import {StatusSuccess24Icon, StatusWarning24Icon, ViraColorVariant} from 'vira';
import {cardsBookPage} from '../cards.book.js';

export const fullCardBookPage = defineBookPage({
    title: 'Full Card',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'Demos of VirStructuredRender with full StructuredRenderData (card arrays).',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'single card with many sections',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        options: {
                            useCardStyles: true,
                        },
                        data: [
                            {
                                cardTitle: 'Project Health Report',
                                sections: [
                                    {
                                        type: StructuredRenderSectionType.text,
                                        sectionTitle: 'Summary',
                                        text: 'Overall project health is good. Most metrics are within acceptable ranges, though a few areas require attention.',
                                    },
                                    {
                                        type: StructuredRenderSectionType.markdown,
                                        sectionTitle: 'Key Findings',
                                        markdown: [
                                            '### Strengths',
                                            '',
                                            '- **Code coverage** has improved from 72% to 89% over the past quarter.',
                                            '- Build times remain under 3 minutes for the full suite.',
                                            '- Zero critical vulnerabilities in the latest dependency audit.',
                                            '',
                                            '### Areas for Improvement',
                                            '',
                                            '1. Documentation coverage for public APIs is at 64%.',
                                            '2. Integration test flakiness has risen to 4.2%.',
                                            '3. Bundle size has grown 18% since the last review.',
                                        ].join('\n'),
                                    },
                                    {
                                        type: StructuredRenderSectionType.table,
                                        sectionTitle: 'Module Metrics',
                                        direction: StructuredRenderCellDirection.Horizontal,
                                        headers: [
                                            {
                                                key: 'module',
                                            },
                                            {
                                                key: 'coverage',
                                            },
                                            {
                                                key: 'buildTime',
                                            },
                                            {
                                                key: 'status',
                                            },
                                        ],
                                        entries: [
                                            {
                                                data: {
                                                    module: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Core',
                                                    },
                                                    coverage: {
                                                        type: StructuredRenderSectionType.inlineCode,
                                                        code: '94%',
                                                    },
                                                    buildTime: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '42s',
                                                    },
                                                    status: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Healthy',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    module: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Rendering',
                                                    },
                                                    coverage: {
                                                        type: StructuredRenderSectionType.inlineCode,
                                                        code: '88%',
                                                    },
                                                    buildTime: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '28s',
                                                    },
                                                    status: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Healthy',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    module: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Data Layer',
                                                    },
                                                    coverage: {
                                                        type: StructuredRenderSectionType.inlineCode,
                                                        code: '71%',
                                                    },
                                                    buildTime: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '1m 14s',
                                                    },
                                                    status: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Needs Attention',
                                                        color: {
                                                            variant: ViraColorVariant.Warning,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    module: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'CLI Tools',
                                                    },
                                                    coverage: {
                                                        type: StructuredRenderSectionType.inlineCode,
                                                        code: '82%',
                                                    },
                                                    buildTime: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '19s',
                                                    },
                                                    status: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Healthy',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        type: StructuredRenderSectionType.codeBlock,
                                        sectionTitle: 'Sample Config',
                                        syntax: 'json',
                                        code: JSON.stringify(
                                            {
                                                project: 'structured-render',
                                                coverageThreshold: 80,
                                                maxBuildTimeSeconds: 180,
                                                modules: [
                                                    'core',
                                                    'rendering',
                                                    'data-layer',
                                                    'cli-tools',
                                                ],
                                            },
                                            null,
                                            4,
                                        ),
                                    },
                                    {
                                        type: StructuredRenderSectionType.list,
                                        sectionTitle: 'Action Items',
                                        items: [
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Increase data layer test coverage to 80%.',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusWarning24Icon.name,
                                                    strokeColor: 'orange',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Investigate and fix flaky integration tests.',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusWarning24Icon.name,
                                                    strokeColor: 'orange',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Audit bundle size and remove unused dependencies.',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Add missing JSDoc to public API functions.',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Schedule quarterly security review.',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusSuccess24Icon.name,
                                                    strokeColor: 'green',
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
                        ],
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
