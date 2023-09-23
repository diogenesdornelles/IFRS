"use strict";
// Atividade - Exercícios Fixação - Apostila K19 - Página 38
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = exports.Agencia = void 0;
// exercicio 16
// Agencia.ts
var Agencia = /** @class */ (function () {
    function Agencia(numero) {
        this.numero = numero;
    }
    return Agencia;
}());
exports.Agencia = Agencia;
// Conta.ts
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, agencia, limite) {
        if (limite === void 0) { limite = 100; }
        this.numero = numero;
        this.saldo = saldo;
        this.agencia = agencia;
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
    Conta.prototype.consultarSaldoDisponible = function () {
        return this.saldo + this.limite;
    };
    return Conta;
}());
exports.Conta = Conta;
