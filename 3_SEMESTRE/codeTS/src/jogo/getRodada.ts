import { Jogador } from './jogador';

export function getRodada(tamanhoRodada: number, jogadores: Array<Jogador>): Array<number> {
  let valores = [];
  for (let i = 0; i < tamanhoRodada; i++) {
    valores[i] = jogadores[i].joga();
  }
  return valores;
}
