import { expect, test } from '@jest/globals';
import { factorial } from './fatorial';

test('factorial must be 120', () => {
  const value = factorial(5);
  expect(value).toBe(120);
});
