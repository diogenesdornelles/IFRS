// queue, first in first out. Enfileirar é igual a empilhar. Desinfileirar, sai o primeiro. É o contrário de desimpilhar, em que sai o último.

import { Cliente } from './cliente';

export class Fila {
  private _elementos: Array<Cliente>;
  private _tamanho: number;
  constructor() {
    this._elementos = [];
    this._tamanho = 0;
  }
  public get elementos(): Array<Cliente> {
    return this._elementos;
  }

  public get tamanho(): number {
    return this._tamanho;
  }
  protected _enfileirar(elemento: Cliente): boolean {
    this._elementos[this._tamanho] = elemento;
    this._tamanho++;
    return true;
  }
  protected _estaVazia() {
    return this._tamanho === 0;
  }
  protected _proximoElemento(): Cliente | number {
    if (this._tamanho > 0) {
      return this._elementos[0];
    } else {
      return -1;
    }
  }
  protected _desenfileirar(): Cliente {
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
  }
  protected _toString(): string {
    let repr = '[';
    for (let i = 0; i < this._tamanho - 1; i++) {
      repr += this._elementos[i].toString();
      repr += ',';
    }
    if (this._tamanho > 0) {
      repr += this._elementos[this._tamanho - 1];
    }
    repr += ']';
    return repr;
  }
}
