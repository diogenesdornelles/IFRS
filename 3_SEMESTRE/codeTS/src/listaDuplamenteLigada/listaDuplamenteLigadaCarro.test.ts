import { ListaDuplamenteLigada } from "./listaDuplamenteLigada";
import { Carro } from "./carro";

describe('ListaDuplamenteLigadaCarro', () => {
  let lista: ListaDuplamenteLigada<Carro>;

  beforeEach(() => {
    lista = new ListaDuplamenteLigada();
  });

  test('Testar todos', () => {
    let ka = new Carro("KA", 2020, 130);
    let uno = new Carro("Uno Mille", 2013, 76);
    let corsa = new Carro("Corsa", 2009, 85);
    let gol = new Carro("Gol", 2010, 106);
    lista.adicionaNoComeco(uno); // [Carro=Uno Mille-2013-76]
    lista.adicionaNoFim(corsa);  // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
    lista.adicionaPorPosicao(2, ka);  // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=Ka-2020-130]
    lista.adicionaNoComeco(gol);  // [Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=Ka-2020-130]
    expect(lista.toString()).toBe('[Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85, Carro=KA-2020-130]');
    expect(lista.getTamanho()).toBe(4);
    lista.removePorPosicao(3); // [Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
    expect(lista.toString()).toBe('[Carro=Gol-2010-106, Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]');
    lista.removeDoComeco();  // [Carro=Uno Mille-2013-76, Carro=Corsa-2009-85]
    expect(lista.primeira?.elemento.toString()).toBe('Carro=Uno Mille-2013-76');
    lista.removeDoFim();   // [Carro=Uno Mille-2013-76]
    expect(lista.contem(ka)).toBeFalsy();
    expect(lista.toString()).toBe('[Carro=Uno Mille-2013-76]');
  });

});