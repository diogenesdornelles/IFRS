"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var listaLigadaAluno_1 = require("./listaLigadaAluno");
describe('ListaLigadaAluno', function () {
    var lista;
    beforeEach(function () {
        lista = new listaLigadaAluno_1.ListaLigadaAluno();
    });
    test('Should "Adicionar o aluno ("Ronaldo", 28)"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
    });
    test('Should "Adicionar no fim da lista a aluna ("Carol",4)"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }]');
    });
    test('Should "Adicionar na posição 2 a aluna ("Betty",1)"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Adicionar no início da lista a aluna ("Marina",10)"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        expect(lista.toString()).toBe('[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Imprimir a lista"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        expect(lista.toString()).toBe('[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Imprimir a quantidade de elementos"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        expect(lista.totalDeElemento).toBe(4);
    });
    test('Should "Remover a posição 2"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        expect(lista.toString()).toBe('[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Imprimir a lista após remover posição 2"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        expect(lista.toString()).toBe('[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Remover elemento do início da lista"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        lista.removeDoComeco();
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]');
    });
    test('Should "Imprimir o primeiro elemento da lista"', function () {
        var _a;
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        lista.removeDoComeco();
        expect((_a = lista.primeira) === null || _a === void 0 ? void 0 : _a.elemento).toEqual(new Aluno_1.Aluno('Ronaldo', 28));
    });
    test('Should "Remover elemento do final da lista"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        lista.removeDoComeco();
        lista.removeDoFim();
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
    });
    test('Should "Verificar se a aluna ("Betty",1) existe na lista"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        lista.removeDoComeco();
        expect(lista.contem(new Aluno_1.Aluno('Betty', 1))).toBe(false);
    });
    test('Should "Imprimir lista após todas as operações"', function () {
        lista.adicionaNoFim(new Aluno_1.Aluno('Ronaldo', 28));
        lista.adicionaNoFim(new Aluno_1.Aluno('Carol', 4));
        lista.adicionaPorPosicao(2, new Aluno_1.Aluno('Betty', 1));
        lista.adicionaNoComeco(new Aluno_1.Aluno('Marina', 10));
        lista.removePorPosicao(2);
        lista.removeDoComeco();
        lista.removeDoFim();
        expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
    });
});
