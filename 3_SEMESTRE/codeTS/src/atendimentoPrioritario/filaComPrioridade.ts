// queue, first in first out. Enfileirar é igual a empilhar. Desinfileirar, sai o primeiro. É o contrário de desimpilhar, em que sai o último.

import { Cliente } from "./cliente";

export class FilaComPrioridade {
  private _clientes: Array<Cliente>;
  private _tamanho: number;
  constructor() {
    this._clientes = [];
    this._tamanho = 0;
  }
  public get clientes(): Array<Cliente> {
    return this._clientes;
  }

  public get tamanho(): number {
    return this._tamanho;
  }
  protected _verificarPrioridade(cliente: Cliente): Cliente {
    if (cliente.idade >= 60 || cliente.gravida || cliente.pcd) {
      cliente.prioritario = true;
    }
    return cliente;
  }

  protected _enfileirar(cliente: Cliente): boolean {
    let _cliente = this._verificarPrioridade(cliente);
    if (_cliente.prioritario) {
      return this._enfileirarComPrioridade(_cliente);
    }
    this._clientes[this._tamanho] = _cliente;
    this._tamanho++;
    return true;
  };
  protected _enfileirarComPrioridade(cliente: Cliente): boolean {
    let novaFila = [];
    for (let i = 0; i < this.tamanho; i++){
      if (this._clientes[i].prioritario) {
        novaFila[i] = this._clientes[i];
      }
    }
    novaFila[novaFila.length] = cliente;
    let len = novaFila.length;
    for (let i = len - 1; i < this.tamanho; i++) {
      novaFila[i + 1] = this._clientes[i];
    }
    this._clientes = novaFila;
    this._tamanho++;
    return true;
  };

  protected _estaVazia() {
    return this._tamanho === 0;
  };
  protected _proximoElemento(): string {
    if (this._tamanho > 0) {
      return this._clientes[0].toString();
    } else {
      return '[]';
    };
  };
  protected _desenfileirar(): Cliente {
    if (this._tamanho > 0) {
      const top = this._clientes[0];
      for (let i = 0; i < this._tamanho; i++) {
        this._clientes[i] = this._clientes[i + 1];
      }
      this._tamanho--;
      return top;
    } else {
      this._clientes = [];
      return this._clientes[0];
    }
  };
  protected _toString(): string {
    let repr = '[';
    for (let i = 0; i < this._tamanho - 1; i++) {
      repr += this._clientes[i].toString();
      repr += ',';
    }
    if (this._tamanho > 0) {
      repr += this._clientes[this._tamanho - 1];
    }
    repr += ']';
    return repr;
  };
}