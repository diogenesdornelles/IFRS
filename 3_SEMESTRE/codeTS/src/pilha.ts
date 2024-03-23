// first in last out - FILO

export class Pilha<T> {
  private _elementos: Array<T>;
  private _tamanho: number;
  constructor() {
    this._elementos = [];
    this._tamanho = 0;
  }
  public topo() {
    if (this.estavazia()) {
      return this._elementos[this._tamanho];
    }
    return this._elementos[this._tamanho - 1];
  }
  public empilhar(elemento: T) {
    this._elementos[this._tamanho] = elemento;
    this._tamanho++;
  }
  public desempilhar(): T {
    if (this._tamanho > 0) {
      const top = this._elementos[this._tamanho - 1];
      const elementos = [];
      for (let i = 0; i < this._tamanho - 1; i++) {
        elementos[i] = this._elementos[i];
      }
      this._tamanho--;
      return top;
    } else {
      this._elementos = [];
      return this._elementos[0];
    }
  }
  public getTamanho(): number {
    return this._tamanho;
  }
  public estavazia(): boolean {
    return this._tamanho === 0;
  }
  public toString(): string {
    let repr = '[';
    for (let i = 0; i < this._tamanho - 1; i++) {
      repr += String(this._elementos[i]);
      repr += ',';
    }
    if (this._tamanho > 0) {
      repr += this._elementos[this._tamanho - 1];
    }
    repr += ']';
    return repr;
  }
}
