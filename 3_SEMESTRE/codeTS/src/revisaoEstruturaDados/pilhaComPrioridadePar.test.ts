import PilhaComPrioridadePar from './pilhaComPrioridadePar';

describe('PilhaComPrioridadePar', () => {
  let pilha: PilhaComPrioridadePar<number>;
  beforeEach(() => {
    pilha = new PilhaComPrioridadePar<number>();
  });

  test('adicionando ímpar', () => {
    pilha.adicionar(1);
    expect(pilha.elementos).toEqual([1]);
  });

  test('adicionando par', () => {
    pilha.adicionar(2);
    expect(pilha.elementos).toEqual([2]);
  });

  test('adicionando ímpar e par', () => {
    pilha.adicionar(1);
    pilha.adicionar(2);
    expect(pilha.elementos).toEqual([1, 2]);
  });

  test('adicionando par e ímpar', () => {
    pilha.adicionar(2);
    pilha.adicionar(1);
    expect(pilha.elementos).toEqual([1, 2]);
  });

  test('adicionando números pares e ímpares', () => {
    const pilha = new PilhaComPrioridadePar<number>();
    pilha.adicionar(1);
    pilha.adicionar(2);
    pilha.adicionar(3);
    pilha.adicionar(4);
    pilha.adicionar(5);

    expect(pilha.elementos).toEqual([1, 3, 5, 4, 2]);
  });

  test('adicionando apenas números ímpares', () => {
    const pilha = new PilhaComPrioridadePar<number>();
    pilha.adicionar(1);
    pilha.adicionar(3);
    pilha.adicionar(5);

    expect(pilha.elementos).toEqual([1, 3, 5]);
  });

  test('adicionando apenas números pares', () => {
    const pilha = new PilhaComPrioridadePar<number>();
    pilha.adicionar(2);
    pilha.adicionar(4);
    pilha.adicionar(6);

    expect(pilha.elementos).toEqual([6, 4, 2]);
  });

  test('adicionando uma mistura de números pares e ímpares', () => {
    const pilha = new PilhaComPrioridadePar<number>();
    pilha.adicionar(2);
    pilha.adicionar(1);
    pilha.adicionar(4);
    pilha.adicionar(3);
    pilha.adicionar(6);
    pilha.adicionar(5);

    expect(pilha.elementos).toEqual([1, 3, 5, 6, 4, 2]);
  });

  test('não adicionando elemento não numérico', () => {
    const pilha = new PilhaComPrioridadePar<any>();
    pilha.adicionar(2);
    pilha.adicionar('a'); // elemento não numérico
    pilha.adicionar(4);

    expect(pilha.elementos).toEqual([4, 2]);
  });
});
