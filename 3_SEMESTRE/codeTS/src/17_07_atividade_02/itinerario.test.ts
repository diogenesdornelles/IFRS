// tests/listaDuplamenteLigada.test.ts
import { LocalInfo } from "./localInfo";
import { ListaDuplamenteLigada } from "./listaDuplamenteLigada";


describe('ListaDuplamenteLigada', () => {
  let lista: ListaDuplamenteLigada<LocalInfo>;

  beforeEach(() => {
    lista = new ListaDuplamenteLigada<LocalInfo>();
    const locais = [
      new LocalInfo("Local 1", 10, 20),
      new LocalInfo("Local 2", 15, 30),
      new LocalInfo("Local 3", 20, 25),
      new LocalInfo("Local 4", 25, 35),
      new LocalInfo("Local 5", 30, 40),
    ];

    locais.forEach(local => lista.adicionaNoFim(local));
  });

  it('should calculate total distance correctly', () => {
    expect(lista.getDistancia()).toBe(100); // 10 + 15 + 20 + 25 + 30
  });

  it('should calculate total time correctly', () => {
    expect(lista.getTempoTotal()).toBe(150); // 20 + 30 + 25 + 35 + 40
  });

  it('should add items correctly', () => {
    const local = new LocalInfo("Local 6", 35, 50);
    lista.adicionaNoFim(local);
    expect(lista.totalDePontos).toBe(6);
    expect(lista.ultima?.localInfo.nome).toBe("Local 6");
  });

  it('should remove items from the end correctly', () => {
    lista.removeDoFim();
    expect(lista.totalDePontos).toBe(4);
    expect(lista.ultima?.localInfo.nome).toBe("Local 4");
  });

  it('should remove items from the beginning correctly', () => {
    lista.removeDoComeco();
    expect(lista.totalDePontos).toBe(4);
    expect(lista.primeira?.localInfo.nome).toBe("Local 2");
  });
});