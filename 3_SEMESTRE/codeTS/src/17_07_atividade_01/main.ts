import { Pilha } from "./pilha";
/**
 * Retorna uma representação string do decimal fornecido
 *
 * @param {number} decimal
 * @return {*}  {string}
 */
export const getBin = (decimal: number): string => {
  const pilha = new Pilha<number>();
  let resto = 0;
  if (decimal === 0) {
    pilha.adicionar(0);
  }
  while (decimal) {
    [resto, decimal] = [decimal % 2, Math.trunc(decimal / 2)];
    pilha.adicionar(resto);
  }
  return pilha.toString()
}
