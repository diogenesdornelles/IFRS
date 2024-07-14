import { expect, test } from '@jest/globals';
import { Jogador } from './jogador';
import { getRodada } from './getRodada';

const jogadores = [new Jogador('Joao'), new Jogador('Ana'), new Jogador('Mario')];

test('testa nome do jogador', () => {
  const rodada = getRodada(3, jogadores);
  expect(rodada instanceof Array);
  for (let i = 0; i < rodada.length; i++) {
    expect(typeof rodada[i]).toBe('number');
  }
});
