"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaLigada_1 = require("./listaLigada");
describe('ListaLigada', function () {
    var lista;
    beforeEach(function () {
        lista = new listaLigada_1.ListaLigada();
    });
    test('deve adicionar elemento no fim', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect(lista.toString()).toBe('[1, 2]');
    });
    test('deve adicionar elemento no começo', function () {
        lista.adicionaNoComeco(1);
        lista.adicionaNoComeco(2);
        expect(lista.toString()).toBe('[2, 1]');
    });
    test('deve remover elemento do fim', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.removeDoFim();
        expect(lista.toString()).toBe('[1]');
    });
    test('deve remover elemento do começo', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.removeDoComeco();
        expect(lista.toString()).toBe('[2]');
    });
    test('deve adicionar elemento em uma posição específica', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(3);
        lista.adicionaPorPosicao(1, 2);
        expect(lista.toString()).toBe('[1, 2, 3]');
    });
    test('deve remover elemento de uma posição específica', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        lista.adicionaNoFim(3);
        lista.removePorPosicao(1);
        expect(lista.toString()).toBe('[1, 3]');
    });
    test('deve verificar se contém um elemento', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect(lista.contem(1)).toBe(true);
        expect(lista.contem(3)).toBe(false);
    });
    test('deve retornar elemento por posição', function () {
        lista.adicionaNoFim(1);
        lista.adicionaNoFim(2);
        expect(lista.obtemElemento(0)).toBe(1);
        expect(lista.obtemElemento(1)).toBe(2);
        expect(lista.obtemElemento(2)).toBeUndefined();
    });
    test('deve retornar a representação em string correta', function () {
        expect(lista.toString()).toBe('[]');
        lista.adicionaNoFim(1);
        expect(lista.toString()).toBe('[1]');
        lista.adicionaNoFim(2);
        expect(lista.toString()).toBe('[1, 2]');
    });
});
