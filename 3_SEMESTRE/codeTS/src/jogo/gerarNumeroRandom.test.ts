import { expect, test } from '@jest/globals';
import { gerarNumeroRandom } from './gerarNumeroRandom';

test('numero random deve ser menor que 9 e maior que 1', () => {
  for (let i = 0; i < 100; i++) {
    const num = gerarNumeroRandom();
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(9);
  }
});
