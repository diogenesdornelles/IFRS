// Atividade - Exercícios Fixação - Apostila K19 - Página 38

// exercicio 17

import { Conta, Agencia } from './exercicio6';

const agencia = new Agencia(178);
const conta = new Conta(111111, 1000, agencia);

conta.depositar(1000);
conta.imprimirExtrato();
conta.sacar(100);
conta.imprimirExtrato();
const saldo = conta.consultarSaldoDisponible();
console.log(`Saldo disponível: ${saldo}`);
