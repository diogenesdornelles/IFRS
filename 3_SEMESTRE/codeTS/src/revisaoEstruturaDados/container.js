"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
        this.tamanho = 0;
        this.elementos = [];
    }
    ;
    Container.prototype.estaVazia = function () {
        return this.tamanho == 0;
    };
    Container.prototype.adicionar = function (elemento) {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
    };
    ;
    return Container;
}());
exports.default = Container;
