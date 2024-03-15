import {expect, test} from '@jest/globals';
import { factorial } from './fatorial';

test("factorial must be 120",
    () => {
        let value = factorial(5);
        expect(value).toBe(120);
})