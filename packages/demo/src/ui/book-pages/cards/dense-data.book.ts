import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    StructuredRenderCellDirection,
    StructuredRenderSectionType,
    StructuredRenderTextStyle,
    VirStructuredRender,
} from 'structured-render';
import {Star24Icon, StatusWarning24Icon, ViraColorVariant} from 'vira';
import {cardsBookPage} from '../cards.book.js';

export const denseDataBookPage = defineBookPage({
    title: 'Dense Data',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'A single card packed with many sections, large tables, lists, code blocks, and markdown to stress-test rendering.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'comprehensive product analysis',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: [
                            {
                                cardTitle: 'Comprehensive Product Analysis',
                                sections: [
                                    {
                                        type: StructuredRenderSectionType.text,
                                        sectionTitle: 'Executive Summary',
                                        text: 'This analysis covers product adoption, feature usage, customer feedback, technical debt, and roadmap progress across all three product lines.',
                                        style: StructuredRenderTextStyle.Bold,
                                    },
                                    {
                                        type: StructuredRenderSectionType.markdown,
                                        sectionTitle: 'Adoption Trends',
                                        markdown: [
                                            '### Monthly Active Users',
                                            '',
                                            'Growth has been **steady** across all tiers:',
                                            '',
                                            '- **Free tier**: 14,200 MAU (+8% MoM)',
                                            '- **Pro tier**: 3,800 MAU (+12% MoM)',
                                            '- **Enterprise tier**: 420 MAU (+3% MoM)',
                                            '',
                                            '### Retention',
                                            '',
                                            'Day-7 retention: **68%** | Day-30 retention: **41%** | Day-90 retention: **28%**',
                                            '',
                                            '> The largest drop-off occurs between day 7 and day 14, suggesting onboarding improvements could have significant impact.',
                                        ].join('\n'),
                                    },
                                    {
                                        type: StructuredRenderSectionType.table,
                                        sectionTitle: 'Feature Usage Matrix',
                                        direction: StructuredRenderCellDirection.Horizontal,
                                        headers: [
                                            {key: 'feature'},
                                            {key: 'freeTier'},
                                            {key: 'proTier'},
                                            {key: 'enterpriseTier'},
                                            {key: 'satisfaction'},
                                            {key: 'trend'},
                                        ],
                                        entries: [
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Dashboard',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '92%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '97%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '99%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '4.5 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Stable',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Export (PDF/Image)',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '34%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '78%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '91%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '3.8 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Warning,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Growing',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'API Access',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '5%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '42%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '88%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '4.1 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Growing',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Collaboration',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '18%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '61%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '95%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '4.3 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Stable',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Custom Themes',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '0%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '29%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '67%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '3.2 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Warning,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Declining',
                                                        color: {
                                                            variant: ViraColorVariant.Danger,
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    feature: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Webhooks',
                                                        style: StructuredRenderTextStyle.Bold,
                                                    },
                                                    freeTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '0%',
                                                    },
                                                    proTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '15%',
                                                    },
                                                    enterpriseTier: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '72%',
                                                    },
                                                    satisfaction: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: '4.0 / 5',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                    trend: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Growing',
                                                        color: {
                                                            variant: ViraColorVariant.Positive,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        type: StructuredRenderSectionType.list,
                                        sectionTitle: 'Customer Feedback Themes',
                                        items: [
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Export quality needs improvement (mentioned 47 times).',
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
                                                    text: 'Dashboard customization is highly valued (mentioned 82 times).',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: Star24Icon.name,
                                                    strokeColor: 'gold',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'API documentation could be more complete (mentioned 31 times).',
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
                                                    text: 'Real-time collaboration is a top-requested feature (mentioned 64 times).',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: Star24Icon.name,
                                                    strokeColor: 'gold',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Mobile experience needs significant work (mentioned 28 times).',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusWarning24Icon.name,
                                                    strokeColor: 'red',
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        type: StructuredRenderSectionType.codeBlock,
                                        sectionTitle: 'Top API Usage Pattern',
                                        syntax: 'typescript',
                                        code: [
                                            "import {createClient} from '@product/sdk';",
                                            '',
                                            'const client = createClient({',
                                            '    apiKey: process.env.PRODUCT_API_KEY,',
                                            "    baseUrl: 'https://api.product.com/v2',",
                                            '});',
                                            '',
                                            'const report = await client.reports.create({',
                                            "    title: 'Weekly Summary',",
                                            '    sections: [',
                                            "        {type: 'chart', dataSource: 'revenue'},",
                                            "        {type: 'table', dataSource: 'transactions'},",
                                            "        {type: 'text', content: 'Generated automatically.'},",
                                            '    ],',
                                            "    format: 'pdf',",
                                            '});',
                                            '',
                                            'await client.reports.export(report.id, {',
                                            "    destination: 's3://reports-bucket/weekly/',",
                                            '});',
                                        ].join('\n'),
                                    },
                                    {
                                        type: StructuredRenderSectionType.table,
                                        sectionTitle: 'Technical Debt Inventory',
                                        direction: StructuredRenderCellDirection.Horizontal,
                                        headers: [
                                            {key: 'item'},
                                            {key: 'severity'},
                                            {key: 'age'},
                                            {key: 'effort'},
                                            {key: 'impact'},
                                        ],
                                        entries: [
                                            {
                                                data: {
                                                    item: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Legacy auth middleware.',
                                                    },
                                                    severity: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'High',
                                                        color: {
                                                            variant: ViraColorVariant.Danger,
                                                        },
                                                    },
                                                    age: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '18 months',
                                                    },
                                                    effort: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '3 sprints',
                                                    },
                                                    impact: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Blocks SSO integration.',
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    item: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Untyped API responses.',
                                                    },
                                                    severity: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Medium',
                                                        color: {
                                                            variant: ViraColorVariant.Warning,
                                                        },
                                                    },
                                                    age: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '12 months',
                                                    },
                                                    effort: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '2 sprints',
                                                    },
                                                    impact: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Frequent runtime errors.',
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    item: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Duplicated validation logic.',
                                                    },
                                                    severity: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Medium',
                                                        color: {
                                                            variant: ViraColorVariant.Warning,
                                                        },
                                                    },
                                                    age: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '9 months',
                                                    },
                                                    effort: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '1 sprint',
                                                    },
                                                    impact: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Inconsistent error messages.',
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    item: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Missing database indexes.',
                                                    },
                                                    severity: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'High',
                                                        color: {
                                                            variant: ViraColorVariant.Danger,
                                                        },
                                                    },
                                                    age: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '6 months',
                                                    },
                                                    effort: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '0.5 sprint',
                                                    },
                                                    impact: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Slow report generation.',
                                                    },
                                                },
                                            },
                                            {
                                                data: {
                                                    item: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Outdated test fixtures.',
                                                    },
                                                    severity: {
                                                        type: StructuredRenderSectionType.tag,
                                                        text: 'Low',
                                                        color: {
                                                            custom: {
                                                                backgroundColor: '#e0e0e0',
                                                                foregroundColor: '#333',
                                                            },
                                                        },
                                                    },
                                                    age: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '4 months',
                                                    },
                                                    effort: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: '1 sprint',
                                                    },
                                                    impact: {
                                                        type: StructuredRenderSectionType.text,
                                                        text: 'Reduced test reliability.',
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        type: StructuredRenderSectionType.markdown,
                                        sectionTitle: 'Roadmap Progress',
                                        markdown: [
                                            '### Q1 2026 Goals',
                                            '',
                                            '| Goal | Status | Completion |',
                                            '|------|--------|------------|',
                                            '| SSO Integration | In Progress | 60% |',
                                            '| Mobile App v1 | In Progress | 35% |',
                                            '| API v3 | Planning | 10% |',
                                            '| Export Overhaul | Complete | 100% |',
                                            '| Webhook Reliability | Complete | 100% |',
                                            '',
                                            '### Q2 2026 Planned',
                                            '',
                                            '- Real-time collaboration MVP.',
                                            '- Custom theme builder.',
                                            '- Advanced analytics dashboard.',
                                            '- Internationalization (i18n) support.',
                                        ].join('\n'),
                                    },
                                    {
                                        type: StructuredRenderSectionType.list,
                                        sectionTitle: 'Key Risks',
                                        items: [
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'SSO integration depends on legacy auth refactor completing first.',
                                                    style: StructuredRenderTextStyle.Bold,
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusWarning24Icon.name,
                                                    strokeColor: 'red',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Mobile app timeline may slip due to design resource constraints.',
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
                                                    text: 'API v3 design needs broader stakeholder input before implementation.',
                                                },
                                            },
                                            {
                                                content: {
                                                    type: StructuredRenderSectionType.text,
                                                    text: 'Real-time collaboration requires WebSocket infrastructure not yet provisioned.',
                                                },
                                                icon: {
                                                    type: StructuredRenderSectionType.icon,
                                                    iconKey: StatusWarning24Icon.name,
                                                    strokeColor: 'orange',
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        type: StructuredRenderSectionType.text,
                                        sectionTitle: 'Prepared By',
                                        text: 'Product & Engineering Team, March 2026.',
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
