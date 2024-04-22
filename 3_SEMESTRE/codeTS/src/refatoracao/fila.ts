import { Container } from "./container";

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
   * Adiciona um elemento ao final da fila.
   * @param elemento Elemento a ser enfileirado na fila.
   * @returns true se o elemento foi enfileirado com sucesso, false caso contrário.
   */
  public adicionar(elemento: T): boolean {
    this._elementos[this._tamanho] = elemento; // Adiciona o elemento ao final do array
    this._tamanho++; // Incrementa o tamanho da fila
    return true;
  };

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
  };

  /**
   * Remove e retorna o primeiro elemento da fila.
   * @returns O primeiro elemento da fila ou undefined se a fila estiver vazia.
   */
  public remover(): T {
    if (this._tamanho > 0) {
      const top = this._elementos[0]; // Armazena o primeiro elemento da fila
      // Desloca todos os elementos uma posição para frente
      for (let i = 0; i < this._tamanho; i++) {
        this._elementos[i] = this._elementos[i + 1];
      }
      this._tamanho--; // Decrementa o tamanho da fila
      return top; // Retorna o primeiro elemento removido
    } else {
      this._elementos = []; // Se a fila estiver vazia, reinicializa o array
      return undefined as T; // Retorna undefined se a fila estiver vazia
    }
  };
}