"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBin = void 0;
var pilha_1 = require("./pilha");
/**
 *
 *
 * @param {number} decimal
 * @return {*}  {string}
 */
var getBin = function (decimal) {
    var _a;
    var pilha = new pilha_1.Pilha();
    var resto = 0;
    if (decimal === 0) {
        pilha.adicionar(0);
    }
    while (decimal) {
        _a = [decimal % 2, Math.trunc(decimal / 2)], resto = _a[0], decimal = _a[1];
        pilha.adicionar(resto);
    }
    return pilha.toString();
};
exports.getBin = getBin;
var bin = (0, exports.getBin)(0);
console.log(bin);
