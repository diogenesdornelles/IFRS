"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celula = void 0;
/**
 *
 *
 * @export
 * @class Celula
 */
var Celula = /** @class */ (function () {
    /**
     * Creates an instance of Celula.
     * @param {CelulaType} elemento
     * @memberof Celula
     */
    function Celula(elemento, proxima) {
        this._elemento = elemento;
        this._proxima = proxima;
    }
    Object.defineProperty(Celula.prototype, "elemento", {
        /**
         * Retorna elemento
         *
         * @type {CelulaType}
         * @memberof Celula
         */
        get: function () {
            return this._elemento;
        },
        /**
         * Substitui elemento
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
         * Retorna próxima célula
         *
         * @type {(Celula | null)}
         * @memberof Celula
         */
        get: function () {
            return this._proxima;
        },
        /**
         * Substitui próxima célula
         *
         * @memberof Celula
         */
        set: function (celula) {
            this._proxima = celula;
        },
        enumerable: false,
        configurable: true
    });
    return Celula;
}());
exports.Celula = Celula;
