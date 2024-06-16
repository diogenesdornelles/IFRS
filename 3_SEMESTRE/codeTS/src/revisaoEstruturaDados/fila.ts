import Container from "./container";

export default class Fila<T> extends Container<T> {
  constructor() {
    super();
  }
  public topo(): T {
    if (!this.estaVazia()) {
      return this.elementos[this.tamanho - 1]
    }
    else {
      return undefined as T;
    };
  }
  public remover(): T {
    if (!this.estaVazia()) {
      let removido = this.elementos[this.tamanho - 1];
      this.tamanho--;
      return removido;
    } else {
      return undefined as T;
    }
  }
}