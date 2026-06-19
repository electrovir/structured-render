import {type MaybeArray} from '@augment-vir/common';
import {type CSSResult} from 'element-vir';
import {
    type ViraIconSvg,
    allIconsByName,
    DocumentSearch24Icon,
    EyeOpen24Icon,
    LoaderAnimated24Icon,
} from 'vira';
import {type StructuredRenderCard} from '../structured-render-data/structured-render-card.js';
import {type StructuredRenderData} from '../structured-render-data/structured-render-data.js';
import {type StructuredRenderSection} from '../structured-render-data/structured-render-section.js';
import {defaultMarkdownRenderStyles} from './render-markdown-styles.js';
import {type TableSortState} from './table-sort-event.js';

/**
 * All acceptable inputs for Structured Render rendering.
 *
 * @category Internal
 */
export type RenderInput = MaybeArray<
    StructuredRenderData | StructuredRenderCard | StructuredRenderSection | null | undefined
>;

/**
 * Base options for Structured Render rendering.
 *
 * @category Internal
 */
export type RenderOptions = Readonly<{
    /**
     * Override the default icon set. The default icon set is provided by
     * [Vira](https://www.npmjs.com/package/vira).
     */
    icons: Readonly<{[IconKey in string]: ViraIconSvg}>;
    /**
     * The prefix used when rendering a source.
     *
     * @default 'Source'
     */
    sourceString: string;
    /**
     * The prefix used when rendering multiple sources.
     *
     * @default 'Sources'
     */
    pluralSourcesString: string;
    /**
     * If `true`, all sources are hidden from the rendered output.
     *
     * @default false
     */
    hideSources: boolean;
}>;

/**
 * Default base option values for Structured Render rendering.
 *
 * @category Internal
 */
export const defaultRenderOptions: Readonly<RenderOptions> = {
    icons: allIconsByName,
    sourceString: 'Source',
    pluralSourcesString: 'Sources',
    hideSources: false,
};

/**
 * Option values for Structured Render rendering to Markdown.
 *
 * @category Internal
 */
export type RenderMarkdownOptions = RenderOptions & {
    /**
     * CSS styles for the rendering.
     *
     * @default
     */
    styles: string | CSSResult;
};

/**
 * Default option values for Structured Render rendering to Markdown.
 *
 * @category Internal
 */
export const defaultRenderMarkdownOptions: Readonly<RenderMarkdownOptions> = {
    ...defaultRenderOptions,
    styles: defaultMarkdownRenderStyles,
};

/**
 * Option values for Structured Render rendering to HTML.
 *
 * @category Internal
 */
export type RenderHtmlOptions = RenderOptions & {
    /** Currently expanded sections and sources. */
    currentlyExpanded: {[SectionKey in string]: boolean};
    /** Current sort state for each table, keyed by the table's key chain. */
    tableSortStates: {[TableKey in string]: TableSortState | undefined};
    /**
     * The string to use within the processing section.
     *
     * @default 'Processing'
     */
    processingString: string;
    /**
     * The icon shown for source expansion.
     *
     * @default DocumentSearch24Icon
     */
    sourceIcon: ViraIconSvg;
    /**
     * The icon shown next to processing text.
     *
     * @default LoaderAnimated24Icon
     */
    processingIcon: ViraIconSvg;
    /**
     * The icon used for "view on page" buttons.
     *
     * @default EyeOpen24Icon
     */
    viewOnPageIcon: ViraIconSvg;
    /**
     * If `true`, all sources will be expanded when printing.
     *
     * @default false
     */
    expandSourcesOnPrint: boolean;
    /**
     * If `true`, phone-size compatible rendering will be used where supported.
     *
     * @default false
     */
    isPhoneSize: boolean;
    /**
     * If `true`, sources will be rendered inside a drawer instead of a collapsible wrapper.
     *
     * @default false
     */
    useDrawerForSources: boolean;
    /**
     * If `true`, the view-on-page eyeball buttons are not rendered.
     *
     * @default false
     */
    hideViewOnPageButtons: boolean;
    /**
     * Create a string for the source "view on page" buttons.
     *
     * This will only be used if `hideViewOnPageButtons` is not set to `true`.
     */
    createViewOnPageString(this: void, pageNumber: number): string;
    /** CSS styles for rendering internal Markdown. */
    markdownStyles: string | CSSResult;
    /**
     * If set to `true`, all cards will start out expanded.
     *
     * @default false
     */
    expandAllCards: boolean;
    /**
     * If set to `true`, all cards will be expanded and expansion toggling will be disabled.
     *
     * @default false
     */
    blockCardExpansion: boolean;
    /**
     * If set to `true`, the first card will start out expanded.
     *
     * @default false
     */
    expandFirstCard: boolean;
    /**
     * If `true`, cards are wrapped in collapsible card components with borders and expansion
     * controls. If `false`, card sections are rendered without card wrapper styling.
     *
     * @default false
     */
    useCardStyles: boolean;
    /**
     * If `true`, card titles (and their icons) are not rendered, even when set on the card data.
     *
     * @default false
     */
    hideCardTitles: boolean;
};

/**
 * Default option values for Structured Render rendering to HTML.
 *
 * @category Internal
 */
export const defaultRenderHtmlOptions: Readonly<RenderHtmlOptions> = {
    ...defaultRenderOptions,
    processingString: 'Processing',
    currentlyExpanded: {},
    tableSortStates: {},
    sourceIcon: DocumentSearch24Icon,
    viewOnPageIcon: EyeOpen24Icon,
    processingIcon: LoaderAnimated24Icon,
    expandSourcesOnPrint: false,
    hideViewOnPageButtons: false,
    isPhoneSize: false,
    useDrawerForSources: false,
    markdownStyles: defaultMarkdownRenderStyles,
    createViewOnPageString(pageNumber) {
        return `View on page ${pageNumber}`;
    },
    expandAllCards: false,
    blockCardExpansion: false,
    expandFirstCard: false,
    useCardStyles: false,
    hideCardTitles: false,
};
