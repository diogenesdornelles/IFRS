import { expect, test } from '@jest/globals';
import { getSomaRodada } from './getSomaRodada';

test('testa soma de rodada', () => {
  let resultado = getSomaRodada([1, 2, 3]);
  expect(resultado).toBe(6);
});
