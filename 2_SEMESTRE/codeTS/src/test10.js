"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var exercicio10_1 = require("./exercicio10");
// exercicio 13
// TestaConta.ts
// import { Conta } from './Conta';
var numero = '';
while (!parseFloat(numero)) {
    numero = (_a = window.prompt('Informe o número da conta: ')) !== null && _a !== void 0 ? _a : 'a';
}
var saldo = '';
while (!parseFloat(saldo)) {
    saldo = (_b = window.prompt('Informe o saldo inicial da conta: ')) !== null && _b !== void 0 ? _b : 'a';
}
var limite = '';
while (!parseFloat(limite)) {
    limite = (_c = window.prompt('Informe o limite inicial da conta: ')) !== null && _c !== void 0 ? _c : 'a';
}
var c = new exercicio10_1.Conta(parseFloat(numero), parseFloat(saldo), parseFloat(limite));
var ManipulaConta = /** @class */ (function () {
    function ManipulaConta(conta) {
        this.conta = conta;
    }
    ManipulaConta.prototype.menu = function () {
        console.log('Opções: ');
        console.log('1 - Sacar');
        console.log('2 - Depositar');
        console.log('3 - Imprimir extrato');
        console.log('4 - Sair');
    };
    ManipulaConta.prototype.loop = function () {
        var _a;
        var opcao = '0';
        while (parseFloat(opcao) !== 4) {
            this.menu();
            opcao = (_a = window.prompt('Informe uma opção: ')) !== null && _a !== void 0 ? _a : '0';
            switch (opcao) {
                case '1':
                    this.operarSaque();
                    break;
                case '2':
                    this.operarDeposito();
                    break;
                case '3':
                    this.operarImprimirExtrato();
                    break;
                case '4':
                    break;
                default:
                    console.log('Escolha uma opção válida');
            }
        }
    };
    ManipulaConta.prototype.operarSaque = function () {
        var _a;
        var valor = (_a = window.prompt('Informe o valor do saque: ')) !== null && _a !== void 0 ? _a : '0';
        if (parseFloat(valor) && parseFloat(valor) > 0) {
            this.conta.sacar(parseFloat(valor));
        }
    };
    ManipulaConta.prototype.operarDeposito = function () {
        var _a;
        var valor = (_a = window.prompt('Informe o valor do deposito: ')) !== null && _a !== void 0 ? _a : '0';
        if (parseFloat(valor) && parseFloat(valor) > 0) {
            this.conta.depositar(parseFloat(valor));
        }
    };
    ManipulaConta.prototype.operarImprimirExtrato = function () {
        this.conta.imprimirExtrato();
    };
    return ManipulaConta;
}());
var manipulaConta = new ManipulaConta(c);
manipulaConta.loop();
// exercicio 15
// TestaFuncionario.ts
var nome = '';
while (!nome) {
    nome = (_d = window.prompt('Informe o número da conta: ')) !== null && _d !== void 0 ? _d : '';
}
var f = new exercicio10_1.Funcionario(nome);
var ManipulaFuncionario = /** @class */ (function () {
    function ManipulaFuncionario(funcionario) {
        this.funcionario = funcionario;
    }
    ManipulaFuncionario.prototype.menu = function () {
        console.log('Opções: ');
        console.log('1 - Altera nome');
        console.log('2 - Altera salário');
        console.log('3 - Visualizar registros do funcionário');
        console.log('4 - Sair');
    };
    ManipulaFuncionario.prototype.loop = function () {
        var _a;
        var opcao = '0';
        while (parseFloat(opcao) !== 4) {
            this.menu();
            opcao = (_a = window.prompt('Informe uma opção: ')) !== null && _a !== void 0 ? _a : '0';
            switch (opcao) {
                case '1':
                    this.alterarNome();
                    break;
                case '2':
                    this.alterarSalario();
                    break;
                case '3':
                    this.visualizarRegistros();
                    break;
                case '4':
                    break;
                default:
                    console.log('Escolha uma opção válida');
            }
        }
    };
    ManipulaFuncionario.prototype.alterarNome = function () {
        var _a;
        var novoNome = (_a = window.prompt('Informe o novo nome: ')) !== null && _a !== void 0 ? _a : '';
        if (novoNome)
            this.funcionario.nome = novoNome;
    };
    ManipulaFuncionario.prototype.alterarSalario = function () {
        var _a;
        var valor = (_a = window.prompt('Informe o novo salario: ')) !== null && _a !== void 0 ? _a : '0';
        if (parseFloat(valor) && parseFloat(valor) > 0)
            this.funcionario.salario = parseFloat(valor);
    };
    ManipulaFuncionario.prototype.visualizarRegistros = function () {
        this.visualizarRegistros();
    };
    return ManipulaFuncionario;
}());
var manipularFuncionario = new ManipulaFuncionario(f);
manipularFuncionario.loop();
