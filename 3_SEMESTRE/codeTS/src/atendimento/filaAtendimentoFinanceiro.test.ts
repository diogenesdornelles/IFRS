import { FilaAtendimentoFinanceiro } from "./filaAtendimentoFinanceiro";
import { expect, test } from '@jest/globals';
import { Cliente } from "./cliente";

let fila = new FilaAtendimentoFinanceiro()

test('verifica fila vazia', () => {
  expect(fila.filaAtendimentoVazia()).toBe(true);
});

test('inserir tres clientes na fila', () => {
  fila.fornecerSenha(new Cliente('Luiz'))
  fila.fornecerSenha(new Cliente('Ana'))
  fila.fornecerSenha(new Cliente('Mario'))
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Luiz, senha: F001},Cliente{nome: Ana, senha: F002},Cliente{nome: Mario, senha: F003}]');
});
test('realizar um atentimento', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Luiz, senha: F001}');
});

test('realizar mais um atentimento', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Ana, senha: F002}');
});

test('inserir mais tres clientes na fila', () => {
  fila.fornecerSenha(new Cliente('Augusto'))
  fila.fornecerSenha(new Cliente('Joao'))
  fila.fornecerSenha(new Cliente('Paula'))
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Mario, senha: F003},Cliente{nome: Augusto, senha: F004},Cliente{nome: Joao, senha: F005},Cliente{nome: Paula, senha: F006}]');
});

test('realizar mais dois atentimentos', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Mario, senha: F003}');
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Augusto, senha: F004}');
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Joao, senha: F005},Cliente{nome: Paula, senha: F006}]');
  expect(fila.tamanho).toBe(2);
});