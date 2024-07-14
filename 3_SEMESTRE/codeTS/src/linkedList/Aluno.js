"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
/**
 *
 *
 * @export
 * @class Celula
 */
var Aluno = /** @class */ (function () {
    /**
     * Creates an instance of Celula.
     * @param {CelulaType} elemento
     * @memberof Celula
     */
    function Aluno(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Aluno.prototype, "nome", {
        /**
         *
         *
         * @type {string}
         * @memberof Aluno
         */
        get: function () {
            return this._nome;
        },
        /**
         *
         *
         * @memberof Aluno
         */
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "idade", {
        /**
         *
         *
         * @type {number}
         * @memberof Aluno
         */
        get: function () {
            return this._idade;
        },
        /**
         *
         *
         * @memberof Aluno
         */
        set: function (value) {
            this._idade = value;
        },
        enumerable: false,
        configurable: true
    });
    return Aluno;
}());
exports.Aluno = Aluno;
