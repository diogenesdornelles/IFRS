import { Cliente } from './cliente';
import { expect, test } from '@jest/globals';

const cliente = new Cliente('Maria', 40, true, false);

test('verifica cliente prioritário', () => {
  expect(cliente.toString()).toBe(
    'Cliente{nome: Maria, senha: null, idade: 40, gravida: true, pcd: false, prioritario: false}',
  );
});
