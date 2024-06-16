"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pilhaComPrioridadePar_1 = require("./pilhaComPrioridadePar");
describe('PilhaComPrioridadePar', function () {
    var pilha;
    beforeEach(function () {
        pilha = new pilhaComPrioridadePar_1.default();
    });
    test('adicionando ímpar', function () {
        pilha.adicionar(1);
        expect(pilha.elementos).toEqual([1]);
    });
    test('adicionando par', function () {
        pilha.adicionar(2);
        expect(pilha.elementos).toEqual([2]);
    });
    test('adicionando ímpar e par', function () {
        pilha.adicionar(1);
        pilha.adicionar(2);
        expect(pilha.elementos).toEqual([1, 2]);
    });
    test('adicionando par e ímpar', function () {
        pilha.adicionar(2);
        pilha.adicionar(1);
        expect(pilha.elementos).toEqual([1, 2]);
    });
    test('adicionando números pares e ímpares', function () {
        var pilha = new pilhaComPrioridadePar_1.default();
        pilha.adicionar(1);
        pilha.adicionar(2);
        pilha.adicionar(3);
        pilha.adicionar(4);
        pilha.adicionar(5);
        expect(pilha.elementos).toEqual([1, 3, 5, 4, 2]);
    });
    test('adicionando apenas números ímpares', function () {
        var pilha = new pilhaComPrioridadePar_1.default();
        pilha.adicionar(1);
        pilha.adicionar(3);
        pilha.adicionar(5);
        expect(pilha.elementos).toEqual([1, 3, 5]);
    });
    test('adicionando apenas números pares', function () {
        var pilha = new pilhaComPrioridadePar_1.default();
        pilha.adicionar(2);
        pilha.adicionar(4);
        pilha.adicionar(6);
        expect(pilha.elementos).toEqual([6, 4, 2]);
    });
    test('adicionando uma mistura de números pares e ímpares', function () {
        var pilha = new pilhaComPrioridadePar_1.default();
        pilha.adicionar(2);
        pilha.adicionar(1);
        pilha.adicionar(4);
        pilha.adicionar(3);
        pilha.adicionar(6);
        pilha.adicionar(5);
        expect(pilha.elementos).toEqual([1, 3, 5, 6, 4, 2]);
    });
    test('não adicionando elemento não numérico', function () {
        var pilha = new pilhaComPrioridadePar_1.default();
        pilha.adicionar(2);
        pilha.adicionar('a'); // elemento não numérico
        pilha.adicionar(4);
        expect(pilha.elementos).toEqual([4, 2]);
    });
});
