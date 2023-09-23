import { Agencia, Conta } from './exercicio9';

// Atividade - Exercícios Fixação - Apostila K19 - Página 47Tarefa

// exercicio 30
// TestaMetodoTransfere.ts
// import {Agencia} from './Agencia';
// import {Conta} from './Conta';

const agenciaOrigem = new Agencia(178);
const agenciaDestino = new Agencia(871);
const contaOrigem = new Conta(123, 1000, 500, agenciaOrigem);
const contaDestino = new Conta(321, 2000, 1500, agenciaDestino);

contaDestino.imprimirExtrato();
contaOrigem.imprimirExtrato();

contaOrigem.transferir(contaDestino, 250);

contaDestino.imprimirExtrato();
contaOrigem.imprimirExtrato();
