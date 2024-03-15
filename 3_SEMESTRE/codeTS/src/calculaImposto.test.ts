import { calculaImposto } from './calculaImposto';
import {expect, test} from '@jest/globals';

test("tax must be 20.00",
    () => {
        let tax = calculaImposto(100);
        expect(tax).toBe(20);
})

