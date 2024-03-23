import { Pilha } from '../pilha';
import { alimentarPilha } from './alimentarPilha';

let pilha = new Pilha<number>();

test('pilha deve ter tamanho 3', () => {
  pilha = alimentarPilha(pilha, 3);
  expect(pilha.getTamanho()).toBe(3);
});
