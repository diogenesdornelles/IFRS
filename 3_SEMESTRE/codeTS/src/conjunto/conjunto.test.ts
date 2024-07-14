import { Conjunto } from './conjunto';

describe('Conjunto', () => {
  let set: Conjunto;

  beforeEach(() => {
    set = new Conjunto();
  });

  test('1) Adicionar nomes "Rafael", "Ana","Paulo" e Imprimir todos os elementos do conjunto', () => {
    set.add('Rafael');
    set.add('Ana');
    set.add('Paulo');
    expect(set.values()).toEqual(['Rafael', 'Ana', 'Paulo']);
  });

  test('2) Remover o nome Rafael', () => {
    set.add('Rafael');
    set.add('Ana');
    set.add('Paulo');
    set.delete('Rafael');
    expect(set.values()).toEqual(['Ana', 'Paulo']);
  });

  test('3) Verificar se o nome Paulo existe no conjunto', () => {
    set.add('Rafael');
    set.add('Ana');
    set.add('Paulo');
    expect(set.has('Paulo')).toBe(true);
  });

  test('4) Imprimir o todos os nomes do conjunto', () => {
    set.add('Rafael');
    set.add('Ana');
    set.add('Paulo');
    expect(set.values()).toEqual(['Rafael', 'Ana', 'Paulo']);
    set.delete('Rafael');
    expect(set.values()).toEqual(['Ana', 'Paulo']);
  });

  test('5) Imprimir o tamanho do conjunto', () => {
    set.add('Rafael');
    set.add('Ana');
    set.add('Paulo');
    expect(set.size()).toBe(3);
    set.delete('Rafael');
    expect(set.size()).toBe(2);
  });

  test('União de conjuntos', () => {
    const set1 = new Conjunto();
    set1.add('A');
    set1.add('B');
    set1.add('C');

    const set2 = new Conjunto();
    set2.add('C');
    set2.add('D');
    set2.add('E');

    const unionSet = set1.uniao(set2);
    expect(unionSet.values().sort()).toEqual(['A', 'B', 'C', 'D', 'E'].sort());
  });

  test('Interseção de conjuntos', () => {
    const set1 = new Conjunto();
    set1.add('A');
    set1.add('B');
    set1.add('C');

    const set2 = new Conjunto();
    set2.add('B');
    set2.add('C');
    set2.add('D');

    const intersectionSet = set1.interseccao(set2);
    expect(intersectionSet.values().sort()).toEqual(['B', 'C'].sort());
  });

  test('Diferença de conjuntos', () => {
    const set1 = new Conjunto();
    set1.add('A');
    set1.add('B');
    set1.add('C');

    const set2 = new Conjunto();
    set2.add('C');
    set2.add('D');
    set2.add('E');

    const differenceSet = set1.diferenca(set2);
    expect(differenceSet.values().sort()).toEqual(['A', 'B', 'D', 'E'].sort());
  });

  test('Subconjunto', () => {
    const set1 = new Conjunto();
    set1.add('A');
    set1.add('B');

    const set2 = new Conjunto();
    set2.add('A');
    set2.add('B');
    set2.add('C');

    expect(set1.eSubConjuntoDe(set2)).toBe(true);
    expect(set2.eSubConjuntoDe(set1)).toBe(false);
  });
});