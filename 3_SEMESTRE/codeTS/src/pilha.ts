import { Container } from './container';

/**
 * Classe que representa uma estrutura de dados de pilha.
 * @typeparam T Tipo dos elementos armazenados na pilha.
 */
export class Pilha<T> extends Container<T> {
  /**
   * Construtor da classe Pilha.
   * Inicializa a pilha como vazia.
   */
  constructor() {
    super(); // Chama o construtor da classe pai (Container)
  }

  /**
   * Retorna o elemento do topo da pilha sem removê-lo.
   * @returns O elemento do topo da pilha ou undefined se a pilha estiver vazia.
   */
  public topo() {
    if (this.estaVazia()) {
      return this._elementos[this._tamanho]; // Retorna undefined se a pilha estiver vazia
    }
    return this._elementos[this._tamanho - 1]; // Retorna o elemento do topo da pilha
  }

  /**
   * Remove e retorna o elemento do topo da pilha.
   * @returns O elemento do topo da pilha ou undefined se a pilha estiver vazia.
   */
  public remover(): T {
    if (this._tamanho > 0) {
      const top = this._elementos[this._tamanho - 1]; // Armazena o elemento do topo da pilha
      this._tamanho--; // Decrementa o tamanho da pilha
      return top; // Retorna o elemento do topo removido
    } else {
      return undefined as T; // Retorna undefined se a pilha estiver vazia
    }
  }
}

let pilhaNumbers = new Pilha<number>();
let pilhaStrings = new Pilha<string>();

pilhaNumbers.adicionar(1);
pilhaStrings.adicionar('Joao');

console.log(pilhaNumbers.estaVazia());
console.log(pilhaStrings.estaVazia());

console.log(pilhaNumbers.toString());
console.log(pilhaStrings.toString());
