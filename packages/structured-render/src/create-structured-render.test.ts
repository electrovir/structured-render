import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement, html} from 'element-vir';
import {checkValidShape} from 'object-shape-tester';
import {LucideStarIcon, ViraIcon} from 'vira';
import {createStructuredRender} from './create-structured-render.js';
import {mapIconsByName} from './render/icon-map.js';
import {type StructuredRenderIcon} from './structured-render-data/sections/icon.section.js';
import {StructuredRenderCellDirection} from './structured-render-data/sections/table.section.js';
import {
    structuredRenderDataShape,
    type StructuredRenderData,
} from './structured-render-data/structured-render-data.js';
import {StructuredRenderSectionType} from './structured-render-data/structured-render-section.js';

function createTableData(iconKey: string): StructuredRenderData {
    return [
        {
            sections: [
                {
                    type: StructuredRenderSectionType.table,
                    direction: StructuredRenderCellDirection.Horizontal,
                    headers: [
                        {
                            key: 'items',
                        },
                    ],
                    entries: [
                        {
                            data: {
                                items: {
                                    type: StructuredRenderSectionType.list,
                                    items: [
                                        {
                                            icon: {
                                                type: StructuredRenderSectionType.icon,
                                                iconKey,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
    ];
}

describe(createStructuredRender.name, () => {
    const shapes = createStructuredRender(
        mapIconsByName({
            LucideStarIcon,
        }),
    );

    it('accepts known icon keys nested inside a table', () => {
        assert.isTrue(checkValidShape(createTableData(LucideStarIcon.name), shapes.data));
    });

    it('rejects unknown icon keys nested inside a table', () => {
        assert.isFalse(checkValidShape(createTableData('Missing'), shapes.data));
        assert.isTrue(checkValidShape(createTableData('Missing'), structuredRenderDataShape));
    });

    it('includes narrowed per-section shapes', () => {
        assert.isFalse(
            checkValidShape(
                {
                    type: StructuredRenderSectionType.text,
                    icon: {
                        type: StructuredRenderSectionType.icon,
                        iconKey: 'Missing',
                    },
                },
                shapes.text,
            ),
        );
    });

    it('types icon keys as the icons object keys', () => {
        assert
            .tsType<(typeof shapes.card.runtimeType)['cardTitleIcon']>()
            .equals<StructuredRenderIcon<'Star'> | null | undefined>();
    });

    it('rejects all icons when given no icons', () => {
        const emptyShapes = createStructuredRender({});

        assert.isFalse(checkValidShape(createTableData(LucideStarIcon.name), emptyShapes.data));
        assert.isTrue(
            checkValidShape(
                [
                    {
                        sections: [
                            {
                                type: StructuredRenderSectionType.text,
                                text: 'no icons',
                            },
                        ],
                    },
                ],
                emptyShapes.data,
            ),
        );
    });

    it('renders with the bound icons', async () => {
        const wrapper = await testWeb.renderElement(
            defineElement()({
                tagName: 'test-bound-vir-structured-render',
                render() {
                    return html`
                        <${shapes.VirStructuredRender.assign({
                            data: {
                                type: StructuredRenderSectionType.icon,
                                iconKey: LucideStarIcon.name,
                            },
                        })}></${shapes.VirStructuredRender}>
                    `;
                },
            }),
        );

        await waitUntil.instanceOf(ViraIcon, () => {
            return wrapper.shadowRoot
                .querySelector(shapes.VirStructuredRender.tagName)
                ?.shadowRoot?.querySelector(ViraIcon.tagName);
        });
    });

    it('rejects unknown icon keys in bound element data', () => {
        shapes.VirStructuredRender.assign({
            // @ts-expect-error: `Missing` is not a bound icon key.
            data: {
                type: StructuredRenderSectionType.icon,
                iconKey: 'Missing',
            },
        });
    });
});
