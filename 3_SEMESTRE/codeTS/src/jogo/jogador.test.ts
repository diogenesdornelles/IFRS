import { expect, test } from '@jest/globals';
import { Jogador } from './jogador';

const joao = new Jogador('Joao');

test('testa nome do jogador', () => {
  expect(joao.name).toBe('Joao');
});

test('testa tamanho pilha do jogador', () => {
  expect(joao.pilha.getTamanho()).toBe(3);
});

test('testa fazer uma jogada', () => {
  joao.joga();
  expect(joao.pilha.getTamanho()).toBe(2);
});

test('testa mais jogadas', () => {
  joao.joga();
  joao.joga();
  expect(joao.joga()).toBe(-1);
});

test('testa adiciona pontuação', () => {
  joao.addPontuação(10);
  expect(joao.pontuação).toBe(10);
});
