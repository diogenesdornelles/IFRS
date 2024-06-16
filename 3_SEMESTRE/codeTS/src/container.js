"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
/**
 *   Primeiramente, no objetivo de reduzir a redundância de código, foram declarados junto ao
 * container genérico (Container) os atributos e alguns métodos comuns que serão extendidos
 * à pilha e à fila, pois estas necessitam da manipulação de mesmos estados e comportamentos;
 *   Relegou-se às classes filhas concretas a implementação de outros métodos abstratos, cujo modo de
 * funcionamento é particular a cada qual;
 *   Houve a implementação de generics para lidar com elementos manipulados pelos containers; e
 *   Foi adicionado documentação e comentário para melhorar a legibilidade.
 */
/**
 * Classe abstrata que representa um contêiner genérico.
 * @template T O tipo genérico dos elementos no contêiner.
 */
var Container = /** @class */ (function () {
    /**
     * Construtor da classe Container.
     * Inicializa o array de elementos e define o tamanho como 0.
     */
    function Container() {
        this._elementos = [];
        this._tamanho = 0;
    }
    Object.defineProperty(Container.prototype, "elementos", {
        /**
         * Retorna os elementos do contêiner.
         * @returns Um array contendo os elementos do contêiner.
         */
        get: function () {
            return this._elementos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "tamanho", {
        /**
         * Retorna o tamanho atual do contêiner.
         * @returns O tamanho atual do contêiner.
         */
        get: function () {
            return this._tamanho;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adiciona um elemento ao contêiner.
     * @param elemento O elemento a ser adicionado ao contêiner, do tipo genérico T.
     * @returns Verdadeiro se o elemento foi adicionado com sucesso, falso caso contrário.
     */
    Container.prototype.adicionar = function (elemento) {
        this._elementos[this._tamanho] = elemento;
        this._tamanho++;
        return true; // Sempre retorna verdadeiro, a menos que haja uma validação específica
    };
    /**
     * Verifica se o contêiner está vazio.
     * @returns Verdadeiro se o contêiner estiver vazio, falso caso contrário.
     */
    Container.prototype.estaVazia = function () {
        return this._tamanho === 0;
    };
    /**
     * Retorna uma representação em string do contêiner.
     * @returns Uma string representando os elementos do contêiner.
     */
    Container.prototype.toString = function () {
        var repr = '[';
        for (var i = 0; i < this._tamanho - 1; i++) {
            repr += String(this._elementos[i]); // Adiciona cada elemento separado por vírgula
            repr += ',';
        }
        if (this._tamanho > 0) {
            repr += this._elementos[this._tamanho - 1]; // Adiciona o último elemento sem vírgula
        }
        repr += ']';
        return repr;
    };
    return Container;
}());
exports.Container = Container;
