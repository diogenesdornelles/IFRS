export default abstract class Pessoa {
  private _id: string;
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _cpf: string;
  private _rg: string;
  private _dataNascimento: string;
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    rg: string,
    dataNascimento: string,
  ) {
    (this._id = id),
      (this._nome = nome),
      (this._email = email),
      (this._telefone = telefone),
      (this._cpf = cpf),
      (this._rg = rg),
      (this._dataNascimento = dataNascimento);
  }
  get id(): string {
    return this._id;
  }
  set id(valor: string) {
    this._id = valor;
  }
  get nome(): string {
    return this._nome;
  }
  set nome(valor: string) {
    this._nome = valor;
  }
  get email(): string {
    return this._email;
  }
  set email(valor: string) {
    this._email = valor;
  }
  get telefone(): string {
    return this._telefone;
  }
  set telefone(valor: string) {
    this._telefone = valor;
  }
  get cpf(): string {
    return this._cpf;
  }
  set cpf(valor: string) {
    this._cpf = valor;
  }
  get rg(): string {
    return this._rg;
  }
  set rg(valor: string) {
    this._rg = valor;
  }
  get dataNascimento(): string {
    return this._dataNascimento;
  }
  set dataNascimento(valor: string) {
    this._dataNascimento = valor;
  }
}
