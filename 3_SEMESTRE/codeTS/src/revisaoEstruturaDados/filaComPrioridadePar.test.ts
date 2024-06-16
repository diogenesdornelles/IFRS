import FilaComPrioriadePar from "./filaComPrioridadePar";


describe('FilaComPrioridadePar', () => {
  let fila: FilaComPrioriadePar<number>;

  beforeEach(() => {
    fila = new FilaComPrioriadePar<number>();
  });

  test('should add odd numbers to the end of the queue', () => {
    fila.adicionar(1);
    fila.adicionar(3);
    fila.adicionar(5);
    
    expect(fila.elementos).toEqual([1, 3, 5]);
  });

  test('should add even numbers before the first odd number', () => {
    fila.adicionar(1);
    fila.adicionar(2);
    fila.adicionar(3);
    fila.adicionar(4);

    expect(fila.elementos).toEqual([2, 4, 1, 3]);
  });

  test('should add even numbers to the end if no odd numbers are present', () => {
    fila.adicionar(2);
    fila.adicionar(4);
    fila.adicionar(6);
    
    expect(fila.elementos).toEqual([2, 4, 6]);
  });

  test('should add mixed numbers in correct order', () => {
    fila.adicionar(1);
    fila.adicionar(2);
    fila.adicionar(3);
    fila.adicionar(4);
    fila.adicionar(5);
    fila.adicionar(6);

    expect(fila.elementos).toEqual([2, 4, 6, 1, 3, 5]);
  });

  test('should ignore non-number elements', () => {
    fila.adicionar(1);
    fila.adicionar(2);
    fila.adicionar("three" as any); // Invalid element
    fila.adicionar(4);
    
    expect(fila.elementos).toEqual([2, 4, 1]);
  });
});