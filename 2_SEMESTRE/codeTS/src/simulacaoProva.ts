abstract class Pessoa {
  private _nome: string;
  private _telefone: number;
  private _email: string;

  constructor(nome: string, telefone: number, email: string) {
    (this._nome = nome), (this._telefone = telefone), (this._email = email);
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get telefone(): number {
    return this._telefone;
  }
  public set telefone(value: number) {
    this._telefone = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  abstract enviarMensagem(msg: string): void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Fisica extends Pessoa {
  private _cpf: string;
  private _datanasc: string;
  private _idade: number;

  constructor(
    nome: string,
    telefone: number,
    email: string,
    cpf: string,
    datanasc: string,
    idade: number,
  ) {
    super(nome, telefone, email);
    this._cpf = cpf;
    this._datanasc = datanasc;
    this._idade = idade;
  }

  public get cpf(): string {
    return this._cpf;
  }
  public set cpf(value: string) {
    this._cpf = value;
  }

  public get datanasc(): string {
    return this._datanasc;
  }
  public set datanasc(value: string) {
    this._datanasc = value;
  }
  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }

  enviarMensagem(msg: string): void {
    console.log(msg);
  }
}
