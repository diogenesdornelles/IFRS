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
var Pilha = /** @class */ (function (_super) {
    __extends(Pilha, _super);
    function Pilha() {
        return _super.call(this) || this;
    }
    ;
    Pilha.prototype.topo = function () {
        return this.elementos[0];
    };
    ;
    Pilha.prototype.remover = function () {
        var removido = this.elementos[0];
        for (var i = 1; i < this.tamanho; i++) {
            this.elementos[i - 1] = this.elementos[i];
            this.tamanho--;
        }
        return removido;
    };
    return Pilha;
}(container_1.default));
exports.default = Pilha;
