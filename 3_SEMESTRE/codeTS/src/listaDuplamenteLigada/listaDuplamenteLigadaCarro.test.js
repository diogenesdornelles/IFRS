"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listaDuplamenteLigada_1 = require("./listaDuplamenteLigada");
var carro_1 = require("./carro");
describe('ListaDuplamenteLigada', function () {
    var lista;
    beforeEach(function () {
        lista = new listaDuplamenteLigada_1.ListaDuplamenteLigada();
    });
    test('Testar todos', function () {
        var _a;
        var ka = new carro_1.Carro("KA", 2020, 130);
        var uno = new carro_1.Carro("Uno Mille", 2013, 76);
        var corsa = new carro_1.Carro("Corsa", 2009, 85);
        var gol = new carro_1.Carro("Gol", 2010, 106);
        lista.adicionaNoComeco(uno); // [Carro=Uno Mille-2013-76]
        lista.adicionaNoFim(corsa); // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
        lista.adicionaPorPosicao(2, ka); // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=Ka-2020-130]
        lista.adicionaNoComeco(gol); // [Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=Ka-2020-130]
        expect(lista.toString()).toBe('[Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=KA-2020-130]');
        expect(lista.getTamanho()).toBe(4);
        lista.removePorPosicao(3); // [Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
        expect(lista.toString()).toBe('[Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]');
        lista.removeDoComeco(); // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
        expect((_a = lista.primeira) === null || _a === void 0 ? void 0 : _a.elemento.toString()).toBe('Carro=Uno Mille-2013-76');
        lista.removeDoFim(); // [Carro=Uno Mille-2013-76]
        expect(lista.contem(ka)).toBeFalsy();
        expect(lista.toString()).toBe('[Carro=Uno Mille-2013-76]');
    });
});
