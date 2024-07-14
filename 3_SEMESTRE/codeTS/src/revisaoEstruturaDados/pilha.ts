import Container from './container';

export default class Pilha<T> extends Container<T> {
  constructor() {
    super();
  }
  public topo(): T {
    return this.elementos[0];
  }
  public remover(): T {
    const removido = this.elementos[0];
    for (let i = 1; i < this.tamanho; i++) {
      this.elementos[i - 1] = this.elementos[i];
      this.tamanho--;
    }
    return removido;
  }
}
