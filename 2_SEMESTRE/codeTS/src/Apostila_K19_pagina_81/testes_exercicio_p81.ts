/* eslint-disable @typescript-eslint/ban-ts-comment */

// exercicio 3

import { Cliente, Agencia, Conta } from './classes_exercicios_p81';

const agenciaA = new Agencia(12345, 'Bento Gonçalves');

const titularA = new Cliente('Jão', 'da Silva', '00580678094');

const contaA = new Conta(123, 'CC', agenciaA, titularA, 1000, 1000);

const agenciaB = new Agencia(54321, 'POA');

const titularB = new Cliente('Ana', 'da Silva', '59874563215');

const contaB = new Conta(568, 'CC', agenciaB, titularB, 2000, 500);

const titularC = new Cliente('Cris', 'Bumsted', '74583654198');

console.log('------------------------------------------------');
contaA.imprimirExtrato();
console.log('------------------------------------------------');
contaB.imprimirExtrato();
console.log('------------------------------------------------');
contaA.sacar(150);
console.log('------------------------------------------------');
contaB.depositar(300);
console.log('------------------------------------------------');
contaB.transferir(280, contaA);
console.log('------------------------------------------------');
contaA.limite = 750;
try {
  // @ts-ignore
  contaB.saldo = 1000000000;
} catch (e) {
  console.log('Não é possível alterar saldo diretamente: ', e.message);
}
console.log('------------------------------------------------');
contaA.imprimirExtrato();
console.log('------------------------------------------------');
contaB.imprimirExtrato();
console.log('------------------------------------------------');

contaA.cliente = titularC;
console.log(contaA);
console.log('------------------------------------------------');

contaA.agencia = agenciaB;
console.log(contaA);
console.log('------------------------------------------------');
