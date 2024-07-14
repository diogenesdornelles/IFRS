"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
/**
 *
 *
 * @export
 * @class Carro
 */
var Carro = /** @class */ (function () {
    function Carro(modelo, ano, potencia) {
        this._ano = ano,
            this._modelo = modelo,
            this._potencia = potencia;
    }
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (value) {
            this._ano = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "potencia", {
        get: function () {
            return this._potencia;
        },
        set: function (value) {
            this._potencia = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retorna a representação de carro
     *
     * @return {*}  {string}
     * @memberof Carro
     */
    Carro.prototype.toString = function () {
        return "Carro=".concat(this._modelo, "-").concat(this._ano, "-").concat(this._potencia);
    };
    return Carro;
}());
exports.Carro = Carro;
