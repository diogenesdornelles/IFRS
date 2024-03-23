import { expect, test } from '@jest/globals';
import { haIguais } from './haIguais';

test('testa soma de rodada', () => {
  let resultado = haIguais([1, 2, 3]);
  expect(resultado).toBeFalsy();
});

test('testa soma de rodada', () => {
  let resultado = haIguais([1, 1, 3]);
  expect(resultado).toBeTruthy();
});
