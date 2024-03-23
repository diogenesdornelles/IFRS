import { expect, test } from '@jest/globals';
import PilhaDePares from './pares';

test('adicionar impar, pilha de pares deve ser vazia', () => {
  const pares = new PilhaDePares();
  expect(pares.add(1)).toBe('A pilha está vazia');
});

test('números de pares deve ser 2', () => {
  const pares = new PilhaDePares();
  pares.add(2);
  pares.add(4);
  expect(pares.getResultado()).toBe('4-2-');
});

test('números de pares deve ser 3', () => {
  const pares = new PilhaDePares();
  pares.add(2);
  pares.add(4);
  pares.add(6);
  expect(pares.getResultado()).toBe('6-4-2-');
});

test('números de pares deve ser 2, retirando 4', () => {
  const pares = new PilhaDePares();
  pares.add(2);
  pares.add(4);
  pares.add(1);
  pares.add(6);
  expect(pares.getResultado()).toBe('6-2-');
});

test('adicionar 3 pares e 3 impares, pilha de pares deve ser vazia', () => {
  const pares = new PilhaDePares();
  pares.add(2);
  pares.add(4);
  pares.add(6);
  pares.add(1);
  pares.add(1);
  pares.add(1);
  expect(pares.getResultado()).toBe('A pilha está vazia');
});
