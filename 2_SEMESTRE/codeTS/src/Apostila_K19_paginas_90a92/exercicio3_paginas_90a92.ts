// exercicio3_paginas_90a92 e exercicio7_paginas_90a92

import Funcionario from './exercicio2_paginas_90a92';

export class Gerente extends Funcionario {
  private _usuario: string;
  private _senha: string;

  constructor(nome: string, salario: number, usuario: string, senha: string) {
    super(nome, salario);
    this._usuario = usuario;
    this._senha = senha;
  }
  public get usuario(): string {
    return this._usuario;
  }
  public set usuario(value: string) {
    this._usuario = value;
  }

  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }
  public override calculaBonificacao(): number {
    return this.salario * 0.6 + 100;
  }
}

export class Telefonista extends Funcionario {
  private _estacaoDeTrabalho: number;
  constructor(nome: string, salario: number, estacaoDeTrabalho: number) {
    super(nome, salario);
    this._estacaoDeTrabalho = estacaoDeTrabalho;
  }
  public get estacaoDeTrabalho(): number {
    return this._estacaoDeTrabalho;
  }
  public set estacaoDeTrabalho(value: number) {
    this._estacaoDeTrabalho = value;
  }
}

export class Secretaria extends Funcionario {
  private _ramal: number;
  constructor(nome: string, salario: number, ramal: number) {
    super(nome, salario);
    this._ramal = ramal;
  }
  public get ramal(): number {
    return this._ramal;
  }
  public set ramal(value: number) {
    this._ramal = value;
  }
}
