import { ListaDuplamenteLigada } from "./listaDuplamenteLigada";

describe('ListaDuplamenteLigada', () => {
  let lista: ListaDuplamenteLigada<number>;

  beforeEach(() => {
    lista = new ListaDuplamenteLigada();
  });

  test('deve adicionar elemento no fim', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.ultima?.anterior?.elemento).toBe(1);
    expect(lista.toString()).toBe('[1, 2]');
  });

  test('deve mostrar anterior', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.ultima?.anterior?.elemento).toBe(1);
  });

  test('deve adicionar elemento no começo', () => {
    lista.adicionaNoComeco(1);
    lista.adicionaNoComeco(2);
    expect(lista.toString()).toBe('[2, 1]');
  });

  test('deve mostrar anterior falsy', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.primeira?.anterior).toBeFalsy();
  });

  test('deve remover elemento do fim', () => {
    lista.adicionaNoComeco(1);
    lista.adicionaNoComeco(2);
    lista.removeDoFim();
    expect(lista.toString()).toBe('[2]');
  });

  test('deve remover elemento do começo', () => {
    lista.adicionaNoComeco(1);
    lista.adicionaNoComeco(2);
    lista.removeDoComeco();
    expect(lista.toString()).toBe('[1]');
  });

  test('deve adicionar elemento por posição', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(3);
    lista.adicionaPorPosicao(1, 2);
    expect(lista.toString()).toBe('[1, 2, 3]');
  });

  test('deve remover elemento por posição', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.adicionaNoFim(3);
    lista.removePorPosicao(1);
    expect(lista.toString()).toBe('[1, 3]');
  });

  test('deve obter elemento por posição', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.adicionaNoFim(3);
    expect(lista.obtemElemento(1)).toBe(2);
  });

  test('deve verificar se contém elemento', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.adicionaNoFim(3);
    expect(lista.contem(2)).toBe(true);
    expect(lista.contem(4)).toBe(false);
  });

  test('deve retornar o tamanho da lista', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.getTamanho()).toBe(2);
  });

  test('deve retornar string correta para lista vazia', () => {
    expect(lista.toString()).toBe('[]');
  });

  test('deve retornar string correta para lista com elementos', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.toString()).toBe('[1, 2]');
  });
});