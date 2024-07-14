"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaDuplamenteLigada_1 = require("./listaDuplamenteLigada");
describe('ListaDuplamenteLigada', function () {
    var lista;
    beforeEach(function () {
        lista = new listaDuplamenteLigada_1.ListaDuplamenteLigada();
    });
    test('deve adicionar elemento no fim', function () {
        var _a, _b;
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect((_b = (_a = lista.ultima) === null || _a === void 0 ? void 0 : _a.anterior) === null || _b === void 0 ? void 0 : _b.elemento).toBe(1);
        expect(lista.toString()).toBe('[1, 2]');
    });
    test('deve mostrar anterior', function () {
        var _a, _b;
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect((_b = (_a = lista.ultima) === null || _a === void 0 ? void 0 : _a.anterior) === null || _b === void 0 ? void 0 : _b.elemento).toBe(1);
    });
    test('deve adicionar elemento no começo', function () {
        lista.adicionaNoComeco(1);
        lista.adicionaNoComeco(2);
        expect(lista.toString()).toBe('[2, 1]');
    });
    test('deve mostrar anterior falsy', function () {
        var _a;
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect((_a = lista.primeira) === null || _a === void 0 ? void 0 : _a.anterior).toBeFalsy();
    });
    test('deve remover elemento do fim', function () {
        lista.adicionaNoComeco(1);
        lista.adicionaNoComeco(2);
        lista.removeDoFim();
        expect(lista.toString()).toBe('[2]');
    });
    test('deve remover elemento do começo', function () {
        lista.adicionaNoComeco(1);
        lista.adicionaNoComeco(2);
        lista.removeDoComeco();
        expect(lista.toString()).toBe('[1]');
    });
    test('deve adicionar elemento por posição', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(3);
        lista.adicionaPorPosicao(1, 2);
        expect(lista.toString()).toBe('[1, 2, 3]');
    });
    test('deve remover elemento por posição', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.adicionaNoFim(3);
        lista.removePorPosicao(1);
        expect(lista.toString()).toBe('[1, 3]');
    });
    test('deve obter elemento por posição', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.adicionaNoFim(3);
        expect(lista.obtemElemento(1)).toBe(2);
    });
    test('deve verificar se contém elemento', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.adicionaNoFim(3);
        expect(lista.contem(2)).toBe(true);
        expect(lista.contem(4)).toBe(false);
    });
    test('deve retornar o tamanho da lista', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect(lista.getTamanho()).toBe(2);
    });
    test('deve retornar string correta para lista vazia', function () {
        expect(lista.toString()).toBe('[]');
    });
    test('deve retornar string correta para lista com elementos', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect(lista.toString()).toBe('[1, 2]');
    });
});
