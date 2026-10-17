import {log} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {downloadPdf} from 'structured-render';
import {createSizedIcon, LoaderAnimated24Icon, LucideCircleXIcon, ViraButton} from 'vira';
import {demoIcons} from '../../demo-icons.js';
import {multiCardMock} from '../cards/multi-card.book.js';
import {examplesBookPage} from '../examples.book.js';

export const downloadBookPage = defineBookPage({
    title: 'Download',
    parent: examplesBookPage,
    descriptionParagraphs: [
        'Demonstrates downloading structured render data as a PDF.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'download',
            state() {
                return {
                    isLoading: false,
                    isError: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraButton.assign({
                        text: 'Download',
                        isDisabled: state.isLoading,
                        icon: state.isError
                            ? createSizedIcon(LucideCircleXIcon, 24)
                            : state.isLoading
                              ? LoaderAnimated24Icon
                              : undefined,
                    })}
                        ${listen('click', async () => {
                            updateState({
                                isLoading: true,
                            });
                            try {
                                await downloadPdf(multiCardMock, 'structured-render-download.pdf', {
                                    icons: demoIcons,
                                });
                            } catch (error) {
                                log.error('Failed to download PDF', error);
                                updateState({
                                    isError: true,
                                });
                            } finally {
                                updateState({
                                    isLoading: false,
                                });
                            }
                        })}
                    ></${ViraButton}>
                `;
            },
        });
    },
});
