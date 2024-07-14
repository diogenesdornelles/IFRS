import { ListaLigada } from './listaLigada';

describe('ListaLigada', () => {
  let lista: ListaLigada;

  beforeEach(() => {
    lista = new ListaLigada();
  });

  test('deve adicionar elemento no fim', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.toString()).toBe('[1, 2]');
  });

  test('deve adicionar elemento no começo', () => {
    lista.adicionaNoComeco(1);
    lista.adicionaNoComeco(2);
    expect(lista.toString()).toBe('[2, 1]');
  });

  test('deve remover elemento do fim', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.removeDoFim();
    expect(lista.toString()).toBe('[1]');
  });

  test('deve remover elemento do começo', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.removeDoComeco();
    expect(lista.toString()).toBe('[2]');
  });

  test('deve adicionar elemento em uma posição específica', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(3);
    lista.adicionaPorPosicao(1, 2);
    expect(lista.toString()).toBe('[1, 2, 3]');
  });

  test('deve remover elemento de uma posição específica', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    lista.adicionaNoFim(3);
    lista.removePorPosicao(1);
    expect(lista.toString()).toBe('[1, 3]');
  });

  test('deve verificar se contém um elemento', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.contem(1)).toBe(true);
    expect(lista.contem(3)).toBe(false);
  });

  test('deve retornar elemento por posição', () => {
    lista.adicionaNoFim(1);
    lista.adicionaNoFim(2);
    expect(lista.obtemElemento(0)).toBe(1);
    expect(lista.obtemElemento(1)).toBe(2);
    expect(lista.obtemElemento(2)).toBeUndefined();
  });

  test('deve retornar a representação em string correta', () => {
    expect(lista.toString()).toBe('[]');
    lista.adicionaNoFim(1);
    expect(lista.toString()).toBe('[1]');
    lista.adicionaNoFim(2);
    expect(lista.toString()).toBe('[1, 2]');
  });
});
