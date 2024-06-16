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
exports.Pilha = void 0;
var container_1 = require("./container");
/**
 * Classe que representa uma estrutura de dados de pilha.
 * @typeparam T Tipo dos elementos armazenados na pilha.
 */
var Pilha = /** @class */ (function (_super) {
    __extends(Pilha, _super);
    /**
     * Construtor da classe Pilha.
     * Inicializa a pilha como vazia.
     */
    function Pilha() {
        return _super.call(this) || this; // Chama o construtor da classe pai (Container)
    }
    /**
     * Retorna o elemento do topo da pilha sem removê-lo.
     * @returns O elemento do topo da pilha ou undefined se a pilha estiver vazia.
     */
    Pilha.prototype.topo = function () {
        if (this.estaVazia()) {
            return this._elementos[this._tamanho]; // Retorna undefined se a pilha estiver vazia
        }
        return this._elementos[this._tamanho - 1]; // Retorna o elemento do topo da pilha
    };
    /**
     * Remove e retorna o elemento do topo da pilha.
     * @returns O elemento do topo da pilha ou undefined se a pilha estiver vazia.
     */
    Pilha.prototype.remover = function () {
        if (this._tamanho > 0) {
            var top_1 = this._elementos[this._tamanho - 1]; // Armazena o elemento do topo da pilha
            var elementos = []; // Array temporário para armazenar os elementos da pilha sem o topo
            // Copia os elementos da pilha para o array temporário, exceto o topo
            for (var i = 0; i < this._tamanho - 1; i++) {
                elementos[i] = this._elementos[i];
            }
            this._tamanho--; // Decrementa o tamanho da pilha
            return top_1; // Retorna o elemento do topo removido
        }
        else {
            this._elementos = []; // Se a pilha estiver vazia, reinicializa o array
            return undefined; // Retorna undefined se a pilha estiver vazia
        }
    };
    return Pilha;
}(container_1.Container));
exports.Pilha = Pilha;
var pilhaNumbers = new Pilha();
var pilhaStrings = new Pilha();
pilhaNumbers.adicionar(1);
pilhaStrings.adicionar('Joao');
console.log(pilhaNumbers.toString());
console.log(pilhaStrings.toString());
