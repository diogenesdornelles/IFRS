import { getVencedor } from './getVencedor';
import { Jogador } from './jogador';
import { expect, test } from '@jest/globals';

const jogadorA = new Jogador('Joao');
const jogadorB = new Jogador('Ana');
const jogadorC = new Jogador('Mario');

jogadorA.addPontuação(2);
jogadorB.addPontuação(3);
jogadorC.addPontuação(4);

test('testa tamanho pilha do jogador', () => {
  const vencedor = getVencedor([jogadorA, jogadorB, jogadorC]);
  expect(vencedor.name).toBe('Mario');
});
