import { Fila } from "./fila";
import { expect, test } from "@jest/globals";

// • Criar uma fila;
let fila = new Fila<string>();

test('• Verificar e imprimir se a fila está vazia;', () => {
  expect(fila.estaVazia()).toBe(true);
});
test('• Adicionar 3 elementos na fila', () => {
  fila.enfileirar('a');
  fila.enfileirar('b');
  fila.enfileirar('c');
  expect(fila.tamanho).toBe(3);
});
test('• Imprimir o tamanho da fila;', () => {
  expect(fila.tamanho).toBe(3);
});
test('• Imprimir todos os elementos da fila;', () => {
  expect(fila.toString()).toBe('[a,b,c]');
});
test('• Imprimir o próximo elemento a ser desenfileirado;', () => {
  expect(fila.proximoElemento()).toBe('a');
});
test('• Adicionar mais 3 elementos na fila;', () => {
  fila.enfileirar('d');
  fila.enfileirar('e');
  fila.enfileirar('f');
  expect(fila.tamanho).toBe(6);
});
test('• Verificar e imprimir se a fila está vazia;', () => {
  expect(fila.estaVazia()).toBe(false);
});
test('• Desenfileirar 1 elemento da fila;', () => {
  expect(fila.desenfileirar()).toBe('a');
});
test('• Imprimir o próximo elemento a ser desenfileirado;', () => {
  expect(fila.proximoElemento()).toBe('b');
});
test('• Desenfileirar 1 elemento da fila;', () => {
  expect(fila.desenfileirar()).toBe('b');
});
test('• Imprimir todos os elementos da fila novamente;', () => {
  expect(fila.toString()).toBe('[c,d,e,f]');
});
test('• Imprimir o tamanho da fila novamente;', () => {
  expect(fila.tamanho).toBe(4);
});
