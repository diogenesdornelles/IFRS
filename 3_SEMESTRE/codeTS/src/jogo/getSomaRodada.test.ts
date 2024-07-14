import { expect, test } from '@jest/globals';
import { getSomaRodada } from './getSomaRodada';

test('testa soma de rodada', () => {
  const resultado = getSomaRodada([1, 2, 3]);
  expect(resultado).toBe(6);
});
