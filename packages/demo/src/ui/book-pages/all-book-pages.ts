import {type BookPage} from 'element-book';
import {cardsBookPage} from './cards.book.js';
import {blockExpansionBookPage} from './cards/block-expansion.book.js';
import {denseDataBookPage} from './cards/dense-data.book.js';
import {expandAllBookPage} from './cards/expand-all.book.js';
import {fullCardBookPage} from './cards/full-card.book.js';
import {multiCardBookPage} from './cards/multi-card.book.js';
import {noCardStylesBookPage} from './cards/no-card-styles.book.js';
import {examplesBookPage} from './examples.book.js';
import {downloadAndPrintBookPage} from './examples/download-and-print.book.js';
import {exampleCardComparisonBookPage} from './examples/example-card-comparison.book.js';
import {expandableSourceBookPage} from './examples/expandable-source.book.js';
import {sectionsBookPage} from './sections.book.js';
import {codeBlockSectionBookPage} from './sections/code-block.section.book.js';
import {emptySectionBookPage} from './sections/empty.section.book.js';
import {iconSectionBookPage} from './sections/icon.section.book.js';
import {inlineCodeSectionBookPage} from './sections/inline-code.section.book.js';
import {listSectionBookPage} from './sections/list.section.book.js';
import {markdownSectionBookPage} from './sections/markdown.section.book.js';
import {processingSectionBookPage} from './sections/processing.section.book.js';
import {sourceSectionBookPage} from './sections/source.section.book.js';
import {tableSectionBookPage} from './sections/table.section.book.js';
import {tagSectionBookPage} from './sections/tag.section.book.js';
import {textSectionBookPage} from './sections/text.section.book.js';

export const allBookPages: ReadonlyArray<BookPage> = [
    codeBlockSectionBookPage,
    emptySectionBookPage,
    iconSectionBookPage,
    inlineCodeSectionBookPage,
    listSectionBookPage,
    markdownSectionBookPage,
    processingSectionBookPage,
    sourceSectionBookPage,
    tableSectionBookPage,
    tagSectionBookPage,
    textSectionBookPage,

    fullCardBookPage,
    multiCardBookPage,
    denseDataBookPage,
    blockExpansionBookPage,
    expandAllBookPage,
    noCardStylesBookPage,

    downloadAndPrintBookPage,
    exampleCardComparisonBookPage,
    expandableSourceBookPage,

    cardsBookPage,
    examplesBookPage,
    sectionsBookPage,
];
