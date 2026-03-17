import {css} from 'element-vir';
import {noNativeFormStyles, viraFormCssVars, ViraIcon, viraTheme} from 'vira';

/**
 * Shared CSS styles for source icon buttons, source wrappers, and expandable source panels.
 *
 * @category Internal
 */
export const sourceWrapperStyles = css`
    .source-content-wrapper {
        display: flex;

        & > *:last-child:not(table) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        ${noNativeFormStyles};
        cursor: pointer;
        color: ${viraTheme.colors['vira-grey-foreground-header'].foreground.value};
        padding: 2px;
        border-radius: 4px;

        & ${ViraIcon} {
            display: flex;
        }

        &:hover {
            background-color: ${viraTheme.colors['vira-grey-behind-fg-small-body'].background
                .value};
            color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
        }

        &:active {
            background-color: ${viraTheme.colors['vira-grey-behind-fg-body'].background.value};
            color: ${viraFormCssVars['vira-form-accent-primary-color'].value};
        }
    }

    .source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper.source-icon-wrapper {
        margin-left: auto;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        align-self: top;

        & ${ViraIcon} {
            width: 20px;
            height: 20px;
        }
    }

    @media print {
        .source-icon-wrapper {
            display: none !important;
        }
    }
`;
