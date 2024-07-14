import { FilaAtendimentoComercialComPrioridade } from './filaAtendimentoComercialComPrioridade';
import { Cliente } from './cliente';
import { expect, test } from '@jest/globals';

const fila = new FilaAtendimentoComercialComPrioridade();
const ana = new Cliente('Ana', 40, false, false);
const mario = new Cliente('Mario', 67, false, false);
const joao = new Cliente('Joao', 29, false, false);
const silvia = new Cliente('Silvia', 32, true, false);
const paulo = new Cliente('Paulo', 53, false, false);
const augusto = new Cliente('Augusto', 23, false, true);

test('verifica fila vazia', () => {
  expect(fila.filaAtendimentoVazia()).toBe(true);
});

test('inserir dois clientes na fila, sendo o último prioritário', () => {
  fila.fornecerSenha(ana);
  fila.fornecerSenha(mario);
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Mario, senha: C002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('inserir um cliente na fila, sendo prioritário', () => {
  fila.fornecerSenha(silvia);
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Mario, senha: C002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('inserir um cliente na fila, não prioritário', () => {
  fila.fornecerSenha(joao);
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Mario, senha: C002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: C004, idade: 29, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('atender um cliente', () => {
  expect(fila.realizarAtendimento()).toBe(
    'Cliente{nome: Mario, senha: C002, idade: 67, gravida: false, pcd: false, prioritario: true}',
  );
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: C004, idade: 29, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('inserir um cliente na fila, não prioritário', () => {
  fila.fornecerSenha(paulo);
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: C004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: C005, idade: 53, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('inserir um cliente na fila, prioritário, após o primeiro prioritário', () => {
  fila.fornecerSenha(augusto);
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Augusto, senha: C006, idade: 23, gravida: false, pcd: true, prioritario: true},Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: C004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: C005, idade: 53, gravida: false, pcd: false, prioritario: false}]',
  );
});

test('atender tres clientes', () => {
  expect(fila.realizarAtendimento()).toBe(
    'Cliente{nome: Silvia, senha: C003, idade: 32, gravida: true, pcd: false, prioritario: true}',
  );
  expect(fila.realizarAtendimento()).toBe(
    'Cliente{nome: Augusto, senha: C006, idade: 23, gravida: false, pcd: true, prioritario: true}',
  );
  expect(fila.realizarAtendimento()).toBe(
    'Cliente{nome: Ana, senha: C001, idade: 40, gravida: false, pcd: false, prioritario: false}',
  );
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Joao, senha: C004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: C005, idade: 53, gravida: false, pcd: false, prioritario: false}]',
  );
});
