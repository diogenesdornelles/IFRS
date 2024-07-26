/**
 *
 *
 * @export
 * @class LocalInfo
 */
export class LocalInfo {
  private _nome: string;
  private _distancia: number;
  private _tempoViagem: number;
  /**
   * Creates an instance of LocalInfo.
   * @param {string} nome´nome do ponto
   * @param {number} distancia distancia do ultimo local até ele
   * @param {number} tempoViagem tempo de viagem do 
   * @memberof LocalInfo
   */
  constructor(nome: string, distancia: number, tempoViagem: number) {
    this._distancia = distancia
    this._nome = nome
    this._tempoViagem = tempoViagem
  }
  /**
   *
   *
   * @type {number}
   * @memberof LocalInfo
   */
  public get tempoViagem(): number {
    return this._tempoViagem;
  }
  /**
   *
   *
   * @memberof LocalInfo
   */
  public set tempoViagem(value: number) {
    if (typeof value !== 'number' && value < 0) {
      this._tempoViagem = 0;
      return;
    }
    this._tempoViagem = value;
  }
  /**
   *
   *
   * @type {number}
   * @memberof LocalInfo
   */
  public get distancia(): number {
    return this._distancia;
  }
  /**
   *
   *
   * @memberof LocalInfo
   */
  public set distancia(value: number) {
    if (typeof value !== 'number' && value < 0) {
      this._distancia = 0;
      return;
    }
    this._distancia = value;
  }
  /**
   *
   *
   * @type {string}
   * @memberof LocalInfo
   */
  public get nome(): string {
    return this._nome;
  }
  /**
   *
   *
   * @memberof LocalInfo
   */
  public set nome(value: string) {
    this._nome = value;
  }

  public toString(): string {
    return `Ponto de Venda=${this._nome}-${this._distancia}-${this._tempoViagem}`
  }
}