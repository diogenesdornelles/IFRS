// Atividade - Exercícios Fixação - Apostila K19 - Página 48Tarefa
var _a, _b, _c, _d;
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
        alert("Saldo: ".concat(this.saldo));
    };
    return Conta;
}());
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
        alert("Nome: ".concat(this.nome, "\n      Sal\u00E1rio: ").concat(this.salario, "\n      "));
    };
    return Funcionario;
}());
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
var c = new Conta(parseFloat(numero), parseFloat(saldo), parseFloat(limite));
var ManipulaConta = /** @class */ (function () {
    function ManipulaConta(conta) {
        this.conta = conta;
    }
    ManipulaConta.prototype.menu = function () {
        alert("Op\u00E7\u00F5es:\n    1 - Sacar\n    2 - Depositar\n    3 - Imprimir extrato\n    4 - Sair");
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
                    alert('Escolha uma opção válida');
                    break;
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
    nome = (_d = window.prompt('Informe o nome do funcionário: ')) !== null && _d !== void 0 ? _d : '';
}
var f = new Funcionario(nome);
var ManipulaFuncionario = /** @class */ (function () {
    function ManipulaFuncionario(funcionario) {
        this.funcionario = funcionario;
    }
    ManipulaFuncionario.prototype.menu = function () {
        alert("\n    Op\u00E7\u00F5es:\n    1 - Altera nome\n    2 - Altera sal\u00E1rio\n    3 - Visualizar registros do funcion\u00E1rio\n    4 - Sair\n    ");
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
                    alert('Escolha uma opção válida');
                    break;
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
        this.funcionario.consultarRegistros();
    };
    return ManipulaFuncionario;
}());
var manipularFuncionario = new ManipulaFuncionario(f);
manipularFuncionario.loop();
