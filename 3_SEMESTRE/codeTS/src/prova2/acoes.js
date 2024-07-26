"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleAcoes = exports.Pilha = void 0;
var Pilha = /** @class */ (function () {
    function Pilha() {
        this._elementos = [];
        this._tamanho = 0;
    }
    Object.defineProperty(Pilha.prototype, "tamanho", {
        get: function () {
            return this._tamanho;
        },
        set: function (value) {
            this._tamanho = value;
        },
        enumerable: false,
        configurable: true
    });
    Pilha.prototype.topo = function () {
        if (this.estavazia()) {
            return this._elementos[this._tamanho];
        }
        ;
        return this._elementos[this._tamanho - 1];
    };
    Pilha.prototype.empilhar = function (elemento) {
        this._elementos[this._tamanho] = elemento;
        this._tamanho++;
    };
    Pilha.prototype.desempilhar = function () {
        if (this._tamanho > 0) {
            var top_1 = this._elementos[this._tamanho - 1];
            var elementos = [];
            for (var i = 0; i < this._tamanho - 1; i++) {
                elementos[i] = this._elementos[i];
            }
            this._tamanho--;
            return top_1;
        }
        else {
            this._elementos = [];
            return this._elementos[0];
        }
    };
    Pilha.prototype.getTamanho = function () { return this._tamanho; };
    Pilha.prototype.estavazia = function () { return this._tamanho === 0; };
    Pilha.prototype.toString = function () {
        var repr = "[";
        for (var i = 0; i < this._tamanho - 1; i++) {
            repr += String(this._elementos[i]);
            repr += ',';
        }
        if (this._tamanho > 0) {
            repr += this._elementos[this._tamanho - 1];
        }
        repr += ']';
        return repr;
    };
    return Pilha;
}());
exports.Pilha = Pilha;
var ControleAcoes = /** @class */ (function () {
    function ControleAcoes() {
        this._acoes = new Pilha();
        this._podeRefazer = false;
    }
    Object.defineProperty(ControleAcoes.prototype, "podeRefazer", {
        get: function () {
            return this._podeRefazer;
        },
        set: function (value) {
            this._podeRefazer = value;
        },
        enumerable: false,
        configurable: true
    });
    ControleAcoes.prototype.adicionar = function (acao) {
        this._acoes.empilhar(acao);
        this._podeRefazer = false;
    };
    ControleAcoes.prototype.desfazer = function () {
        if (this._acoes.desempilhar()) {
            this._podeRefazer = true;
        }
    };
    ControleAcoes.prototype.refazer = function () {
        if (this._podeRefazer) {
            this._acoes.tamanho++;
        }
    };
    ControleAcoes.prototype.listar = function () {
        return this._acoes.toString();
    };
    return ControleAcoes;
}());
exports.ControleAcoes = ControleAcoes;
var ca = new ControleAcoes();
ca.adicionar("Acao 1");
ca.adicionar("Acao 2");
ca.adicionar("Acao 3");
ca.adicionar("Acao 4");
ca.adicionar("Acao 5");
ca.desfazer(); //desfaz a ação 5
ca.desfazer(); //desfaz a ação 4
ca.refazer(); //refaz a ação 4
ca.adicionar("Acao 6");
ca.refazer(); //impossível refazer, pois foi adicionada uma nova ação
console.log(ca.listar()); // irá imprimir [Acao 1,Acao 2,Acao 3,Acao 4,Acao 6]
