import { Pilha } from './pilha';
import { expect, test } from '@jest/globals';

// Criar um pilha com capacidade para 5 elementos;
// 1) Verificar e imprimir se a pilha está vazia;
// 2) Adicionar 3 elementos na pilha;
// 3) Imprimir o tamanho da pilha;
// 4) Imprimir todos os elementos da pilha;
// 5) Imprimir o elemento do topo da pilha;
// 6) Adicionar mais 3 elementos na pilha;
// 7) Verificar e imprimir se a pilha está vazia;
// 8) Imprimir o elemento do topo da pilha;
// 9) Desempilhar 1 elemento da pilha;
// 10) Imprimir o elemento do topo da pilha;
// 11) Desempilhar 1 elemento da pilha;
// 12) Imprimir todos os elementos da pilha novamente;
// 13) Imprimir o tamanho da pilha novamente;

const pilha = new Pilha<string>();

test('1) Verificar e imprimir se a pilha está vazia', () => {
  expect(pilha.getTamanho()).toBe(0);
  expect(pilha.estavazia()).toBe(true);
});

test('a) testa desempilhar se está vazia', () => {
  expect(pilha.desempilhar()).toBe(undefined);
});

test('2) Adicionar 3 elementos na pilha', () => {
  pilha.empilhar('A');
  pilha.empilhar('B');
  pilha.empilhar('C');
  expect(pilha.getTamanho()).toBe(3);
});

test('3) Imprimir o tamanho da pilha', () => {
  pilha.empilhar('D');
  pilha.empilhar('E');
  pilha.empilhar('F');
  expect(pilha.getTamanho()).toBe(6);
});

test('4) Imprimir todos os elementos da pilha', () => {
  expect(pilha.toString()).toBe('[A,B,C,D,E,F]');
});

test('5) Imprimir o elemento do topo da pilha', () => {
  expect(pilha.topo()).toBe('F');
});

test('6) Adicionar mais 3 elementos na pilha', () => {
  pilha.empilhar('G');
  pilha.empilhar('H');
  pilha.empilhar('I');
  expect(pilha.getTamanho()).toBe(9);
});

test('7) Verificar e imprimir se a pilha está vazia', () => {
  expect(pilha.estavazia()).toBe(false);
});

test('8) Imprimir o elemento do topo da pilha', () => {
  expect(pilha.topo()).toBe('I');
});

test('9) Desempilhar 1 elemento da pilha', () => {
  const removed = pilha.desempilhar();
  expect(pilha.getTamanho()).toBe(8);
  expect(removed).toBe('I');
});

test('10) Imprimir o elemento do topo da pilha', () => {
  expect(pilha.topo()).toBe('H');
});

test('11) Desempilhar 1 elemento da pilha', () => {
  const removed = pilha.desempilhar();
  expect(pilha.getTamanho()).toBe(7);
  expect(removed).toBe('H');
});

test('12) Imprimir todos os elementos da pilha', () => {
  expect(pilha.toString()).toBe('[A,B,C,D,E,F,G]');
});
test('13) Imprimir o tamanho da pilha novamente', () => {
  expect(pilha.getTamanho()).toBe(7);
});
