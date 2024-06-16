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
var container_1 = require("./container");
var Fila = /** @class */ (function (_super) {
    __extends(Fila, _super);
    function Fila() {
        return _super.call(this) || this;
    }
    Fila.prototype.topo = function () {
        if (!this.estaVazia()) {
            return this.elementos[this.tamanho - 1];
        }
        else {
            return undefined;
        }
        ;
    };
    Fila.prototype.remover = function () {
        if (!this.estaVazia()) {
            var removido = this.elementos[this.tamanho - 1];
            this.tamanho--;
            return removido;
        }
        else {
            return undefined;
        }
    };
    return Fila;
}(container_1.default));
exports.default = Fila;
