export class Cliente {
  private _nome: string;
  private _senha: string | null;
  constructor (nome: string) {
    this._nome = nome;
    this._senha = null;
  } 
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get senha(): string | null {
    return this._senha;
  }
  public set senha(value: string | null) {
    this._senha = value;
  }
  toString(): string {
    return `Cliente{nome: ${this.nome}, senha: ${this.senha}}`;
}
}