"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pilha_1 = require("./pilha");
var PilhaComPrioridadePar = /** @class */ (function (_super) {
    __extends(PilhaComPrioridadePar, _super);
    function PilhaComPrioridadePar() {
        return _super.call(this) || this;
    }
    ;
    PilhaComPrioridadePar.prototype.adicionar = function (elemento) {
        // continua se number
        if (typeof elemento !== "number")
            return;
        // salva o tamanho atual
        // adiciona a idx 0 se vazio
        if (this.estaVazia()) {
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
            return;
        }
        var idxImpar = -1;
        for (var i = this.tamanho - 1; i >= 0; i--) {
            var elementoAtual = this.elementos[i];
            if (typeof elementoAtual === "number") {
                if (elementoAtual % 2 !== 0) {
                    idxImpar = i;
                    break;
                }
            }
        }
        if (idxImpar >= 0) {
            var pivot = idxImpar + 1;
            for (var j = this.tamanho; j >= pivot; j--) {
                this.elementos[j] = this.elementos[j - 1];
            }
            ;
            this.elementos[pivot] = elemento;
            // incrementa tamanho
            this.tamanho++;
            return;
        }
        // se não tiver impar nos elementos
        for (var i = this.tamanho; i > 0; i--) {
            this.elementos[i] = this.elementos[i - 1];
        }
        this.elementos[0] = elemento;
        this.tamanho++;
        return;
    };
    ;
    return PilhaComPrioridadePar;
}(pilha_1.default));
exports.default = PilhaComPrioridadePar;
;
// 0,1,2,3,4,5,6,7,8,9
// 1,5,3,7,2,2,2
var pilha = new PilhaComPrioridadePar();
// pilha.adicionar(3);
// pilha.adicionar(2);
// pilha.adicionar(4);
// pilha.adicionar(5);
// pilha.adicionar(6);
// pilha.adicionar(7);
console.log(pilha);
