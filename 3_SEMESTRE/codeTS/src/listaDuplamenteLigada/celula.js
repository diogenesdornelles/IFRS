"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celula = void 0;
/**
 *
 *
 * @export
 * @class Celula
 * @template T
 */
var Celula = /** @class */ (function () {
    /**
     * Creates an instance of Celula.
     * @param {T} elemento
     * @param {(Celula<T> | null)} proxima
     * @param {(Celula<T> | null)} anterior
     * @memberof Celula
     */
    function Celula(elemento, proxima, anterior) {
        this._elemento = elemento;
        this._anterior = anterior;
        this._proxima = proxima;
    }
    Object.defineProperty(Celula.prototype, "elemento", {
        /**
         * Retorna o elemento
         *
         * @type {T}
         * @memberof Celula
         */
        get: function () {
            return this._elemento;
        },
        /**
         * Seta o elemento
         *
         * @memberof Celula
         */
        set: function (elemento) {
            this._elemento = elemento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Celula.prototype, "proxima", {
        /**
         * Retorna a próxima célula
         *
         * @type {(Celula<T> | null)}
         * @memberof Celula
         */
        get: function () {
            return this._proxima;
        },
        /**
         * Seta a próxima célula
         *
         * @memberof Celula
         */
        set: function (celula) {
            this._proxima = celula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Celula.prototype, "anterior", {
        /**
         * Retorna a célula anterior
         *
         * @type {(Celula<T> | null)}
         * @memberof Celula
         */
        get: function () {
            return this._anterior;
        },
        /**
         * Seta a célula anterior
         *
         * @memberof Celula
         */
        set: function (value) {
            this._anterior = value;
        },
        enumerable: false,
        configurable: true
    });
    return Celula;
}());
exports.Celula = Celula;
