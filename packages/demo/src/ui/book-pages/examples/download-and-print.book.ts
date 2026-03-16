import {log} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {html, listen} from 'element-vir';
import {OutputPdfType, printPdf, renderToBrowserPdf} from 'structured-render';
import {LoaderAnimated24Icon, StatusFailure24Icon, ViraButton} from 'vira';
import {multiCardMock} from '../cards/multi-card.book.js';
import {examplesBookPage} from '../examples.book.js';

export const downloadAndPrintBookPage = defineBookPage({
    title: 'Download and Print',
    parent: examplesBookPage,
    descriptionParagraphs: [
        'Demonstrates downloading and printing structured render data as a PDF.',
    ],
    defineExamples({defineExample}) {
        defineExample({
            title: 'print',
            state() {
                return {
                    isLoading: false,
                    isError: false,
                };
            },
            render({state, updateState}) {
                return html`
                    <${ViraButton.assign({
                        text: 'Print',
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
                                await printPdf(multiCardMock, {
                                    fileName: 'structured-render-print',
                                });
                            } catch (error) {
                                log.error('Failed to print PDF', error);
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
                                await renderToBrowserPdf(multiCardMock, {
                                    fileName: 'structured-render-download',
                                    pdfOutputType: OutputPdfType.Download,
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
