import {wait} from '@augment-vir/common';
import {css, defineElement, html, listen} from 'element-vir';
import {
    createSizedIcon,
    lucideIcons,
    ViraButton,
    ViraColorVariant,
    ViraEmphasis,
    ViraSize,
} from 'vira';

/**
 * A button that copies the given text to the clipboard when clicked. Briefly changes its label to
 * "Copied" after a successful copy.
 *
 * @category Elements
 */
export const VirCopy = defineElement<{
    text: string;
    /** @default 'Copy' */
    label?: string | undefined;
    /** @default 'Copied' */
    copiedLabel?: string | undefined;
}>()({
    tagName: 'vir-copy',
    styles: css`
        :host {
            display: inline-flex;
        }
    `,
    state: () => {
        return {
            justCopied: false,
            pendingResetCount: 0,
        };
    },
    render({inputs, state, updateState, host}) {
        const defaultLabel = inputs.label || 'Copy';
        const copiedLabel = inputs.copiedLabel || 'Copied';

        return html`
            <${ViraButton.assign({
                text: state.justCopied ? copiedLabel : defaultLabel,
                icon: createSizedIcon(lucideIcons.Copy, 16),
                buttonEmphasis: ViraEmphasis.Subtle,
                color: ViraColorVariant.Neutral,
                buttonSize: ViraSize.Small,
            })}
                ${listen('click', async () => {
                    try {
                        await navigator.clipboard.writeText(inputs.text);
                    } catch {
                        return;
                    }

                    const nextCount = host.instanceState.pendingResetCount + 1;
                    updateState({
                        justCopied: true,
                        pendingResetCount: nextCount,
                    });

                    await wait({
                        seconds: 2,
                    });

                    if (host.instanceState.pendingResetCount === nextCount) {
                        updateState({
                            justCopied: false,
                        });
                    }
                })}
            ></${ViraButton}>
        `;
    },
});
