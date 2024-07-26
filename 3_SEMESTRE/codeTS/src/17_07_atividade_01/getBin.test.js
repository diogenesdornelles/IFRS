"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pilha.test.ts
var main_1 = require("./main");
describe('getBin', function () {
    it('deve retornar "0" para input 0', function () {
        expect((0, main_1.getBin)(0)).toBe("0");
    });
    it('deve retornar "1" para input 1', function () {
        expect((0, main_1.getBin)(1)).toBe("1");
    });
    it('deve retornar "10" para input 2', function () {
        expect((0, main_1.getBin)(2)).toBe("10");
    });
    it('deve retornar "1010" para input 10', function () {
        expect((0, main_1.getBin)(10)).toBe("1010");
    });
    it('deve retornar "1111" para input 15', function () {
        expect((0, main_1.getBin)(15)).toBe("1111");
    });
    it('deve retornar "100000" para input 32', function () {
        expect((0, main_1.getBin)(32)).toBe("100000");
    });
    it('deve gerenciar numeros grandes corretamente', function () {
        expect((0, main_1.getBin)(1023)).toBe("1111111111");
        expect((0, main_1.getBin)(1024)).toBe("10000000000");
    });
});
