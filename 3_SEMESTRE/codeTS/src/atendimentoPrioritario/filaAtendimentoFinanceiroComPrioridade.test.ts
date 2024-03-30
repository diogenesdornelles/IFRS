import { FilaAtendimentoFinanceiroComPrioridade } from "./filaAtendimentoFinanceiroComPrioridade";
import { expect, test } from '@jest/globals';
import { Cliente } from "./cliente";

let fila = new FilaAtendimentoFinanceiroComPrioridade();

let ana = new Cliente('Ana', 40, false, false);
let mario = new Cliente('Mario', 67, false, false);
let joao = new Cliente('Joao', 29, false, false);
let silvia = new Cliente('Silvia', 32, true, false);
let paulo = new Cliente('Paulo', 53, false, false);
let augusto = new Cliente('Augusto', 23, false, true);

test('verifica fila vazia', () => {
  expect(fila.filaAtendimentoVazia()).toBe(true);
});

test('inserir dois clientes na fila, sendo o último prioritário', () => {
  fila.fornecerSenha(ana)
  fila.fornecerSenha(mario)
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Mario, senha: F002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false}]');
});

test('inserir um cliente na fila, sendo prioritário', () => {
  fila.fornecerSenha(silvia)
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Mario, senha: F002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false}]');
});

test('inserir um cliente na fila, não prioritário', () => {
  fila.fornecerSenha(joao)
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Mario, senha: F002, idade: 67, gravida: false, pcd: false, prioritario: true},Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: F004, idade: 29, gravida: false, pcd: false, prioritario: false}]');
});

test('atender um cliente', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Mario, senha: F002, idade: 67, gravida: false, pcd: false, prioritario: true}');
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: F004, idade: 29, gravida: false, pcd: false, prioritario: false}]');
});

test('inserir um cliente na fila, não prioritário', () => {
  fila.fornecerSenha(paulo)
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: F004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: F005, idade: 53, gravida: false, pcd: false, prioritario: false}]');
});

test('inserir um cliente na fila, prioritário, após o primeiro prioritário', () => {
  fila.fornecerSenha(augusto)
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true},Cliente{nome: Augusto, senha: F006, idade: 23, gravida: false, pcd: true, prioritario: true},Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false},Cliente{nome: Joao, senha: F004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: F005, idade: 53, gravida: false, pcd: false, prioritario: false}]');
});

test('atender tres clientes', () => {
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Silvia, senha: F003, idade: 32, gravida: true, pcd: false, prioritario: true}');
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Augusto, senha: F006, idade: 23, gravida: false, pcd: true, prioritario: true}');
  expect(fila.realizarAtendimento()).toBe('Cliente{nome: Ana, senha: F001, idade: 40, gravida: false, pcd: false, prioritario: false}');
  expect(fila.atualizarFilaAtendimento()).toBe('[Cliente{nome: Joao, senha: F004, idade: 29, gravida: false, pcd: false, prioritario: false},Cliente{nome: Paulo, senha: F005, idade: 53, gravida: false, pcd: false, prioritario: false}]');
});
