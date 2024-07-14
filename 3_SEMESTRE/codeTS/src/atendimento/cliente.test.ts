import { Cliente } from './cliente';
import { expect, test } from '@jest/globals';

const cliente = new Cliente('Maria');

test('verifica cliente', () => {
  expect(cliente.toString()).toBe('Cliente{nome: Maria, senha: null}');
});
