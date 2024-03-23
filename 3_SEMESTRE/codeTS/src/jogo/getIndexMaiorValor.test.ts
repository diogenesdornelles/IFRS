import { expect, test } from '@jest/globals';
import { getIndexMaiorValor } from './getIndexMaiorValor';

test('testa nome do jogador', () => {
  expect(getIndexMaiorValor([1, 8, 2])).toBe(1);
  expect(getIndexMaiorValor([1, 8, 10])).toBe(2);
  expect(getIndexMaiorValor([12, 8, 10])).toBe(0);
});
