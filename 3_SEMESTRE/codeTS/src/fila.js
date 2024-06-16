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
exports.Fila = void 0;
var container_1 = require("./container");
/**
 * Classe que representa uma estrutura de dados fila.
 * @typeparam T Tipo dos elementos armazenados na fila.
 */
var Fila = /** @class */ (function (_super) {
    __extends(Fila, _super);
    /**
     * Construtor da classe Fila.
     * Inicializa a fila como vazia.
     */
    function Fila() {
        return _super.call(this) || this; // Chama o construtor da classe pai (Container)
    }
    /**
     * Retorna o próximo elemento da fila sem removê-lo.
     * @returns O próximo elemento da fila ou undefined se a fila estiver vazia.
     */
    Fila.prototype.topo = function () {
        if (this._tamanho > 0) {
            return this._elementos[0]; // Retorna o primeiro elemento da fila
        }
        else {
            return undefined; // Retorna undefined se a fila estiver vazia
        }
    };
    ;
    /**
     * Remove e retorna o primeiro elemento da fila.
     * @returns O primeiro elemento da fila ou undefined se a fila estiver vazia.
     */
    Fila.prototype.remover = function () {
        if (this._tamanho > 0) {
            var top_1 = this._elementos[0]; // Armazena o primeiro elemento da fila
            // Desloca todos os elementos uma posição para frente
            for (var i = 0; i < this._tamanho; i++) {
                this._elementos[i] = this._elementos[i + 1];
            }
            this._tamanho--; // Decrementa o tamanho da fila
            return top_1; // Retorna o primeiro elemento removido
        }
        else {
            this._elementos = []; // Se a fila estiver vazia, reinicializa o array
            return undefined; // Retorna undefined se a fila estiver vazia
        }
    };
    ;
    return Fila;
}(container_1.Container));
exports.Fila = Fila;
var filaNumbers = new Fila();
var filaStrings = new Fila();
filaNumbers.adicionar(1);
filaStrings.adicionar('Joao');
console.log(filaNumbers.estaVazia());
console.log(filaStrings.estaVazia());
console.log(filaNumbers.toString());
console.log(filaStrings.toString());
