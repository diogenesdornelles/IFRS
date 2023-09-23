"use strict";
// Atividade - Exercícios Fixação - Apostila K19 - Página 48Tarefa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = exports.Conta = void 0;
// exercicios 11 e 12
// Conta.ts
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, limite) {
        this.numero = numero;
        this.saldo = saldo;
        this.limite = limite;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor > 0)
            this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite)
            this.saldo -= valor;
    };
    Conta.prototype.imprimirExtrato = function () {
        console.log("Saldo: ".concat(this.saldo));
    };
    return Conta;
}());
exports.Conta = Conta;
// exercicio 14
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        if (salario === void 0) { salario = 200; }
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.aumentarSalario = function (valor) {
        if (valor > 0)
            this.salario += valor;
    };
    Funcionario.prototype.consultarRegistros = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Sal\u00E1rio: ".concat(this.salario));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
