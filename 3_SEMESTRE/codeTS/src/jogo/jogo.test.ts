import { Jogador } from './jogador';
import { Jogo } from './jogo';
import { expect, test } from '@jest/globals';

test('testa vencedor Joao com todas as apostas maiores', () => {
  const jogo = new Jogo([
    new Jogador('Joao', [3, 3, 3]),
    new Jogador('Ana', [2, 2, 2]),
    new Jogador('Mario', [1, 1, 1]),
  ]);
  const vencedor = jogo.getResultado();
  expect(vencedor.name).toBe('Joao');
  expect(vencedor.pontuação).toBe(18);
});

test('todas as apostas havendo repetição, primeiro jogador vence', () => {
  const jogo = new Jogo([
    new Jogador('Joao', [1, 1, 1]),
    new Jogador('Ana', [1, 1, 1]),
    new Jogador('Mario', [1, 1, 1]),
  ]);
  const vencedor = jogo.getResultado();
  expect(vencedor.name).toBe('Joao');
});

test('testa vencedor Mario com todas as apostas maiores', () => {
  const jogo = new Jogo([
    new Jogador('Joao', [1, 1, 1]),
    new Jogador('Ana', [2, 2, 2]),
    new Jogador('Mario', [3, 3, 3]),
  ]);
  const vencedor = jogo.getResultado();
  expect(vencedor.name).toBe('Mario');
});

test('testa vencedor ana vence primeira rodada', () => {
  const jogo = new Jogo([
    new Jogador('Joao', [7, 1, 1]),
    new Jogador('Ana', [9, 2, 2]),
    new Jogador('Mario', [5, 3, 3]),
  ]);
  const vencedor = jogo.getResultado();
  expect(vencedor.name).toBe('Ana');
  expect(vencedor.pontuação).toBe(21);
});

test('testa vencedor Mario vence terceira rodada', () => {
  const jogo = new Jogo([
    new Jogador('Joao', [7, 5, 7]),
    new Jogador('Ana', [9, 2, 8]),
    new Jogador('Mario', [5, 3, 9]),
  ]);
  const vencedor = jogo.getResultado();
  expect(vencedor.name).toBe('Mario');
  expect(vencedor.pontuação).toBe(24);
});

test('testa jogo com valores aleatórios (não passar array)', () => {
  const jogo = new Jogo([new Jogador('Joao'), new Jogador('Ana'), new Jogador('Mario')]);
  const vencedor = jogo.getResultado();
  expect(vencedor instanceof Jogador).toBe(true);
});
