export default abstract class Container<T> {
  elementos: Array<T>;
  tamanho: number;
  constructor () {
    this.tamanho = 0;
    this.elementos = [];
  };
  public estaVazia(): boolean {
    return this.tamanho == 0;
  }
  public abstract topo(): T;
  public abstract remover(): T;      
  public adicionar(elemento: T): void {
    this.elementos[this.tamanho] = elemento;
    this.tamanho++;
  };
}