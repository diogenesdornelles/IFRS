export function getIndexMaiorValor(rodada: Array<number>): number {
  let maior = rodada[0];
  let index = 0;
  for (let i = 1; i < rodada.length; i++) {
    if (rodada[i] > maior) {
      maior = rodada[i];
      index = i;
    }
  }
  return index;
}
