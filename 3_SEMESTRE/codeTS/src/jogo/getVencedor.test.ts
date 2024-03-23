import { getVencedor } from './getVencedor';
import { Jogador } from './jogador';
import { expect, test } from '@jest/globals';

let jogadorA = new Jogador('Joao');
let jogadorB = new Jogador('Ana');
let jogadorC = new Jogador('Mario');

jogadorA.addPontuação(2);
jogadorB.addPontuação(3);
jogadorC.addPontuação(4);

test('testa tamanho pilha do jogador', () => {
  let vencedor = getVencedor([jogadorA, jogadorB, jogadorC]);
  expect(vencedor.name).toBe('Mario');
});
