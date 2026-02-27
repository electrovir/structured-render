import {assertWrap, check} from '@augment-vir/assert';

/** @returns Whether the new styles were set or not. */
export function insertStyleSheet({
    newStyles,
    oldStyles,
    shadowRoot,
    maintainFirstStylesheet,
}: {
    newStyles: string;
    oldStyles: string;
    shadowRoot: ShadowRoot;
    maintainFirstStylesheet: boolean;
}): boolean {
    if (newStyles !== oldStyles) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(newStyles);
        const styleSheets = [
            maintainFirstStylesheet
                ? assertWrap.isDefined(shadowRoot.adoptedStyleSheets[0])
                : undefined,
            sheet,
        ].filter(check.isTruthy);

        shadowRoot.adoptedStyleSheets = styleSheets;
        return true;
    }

    return false;
}
