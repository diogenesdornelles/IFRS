import { Jogador } from './jogador';

export function getVencedor(jogadores: Array<Jogador>): Jogador {
  let maior = jogadores[0].pontuação;
  let index = 0;
  for (let i = 1; i < jogadores.length; i++) {
    if (jogadores[i].pontuação > maior) {
      maior = jogadores[i].pontuação;
      index = i;
    }
  }
  return jogadores[index];
}
