import { Container } from './container';

/**
 * Classe que representa uma estrutura de dados fila.
 * @typeparam T Tipo dos elementos armazenados na fila.
 */
export class Fila<T> extends Container<T> {
  /**
   * Construtor da classe Fila.
   * Inicializa a fila como vazia.
   */
  constructor() {
    super(); // Chama o construtor da classe pai (Container)
  }

  /**
   * Retorna o próximo elemento da fila sem removê-lo.
   * @returns O próximo elemento da fila ou undefined se a fila estiver vazia.
   */
  public topo(): T {
    if (this._tamanho > 0) {
      return this._elementos[0]; // Retorna o primeiro elemento da fila
    } else {
      return undefined as T; // Retorna undefined se a fila estiver vazia
    }
  }

  /**
   * Remove e retorna o primeiro elemento da fila.
   * @returns O primeiro elemento da fila ou undefined se a fila estiver vazia.
   */
  public remover(): T {
    if (this._tamanho > 0) {
      const top = this._elementos[0]; // Armazena o primeiro elemento da fila
      // Desloca todos os elementos uma posição para frente ( topo é em 0)
      for (let i = 0; i < this._tamanho; i++) {
        this._elementos[i] = this._elementos[i + 1];
      }
      this._tamanho--; // Decrementa o tamanho da fila
      return top; // Retorna o primeiro elemento removido
    } else {
      return undefined as T; // Retorna undefined se a fila estiver vazia
    }
  }
}

let filaNumbers = new Fila<number>();
let filaStrings = new Fila<string>();

filaNumbers.adicionar(1);
filaStrings.adicionar('Joao');

console.log(filaNumbers.estaVazia());
console.log(filaStrings.estaVazia());

console.log(filaNumbers.toString());
console.log(filaStrings.toString());
