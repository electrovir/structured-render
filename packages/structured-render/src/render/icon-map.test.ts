import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {LucideCircleAlertIcon, LucideStarIcon} from 'vira';
import {mapIconsByName} from './icon-map.js';

describe(mapIconsByName.name, () => {
    it('keys icons by their names', () => {
        assert.deepEquals(
            mapIconsByName({
                LucideCircleAlertIcon,
                LucideStarIcon,
            }),
            {
                CircleAlert: LucideCircleAlertIcon,
                Star: LucideStarIcon,
            },
        );
    });
    it('handles an empty object', () => {
        assert.deepEquals(mapIconsByName({}), {});
    });
});
