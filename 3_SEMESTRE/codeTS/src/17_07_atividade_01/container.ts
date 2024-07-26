/**
 *   Primeiramente, no objetivo de reduzir a redundância de código, foram declarados junto ao
 * container genérico (Container) os atributos e alguns métodos comuns que serão extendidos
 * à pilha e à fila, pois estas necessitam da manipulação de mesmos estados e comportamentos;
 *   Relegou-se às classes filhas concretas a implementação de outros métodos abstratos, cujo modo de
 * funcionamento é particular a cada qual;
 *   Houve a implementação de generics para lidar com elementos manipulados pelos containers; e
 *   Foi adicionado documentação e comentário para melhorar a legibilidade.
 */
/**
 * Classe abstrata que representa um contêiner genérico.
 * @template T O tipo genérico dos elementos no contêiner.
 */
export abstract class Container<T> {
  protected _elementos: Array<T>; // Array para armazenar os elementos
  protected _tamanho: number; // Tamanho atual do contêiner

  /**
   * Construtor da classe Container.
   * Inicializa o array de elementos e define o tamanho como 0.
   */
  constructor() {
    this._elementos = [];
    this._tamanho = 0;
  }

  /**
   * Retorna os elementos do contêiner.
   * @returns Um array contendo os elementos do contêiner.
   */
  public get elementos(): Array<T> {
    return this._elementos;
  }

  /**
   * Retorna o tamanho atual do contêiner.
   * @returns O tamanho atual do contêiner.
   */
  public get tamanho(): number {
    return this._tamanho;
  }

  /**
   * Adiciona um elemento ao contêiner.
   * @param elemento O elemento a ser adicionado ao contêiner, do tipo genérico T.
   * @returns Verdadeiro se o elemento foi adicionado com sucesso, falso caso contrário.
   */
  public adicionar(elemento: T): boolean {
    this._elementos[this._tamanho] = elemento;
    this._tamanho++;
    return true; // Sempre retorna verdadeiro, a menos que haja uma validação específica
  }

  /**
   * Verifica se o contêiner está vazio.
   * @returns Verdadeiro se o contêiner estiver vazio, falso caso contrário.
   */
  public estaVazia(): boolean {
    return this._tamanho === 0;
  }

  /**
   * Método abstrato para obter o elemento no topo do contêiner.
   * @returns O elemento no topo do contêiner.
   */
  abstract topo(): T;

  /**
   * Método abstrato para remover e retornar o elemento no topo do contêiner.
   * @returns O elemento removido do topo do contêiner.
   */
  abstract remover(): T;

  /**
   * Retorna uma representação em string do contêiner.
   * @returns Uma string representando os elementos do contêiner.
   */
  public toString(): string {
    let repr = "";
    while (!this.estaVazia()) {
      repr += this.remover();
    }
    return repr;
  }
}
