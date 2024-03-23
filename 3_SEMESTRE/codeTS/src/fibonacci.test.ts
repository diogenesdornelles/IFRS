import { fibonacci } from './fibonacci';
import { expect, test } from '@jest/globals';

test('fibonacci must be 8', () => {
  const value = fibonacci(6);
  expect(value).toBe(8);
});
