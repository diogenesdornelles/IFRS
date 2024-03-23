export function getSomaRodada(rodada: Array<number>): number {
  let soma = 0;
  for (let i = 0; i < rodada.length; i++) {
    soma += rodada[i];
  }
  return soma;
}
