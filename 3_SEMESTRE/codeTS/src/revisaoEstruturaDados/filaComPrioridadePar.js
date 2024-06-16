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
var fila_1 = require("./fila");
var FilaComPrioriadePar = /** @class */ (function (_super) {
    __extends(FilaComPrioriadePar, _super);
    function FilaComPrioriadePar() {
        return _super.call(this) || this;
    }
    FilaComPrioriadePar.prototype.adicionar = function (elemento) {
        if (typeof elemento !== "number")
            return;
        if (elemento % 2 !== 0) {
            this.elementos[this.tamanho] = elemento;
            this.tamanho++;
        }
        else {
            var tamanhoAtual = this.tamanho;
            for (var i = 0; i < this.tamanho; i++) {
                var elementoAtual = this.elementos[i];
                if (typeof elementoAtual === "number") {
                    if (elementoAtual % 2 !== 0) {
                        var idxImpar = i;
                        for (var j = this.tamanho; j >= idxImpar; j--) {
                            this.elementos[j] = this.elementos[j - 1];
                        }
                        this.elementos[idxImpar] = elemento;
                        this.tamanho++;
                        break;
                    }
                    ;
                }
                ;
            }
            ;
            if (this.tamanho === tamanhoAtual) {
                this.elementos[this.tamanho] = elemento;
                this.tamanho++;
            }
        }
        ;
    };
    ;
    return FilaComPrioriadePar;
}(fila_1.default));
exports.default = FilaComPrioriadePar;
;
var fila = new FilaComPrioriadePar();
fila.adicionar(3);
fila.adicionar(2);
fila.adicionar(4);
fila.adicionar(5);
fila.adicionar(6);
console.log(fila);
