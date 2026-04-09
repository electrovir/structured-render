import {log} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {downloadPdf} from 'structured-render';
import {LoaderAnimated24Icon, StatusFailure24Icon, ViraButton} from 'vira';
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
                            ? StatusFailure24Icon
                            : state.isLoading
                              ? LoaderAnimated24Icon
                              : undefined,
                    })}
                        ${listen('click', async () => {
                            updateState({
                                isLoading: true,
                            });
                            try {
                                await downloadPdf(multiCardMock, 'structured-render-download.pdf');
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
