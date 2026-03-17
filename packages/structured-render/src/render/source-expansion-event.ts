import {defineTypedEvent} from 'element-vir';

/**
 * This event is emitted when source sections have been expanded and can be used to track which
 * sections are expanded.
 *
 * @category Internal
 */
export const SourceExpansionEvent = defineTypedEvent<
    Readonly<{
        expanded: boolean;
        key: string;
    }>
>()('source-expansion');
