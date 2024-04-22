import { Container } from "./container";

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
      const elementos = []; // Array temporário para armazenar os elementos da pilha sem o topo
      // Copia os elementos da pilha para o array temporário, exceto o topo
      for (let i = 0; i < this._tamanho - 1; i++) {
        elementos[i] = this._elementos[i];
      }
      this._tamanho--; // Decrementa o tamanho da pilha
      return top; // Retorna o elemento do topo removido
    } else {
      this._elementos = []; // Se a pilha estiver vazia, reinicializa o array
      return undefined as T; // Retorna undefined se a pilha estiver vazia
    }
  }
}