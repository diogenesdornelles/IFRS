export class Cliente {
  private _nome: string;
  private _senha: string | null;
  private _idade: number;
  private _gravida: boolean;
  private _pcd: boolean;
  private _prioritario: boolean;

  constructor (nome: string, idade: number, gravida: boolean, pdc: boolean) {
    this._nome = nome;
    this._senha = null;
    this._idade = idade;
    this._gravida = gravida;
    this._pcd = pdc;
    this._prioritario = false;
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
  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }
  public get gravida(): boolean {
    return this._gravida;
  }
  public set gravida(value: boolean) {
    this._gravida = value;
  }
  public get pcd(): boolean {
    return this._pcd;
  }
  public set pcd(value: boolean) {
    this._pcd = value;
  }
  public get prioritario(): boolean {
    return this._prioritario;
  }
  public set prioritario(value: boolean) {
    this._prioritario = value;
  }
  toString(): string {
    return `Cliente{nome: ${this.nome}, senha: ${this.senha}, idade: ${this.idade}, gravida: ${this.gravida}, pcd: ${this.pcd}, prioritario: ${this.prioritario}}`;
}
}