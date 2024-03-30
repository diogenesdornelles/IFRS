// queue, first in first out. Enfileirar é igual a empilhar. Desinfileirar, sai o primeiro. É o contrário de desimpilhar, em que sai o último.

export class Fila<T> {
  private _elementos: Array<T>;
  private _tamanho: number;
  constructor() {
    this._elementos = [];
    this._tamanho = 0;
  }
  public get elementos(): Array<T> {
    return this._elementos;
  }

  public get tamanho(): number {
    return this._tamanho;
  }
  public enfileirar(elemento: T): boolean {
    this._elementos[this._tamanho] = elemento;
    this._tamanho++;
    return true;
  };
  public estaVazia() {
    return this._tamanho === 0;
  };
  public proximoElemento(): T {
    if (this._tamanho > 0) {
      return this._elementos[0];
    } else {
      return -1 as T;
    };
  };
  public desenfileirar(): T {
    if (this._tamanho > 0) {
      const top = this._elementos[0];
      for (let i = 0; i < this._tamanho; i++) {
        this._elementos[i] = this._elementos[i + 1];
      }
      this._tamanho--;
      return top;
    } else {
      this._elementos = [];
      return this._elementos[0];
    }
  };
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
  };
}