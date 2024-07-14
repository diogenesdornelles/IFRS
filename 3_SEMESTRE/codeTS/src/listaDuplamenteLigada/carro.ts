
/**
 *
 *
 * @export
 * @class Carro
 */
export class Carro {
  private _modelo: string;
  public get modelo(): string {
    return this._modelo;
  }
  public set modelo(value: string) {
    this._modelo = value;
  }
  private _ano: number;
  public get ano(): number {
    return this._ano;
  }
  public set ano(value: number) {
    this._ano = value;
  }
  private _potencia;
  public get potencia() {
    return this._potencia;
  }
  public set potencia(value) {
    this._potencia = value;
  }
  constructor(modelo: string, ano: number, potencia: number) {
    this._ano = ano,
    this._modelo = modelo,
    this._potencia = potencia
  }
  /**
   * Retorna a representação de carro
   *
   * @return {*}  {string}
   * @memberof Carro
   */
  public toString(): string {
    return `Carro=${this._modelo}-${this._ano}-${this._potencia}`
  }
}