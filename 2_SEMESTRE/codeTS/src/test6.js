"use strict";
// Atividade - Exercícios Fixação - Apostila K19 - Página 38
Object.defineProperty(exports, "__esModule", { value: true });
// exercicio 17
var exercicio6_1 = require("./exercicio6");
var agencia = new exercicio6_1.Agencia(178);
var conta = new exercicio6_1.Conta(111111, 1000, agencia);
conta.depositar(1000);
conta.imprimirExtrato();
conta.sacar(100);
conta.imprimirExtrato();
var saldo = conta.consultarSaldoDisponible();
console.log("Saldo dispon\u00EDvel: ".concat(saldo));
