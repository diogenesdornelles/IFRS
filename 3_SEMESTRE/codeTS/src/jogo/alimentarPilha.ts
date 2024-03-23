import { Pilha } from '../pilha';
import { gerarNumeroRandom } from './gerarNumeroRandom';

export const alimentarPilha = (pilha: Pilha<number>, qtn: number): Pilha<number> => {
  for (let i = 0; i < qtn; i++) {
    pilha.empilhar(gerarNumeroRandom());
  }
  return pilha;
};
