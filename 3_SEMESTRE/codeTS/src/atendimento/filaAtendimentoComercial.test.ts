import { FilaAtendimentoComercial } from './filaAtendimentoComercial';
import { Cliente } from './cliente';
import { expect, test } from '@jest/globals';

const fila = new FilaAtendimentoComercial();

test('verifica fila vazia', () => {
  expect(fila.filaAtendimentoVazia()).toBe(true);
});

test('inserir tres clientes na fila', () => {
  fila.fornecerSenha(new Cliente('Luiz'));
  fila.fornecerSenha(new Cliente('Ana'));
  fila.fornecerSenha(new Cliente('Mario'));
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Luiz, senha: C001},Cliente{nome: Ana, senha: C002},Cliente{nome: Mario, senha: C003}]',
  );
});

test('realizar um atentimento', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Luiz, senha: C001}');
});

test('realizar mais um atentimento', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Ana, senha: C002}');
});

test('inserir mais tres clientes na fila', () => {
  fila.fornecerSenha(new Cliente('Augusto'));
  fila.fornecerSenha(new Cliente('Joao'));
  fila.fornecerSenha(new Cliente('Paula'));
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Mario, senha: C003},Cliente{nome: Augusto, senha: C004},Cliente{nome: Joao, senha: C005},Cliente{nome: Paula, senha: C006}]',
  );
});

test('realizar mais dois atentimentos', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Mario, senha: C003}');
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Augusto, senha: C004}');
  expect(fila.atualizarFilaAtendimento()).toBe(
    '[Cliente{nome: Joao, senha: C005},Cliente{nome: Paula, senha: C006}]',
  );
  expect(fila.tamanho).toBe(2);
});
