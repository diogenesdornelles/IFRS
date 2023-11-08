/* eslint-disable @typescript-eslint/no-unused-vars */
class Cliente {
  constructor(
    private _name: string,
    private _age: number,
  ) {}
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

abstract class ContaBancaria {
  private _numero: number;

  private _saldo: number;

  private _cliente: Cliente;

  private _dataAbertura: string;

  constructor(numero: number, saldo: number, cliente: Cliente, dataAbertura: string) {
    (this._numero = numero),
      (this._saldo = saldo),
      (this._cliente = cliente),
      (this._dataAbertura = dataAbertura);
  }

  get numero(): number {
    return this._numero;
  }

  set numero(valor: number) {
    this._numero = valor;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(valor: number) {
    this._saldo = valor;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(valor: Cliente) {
    this._cliente = valor;
  }

  get dataAbertura(): string {
    return this._dataAbertura;
  }

  set dataAbertura(valor: string) {
    this._dataAbertura = valor;
  }

  abstract sacar(valor: number): void;

  abstract depositar(valor: number): void;
}

class ContaPoupanca extends ContaBancaria {
  constructor(numero: number, saldo: number, cliente: Cliente, dataAbertura: string) {
    super(numero, saldo, cliente, dataAbertura);
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) this.saldo -= valor;
  }

  depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }
}

class ContaCorrente extends ContaBancaria {
  private _limite: number;

  constructor(
    numero: number,
    saldo: number,
    cliente: Cliente,
    dataAbertura: string,
    limite: number,
  ) {
    super(numero, saldo, cliente, dataAbertura);

    this._limite = limite;
  }

  get limite(): number {
    return this._limite;
  }

  set limite(valor: number) {
    this._limite = valor;
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo + this.limite) this.saldo -= valor;
  }

  depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }

  aumentarLimite(valor: number): void {
    this._limite += valor;
  }
}

export class Pessoa {
  private _nome: string;
  private _dataNasc: string;
  private _pai: Pessoa | null;
  private _mae: Pessoa | null;
  constructor(nome: string, dataNasc: string, pai: Pessoa | null, mae: Pessoa | null) {
    (this._nome = nome), (this._dataNasc = dataNasc), (this._pai = pai), (this._mae = mae);
  }

  getPai(): string {
    return this._pai?._nome ?? 'Não disponível';
  }

  setPai(valor: Pessoa) {
    this._pai = valor;
  }

  getMae(): string {
    return this._mae?._nome ?? 'Não disponível';
  }

  setMae(valor: Pessoa): void {
    this._mae = valor;
  }
}

const adao = new Pessoa('Adão', '17/03/1985', null, null);

const joana = new Pessoa('Joana', '05/11/1990', null, null);

const pedro = new Pessoa('Pedro', '16/06/2015', adao, joana);
