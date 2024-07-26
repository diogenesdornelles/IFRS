// pilha.test.ts
import { getBin } from './main';

describe('getBin', () => {
  it('deve retornar "0" para input 0', () => {
    expect(getBin(0)).toBe("0");
  });

  it('deve retornar "1" para input 1', () => {
    expect(getBin(1)).toBe("1");
  });

  it('deve retornar "10" para input 2', () => {
    expect(getBin(2)).toBe("10");
  });

  it('deve retornar "1010" para input 10', () => {
    expect(getBin(10)).toBe("1010");
  });

  it('deve retornar "1111" para input 15', () => {
    expect(getBin(15)).toBe("1111");
  });

  it('deve retornar "100000" para input 32', () => {
    expect(getBin(32)).toBe("100000");
  });

  it('deve gerenciar numeros grandes corretamente', () => {
    expect(getBin(1023)).toBe("1111111111");
    expect(getBin(1024)).toBe("10000000000");
  });
});