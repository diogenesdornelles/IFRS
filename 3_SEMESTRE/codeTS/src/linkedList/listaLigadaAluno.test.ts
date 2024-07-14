import { Aluno } from './Aluno';
import { ListaLigadaAluno } from './listaLigadaAluno';

describe('ListaLigadaAluno', () => {
  let lista: ListaLigadaAluno;

  beforeEach(() => {
    lista = new ListaLigadaAluno();
  });

  test('Should "Adicionar o aluno ("Ronaldo", 28)"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
  });

  test('Should "Adicionar no fim da lista a aluna ("Carol",4)"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }]');
  });

  test('Should "Adicionar na posição 2 a aluna ("Betty",1)"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    expect(lista.toString()).toBe(
      '[{ nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]',
    );
  });

  test('Should "Adicionar no início da lista a aluna ("Marina",10)"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    expect(lista.toString()).toBe(
      '[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]',
    );
  });

  test('Should "Imprimir a lista"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    expect(lista.toString()).toBe(
      '[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Carol, idade: 4 }, { nome: Betty, idade: 1 }]',
    );
  });

  test('Should "Imprimir a quantidade de elementos"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    expect(lista.totalDeElemento).toBe(4);
  });

  test('Should "Remover a posição 2"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    expect(lista.toString()).toBe(
      '[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]',
    );
  });

  test('Should "Imprimir a lista após remover posição 2"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    expect(lista.toString()).toBe(
      '[{ nome: Marina, idade: 10 }, { nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]',
    );
  });

  test('Should "Remover elemento do início da lista"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    lista.removeDoComeco();
    expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }, { nome: Betty, idade: 1 }]');
  });

  test('Should "Imprimir o primeiro elemento da lista"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    lista.removeDoComeco();
    expect(lista.primeira?.elemento).toEqual(new Aluno('Ronaldo', 28));
  });

  test('Should "Remover elemento do final da lista"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    lista.removeDoComeco();
    lista.removeDoFim();
    expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
  });

  test('Should "Verificar se a aluna ("Betty",1) existe na lista"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    lista.removeDoComeco();
    expect(lista.contem(new Aluno('Betty', 1))).toBe(false);
  });

  test('Should "Imprimir lista após todas as operações"', () => {
    lista.adicionaNoFim(new Aluno('Ronaldo', 28));
    lista.adicionaNoFim(new Aluno('Carol', 4));
    lista.adicionaPorPosicao(2, new Aluno('Betty', 1));
    lista.adicionaNoComeco(new Aluno('Marina', 10));
    lista.removePorPosicao(2);
    lista.removeDoComeco();
    lista.removeDoFim();
    expect(lista.toString()).toBe('[{ nome: Ronaldo, idade: 28 }]');
  });
});
