export function haIguais(rodada: Array<number>): boolean {
  for (let i = 0; i < rodada.length - 1; i++) {
    for (let j = i + 1; j < rodada.length; j++) {
      if (rodada[i] === rodada[j]) {
        return true;
      }
    }
  }
  return false;
}
