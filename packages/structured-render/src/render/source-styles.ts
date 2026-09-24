import {css} from 'element-vir';
import {noUserSelect, ViraIcon} from 'vira';

/**
 * Shared CSS styles for source icon buttons, source wrappers, and expandable source panels.
 *
 * @category Internal
 */
export const sourceWrapperStyles = css`
    .source-content-wrapper {
        display: flex;

        & > *:not(table):has(+ .source-icon-wrapper) {
            flex-grow: 1;
        }
    }

    .collapsible-source-wrapper {
        border: none;

        &:not(.expanded-source) {
            ${noUserSelect}
        }
    }

    .expanded-source {
        margin: 8px 0 !important;
    }

    .source-icon-button {
        opacity: 0.5;

        &:hover {
            opacity: 1;
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
