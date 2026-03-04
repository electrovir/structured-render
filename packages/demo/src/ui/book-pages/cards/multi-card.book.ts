import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {
    StructuredRenderCellDirection,
    StructuredRenderSectionType,
    StructuredRenderTextStyle,
    VirStructuredRender,
    type StructuredRenderData,
} from 'structured-render';
import {StatusSuccess24Icon, StatusWarning24Icon, ViraColorVariant} from 'vira';
import {cardsBookPage} from '../cards.book.js';

export const multiCardMock: StructuredRenderData = [
    {
        cardTitle: 'Frontend Performance',
        sections: [
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Overview',
                text: 'Frontend performance metrics collected from the last 30 days of production monitoring.',
                sources: [
                    {
                        type: 'source',
                        fileName: 'performance-report-2026-02.pdf',
                        pageNumbers: [
                            1,
                            2,
                        ],
                        quote: 'Metrics aggregated from real user monitoring (RUM) data across all production traffic.',
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.table,
                sectionTitle: 'Core Web Vitals',
                direction: StructuredRenderCellDirection.Horizontal,
                sources: [
                    {
                        type: 'source',
                        fileName: 'lighthouse-audit.json',
                        pageNumbers: [
                            3,
                        ],
                        quote: 'Core Web Vitals thresholds based on Chrome UX Report field data.',
                    },
                    {
                        type: 'source',
                        fileName: 'web-vitals-spec.md',
                        quote: 'Targets align with Google recommended thresholds for good user experience.',
                    },
                ],
                headers: [
                    {
                        key: 'metric',
                    },
                    {
                        key: 'p50',
                    },
                    {
                        key: 'p95',
                    },
                    {
                        key: 'target',
                    },
                    {
                        key: 'status',
                    },
                ],
                entries: [
                    {
                        data: {
                            metric: {
                                type: StructuredRenderSectionType.text,
                                text: 'Largest Contentful Paint',
                                style: StructuredRenderTextStyle.Bold,
                            },
                            p50: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '1.2s',
                            },
                            p95: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '2.8s',
                            },
                            target: {
                                type: StructuredRenderSectionType.text,
                                text: '< 2.5s',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Pass',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                        },
                    },
                    {
                        data: {
                            metric: {
                                type: StructuredRenderSectionType.text,
                                text: 'First Input Delay',
                                style: StructuredRenderTextStyle.Bold,
                            },
                            p50: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '12ms',
                            },
                            p95: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '85ms',
                            },
                            target: {
                                type: StructuredRenderSectionType.text,
                                text: '< 100ms',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Pass',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                        },
                    },
                    {
                        data: {
                            metric: {
                                type: StructuredRenderSectionType.text,
                                text: 'Cumulative Layout Shift',
                                style: StructuredRenderTextStyle.Bold,
                            },
                            p50: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '0.18',
                            },
                            p95: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '0.32',
                            },
                            target: {
                                type: StructuredRenderSectionType.text,
                                text: '< 0.1',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Fail',
                                color: {
                                    variant: ViraColorVariant.Danger,
                                },
                            },
                        },
                        sources: [
                            {
                                type: 'source',
                                fileName: 'cls-regression-analysis.pdf',
                                pageNumbers: [
                                    7,
                                ],
                                quote: 'CLS spike correlated with hero image carousel added in v3.12.0.',
                            },
                        ],
                    },
                    {
                        data: {
                            metric: {
                                type: StructuredRenderSectionType.text,
                                text: 'Time to First Byte',
                                style: StructuredRenderTextStyle.Bold,
                            },
                            p50: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '210ms',
                            },
                            p95: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '480ms',
                            },
                            target: {
                                type: StructuredRenderSectionType.text,
                                text: '< 600ms',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Pass',
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
                sectionTitle: 'Recommendations',
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images. Fix layout shifts caused by dynamically loaded images.',
                        },
                        icon: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: StatusWarning24Icon.name,
                            strokeColor: 'red',
                        },
                        sources: [
                            {
                                type: 'source',
                                fileName: 'frontend-performance-review-2026-q1.pdf',
                                pageNumbers: [
                                    4,
                                ],
                                quote: 'Layout shifts primarily caused by images without explicit dimensions.',
                            },
                            {
                                type: 'source',
                                fileName: 'web-vitals-optimization-guide.md',
                                quote: 'Lazy loading below-the-fold content reduces initial page weight and improves LCP.',
                            },
                        ],
                    },
                    {
                        icon: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: StatusWarning24Icon.name,
                            strokeColor: 'red',
                        },
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Add explicit width and height attributes to all image elements.',
                            sources: [
                                {
                                    type: 'source',
                                    fileName: 'cls-regression-analysis.pdf',
                                    pageNumbers: [
                                        8,
                                    ],
                                    quote: 'Missing width/height attributes on images are the primary contributor to layout shift.',
                                },
                            ],
                        },
                    },
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Consider lazy loading below-the-fold content.',
                        },
                        sources: [
                            {
                                type: 'source',
                                fileName: 'frontend-performance-review-2026-q1.pdf',
                                pageNumbers: [
                                    4,
                                ],
                                quote: 'Layout shifts primarily caused by images without explicit dimensions.',
                            },
                            {
                                type: 'source',
                                fileName: 'web-vitals-optimization-guide.md',
                                quote: 'Lazy loading below-the-fold content reduces initial page weight and improves LCP.',
                            },
                        ],
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.list,
                sectionTitle: 'Action Items',
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions. Audit all hero images for missing dimensions.',
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
                            text: 'Enable native lazy loading on below-the-fold images.',
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
                            text: 'Defer non-critical third-party scripts.',
                        },
                        icon: {
                            type: StructuredRenderSectionType.icon,
                            iconKey: StatusSuccess24Icon.name,
                            strokeColor: 'green',
                        },
                    },
                ],
            },
        ],
    },
    {
        cardTitle: 'Backend API Health',
        sections: [
            {
                type: StructuredRenderSectionType.markdown,
                sectionTitle: 'Status Summary',
                sources: [
                    {
                        type: 'source',
                        fileName: 'uptime-monitor-export.csv',
                        quote: 'Uptime percentages calculated from 5-minute health check intervals.',
                    },
                ],
                markdown: [
                    'All **12 services** are operational. Average uptime over the past 30 days: **99.97%**.',
                    '',
                    '| Service | Uptime |',
                    '|---------|--------|',
                    '| Auth | 99.99% |',
                    '| Users | 99.98% |',
                    '| Notifications | 99.91% |',
                    '| Billing | 100% |',
                ].join('\n'),
            },
            {
                type: StructuredRenderSectionType.table,
                sectionTitle: 'Endpoint Latency (ms)',
                direction: StructuredRenderCellDirection.Vertical,
                headers: [
                    {
                        key: 'endpoint',
                    },
                    {
                        key: 'getUsers',
                    },
                    {
                        key: 'createUser',
                    },
                    {
                        key: 'getReport',
                    },
                    {
                        key: 'sendNotification',
                    },
                ],
                entries: [
                    {
                        data: {
                            endpoint: {
                                type: StructuredRenderSectionType.text,
                                text: 'p50',
                            },
                            getUsers: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '45',
                            },
                            createUser: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '120',
                            },
                            getReport: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '890',
                            },
                            sendNotification: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '65',
                            },
                        },
                    },
                    {
                        data: {
                            endpoint: {
                                type: StructuredRenderSectionType.text,
                                text: 'p99',
                            },
                            getUsers: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '180',
                            },
                            createUser: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '450',
                            },
                            getReport: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '3200',
                            },
                            sendNotification: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: '210',
                            },
                        },
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.codeBlock,
                sectionTitle: 'Slow Query Sample',
                syntax: 'sql',
                code: [
                    'SELECT r.id, r.title, r.created_at,',
                    '       u.name AS author_name,',
                    '       COUNT(c.id) AS comment_count',
                    'FROM reports r',
                    'JOIN users u ON u.id = r.author_id',
                    'LEFT JOIN comments c ON c.report_id = r.id',
                    "WHERE r.created_at > NOW() - INTERVAL '30 days'",
                    'GROUP BY r.id, r.title, r.created_at, u.name',
                    'ORDER BY r.created_at DESC',
                    'LIMIT 100;',
                ].join('\n'),
            },
        ],
    },
    {
        cardTitle: 'Deployment Pipeline',
        sections: [
            {
                type: StructuredRenderSectionType.text,
                sectionTitle: 'Current State',
                text: 'The CI/CD pipeline is fully automated with staging and production environments.',
                icon: {
                    type: StructuredRenderSectionType.icon,
                    iconKey: StatusSuccess24Icon.name,
                    strokeColor: 'green',
                },
            },
            {
                type: StructuredRenderSectionType.table,
                sectionTitle: 'Recent Deployments',
                direction: StructuredRenderCellDirection.Horizontal,
                sources: [
                    {
                        type: 'source',
                        fileName: 'ci-pipeline-logs.txt',
                        pageNumbers: [
                            12,
                            15,
                            18,
                            22,
                        ],
                        quote: 'Deployment records extracted from CI/CD pipeline execution logs.',
                    },
                ],
                headers: [
                    {
                        key: 'version',
                    },
                    {
                        key: 'environment',
                    },
                    {
                        key: 'date',
                    },
                    {
                        key: 'duration',
                    },
                    {
                        key: 'status',
                    },
                ],
                entries: [
                    {
                        data: {
                            version: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: 'v3.14.2',
                            },
                            environment: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Production',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                            date: {
                                type: StructuredRenderSectionType.text,
                                text: '2026-02-28',
                            },
                            duration: {
                                type: StructuredRenderSectionType.text,
                                text: '4m 22s',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Success',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                        },
                    },
                    {
                        data: {
                            version: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: 'v3.14.1',
                            },
                            environment: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Production',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                            date: {
                                type: StructuredRenderSectionType.text,
                                text: '2026-02-25',
                            },
                            duration: {
                                type: StructuredRenderSectionType.text,
                                text: '3m 58s',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Success',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                        },
                    },
                    {
                        data: {
                            version: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: 'v3.14.0',
                            },
                            environment: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Staging',
                                color: {
                                    variant: ViraColorVariant.Warning,
                                },
                            },
                            date: {
                                type: StructuredRenderSectionType.text,
                                text: '2026-02-24',
                            },
                            duration: {
                                type: StructuredRenderSectionType.text,
                                text: '5m 01s',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Rolled Back',
                                color: {
                                    variant: ViraColorVariant.Danger,
                                },
                            },
                        },
                    },
                    {
                        data: {
                            version: {
                                type: StructuredRenderSectionType.inlineCode,
                                code: 'v3.13.9',
                            },
                            environment: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Production',
                                color: {
                                    variant: ViraColorVariant.Positive,
                                },
                            },
                            date: {
                                type: StructuredRenderSectionType.text,
                                text: '2026-02-20',
                            },
                            duration: {
                                type: StructuredRenderSectionType.text,
                                text: '4m 10s',
                            },
                            status: {
                                type: StructuredRenderSectionType.tag,
                                text: 'Success',
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
                sectionTitle: 'Pipeline Steps',
                items: [
                    {
                        content: {
                            type: StructuredRenderSectionType.text,
                            text: 'Lint and type check.',
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
                            text: 'Unit and integration tests.',
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
                            text: 'Build production bundle.',
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
                            text: 'Deploy to staging.',
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
                            text: 'E2E smoke tests.',
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
                            text: 'Promote to production.',
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
                type: StructuredRenderSectionType.codeBlock,
                sectionTitle: 'Pipeline Config Snippet',
                syntax: 'yaml',
                code: [
                    'stages:',
                    '  - name: lint',
                    '    command: npm run lint',
                    '  - name: test',
                    '    command: npm test',
                    '    parallel: true',
                    '  - name: build',
                    '    command: npm run build',
                    '  - name: deploy-staging',
                    '    command: deploy --env staging',
                    '  - name: e2e',
                    '    command: npm run test:e2e',
                    '  - name: deploy-production',
                    '    command: deploy --env production',
                    '    requires: [e2e]',
                ].join('\n'),
            },
            {
                type: StructuredRenderSectionType.collapsible,
                sectionTitle: 'Collapsible Details',
                header: 'Rollback Procedure',
                content: [
                    {
                        type: StructuredRenderSectionType.text,
                        text: 'If a deployment fails health checks, the pipeline automatically triggers a rollback to the previous stable version.',
                    },
                    {
                        type: StructuredRenderSectionType.codeBlock,
                        syntax: 'bash',
                        code: [
                            '#!/bin/bash',
                            'deploy rollback --env production --to-version $LAST_STABLE',
                            'notify --channel ops --message "Rollback initiated"',
                        ].join('\n'),
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.collapsible,
                header: 'Environment Variables',
                content: [
                    {
                        type: StructuredRenderSectionType.table,
                        direction: StructuredRenderCellDirection.Horizontal,
                        headers: [
                            {
                                key: 'variable',
                            },
                            {
                                key: 'staging',
                            },
                            {
                                key: 'production',
                            },
                        ],
                        entries: [
                            {
                                data: {
                                    variable: {
                                        type: StructuredRenderSectionType.inlineCode,
                                        code: 'NODE_ENV',
                                    },
                                    staging: {
                                        type: StructuredRenderSectionType.tag,
                                        text: 'staging',
                                        color: {
                                            variant: ViraColorVariant.Warning,
                                        },
                                    },
                                    production: {
                                        type: StructuredRenderSectionType.tag,
                                        text: 'production',
                                        color: {
                                            variant: ViraColorVariant.Positive,
                                        },
                                    },
                                },
                            },
                            {
                                data: {
                                    variable: {
                                        type: StructuredRenderSectionType.inlineCode,
                                        code: 'LOG_LEVEL',
                                    },
                                    staging: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'debug',
                                    },
                                    production: {
                                        type: StructuredRenderSectionType.text,
                                        text: 'warn',
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: StructuredRenderSectionType.collapsible,
                header: 'Post-Deploy Checklist',
                content: [
                    {
                        type: StructuredRenderSectionType.list,
                        items: [
                            {
                                content: {
                                    type: StructuredRenderSectionType.text,
                                    text: 'Verify health check endpoints return 200.',
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
                                    text: 'Confirm error rate stays below 0.1% threshold.',
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
                                    text: 'Monitor p99 latency for 15 minutes.',
                                },
                                icon: {
                                    type: StructuredRenderSectionType.icon,
                                    iconKey: StatusSuccess24Icon.name,
                                    strokeColor: 'green',
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export const multiCardBookPage = defineBookPage({
    title: 'Multi Card',
    parent: cardsBookPage,
    descriptionParagraphs: [
        'Multiple cards rendered together to demonstrate complex multi-card layouts.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'three cards',
            styles: css`
                :host {
                    max-width: 900px;
                }
            `,
            render() {
                return html`
                    <${VirStructuredRender.assign({
                        data: multiCardMock,
                    })}></${VirStructuredRender}>
                `;
            },
        });
    },
});
