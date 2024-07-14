export type CelulaType = number;
/**
 *
 *
 * @export
 * @class Celula
 */
export class Celula {
  private _elemento: CelulaType;
  private _proxima: Celula | null;
  /**
   * Creates an instance of Celula.
   * @param {CelulaType} elemento
   * @memberof Celula
   */
  constructor(elemento: CelulaType, proxima: Celula | null) {
    this._elemento = elemento;
    this._proxima = proxima;
  }
  /**
   * Retorna elemento
   *
   * @type {CelulaType}
   * @memberof Celula
   */
  public get elemento(): CelulaType {
    return this._elemento;
  }
  /**
   * Substitui elemento
   *
   * @memberof Celula
   */
  public set elemento(elemento: CelulaType) {
    this._elemento = elemento;
  }
  /**
   * Retorna próxima célula
   *
   * @type {(Celula | null)}
   * @memberof Celula
   */
  public get proxima(): Celula | null {
    return this._proxima;
  }
  /**
   * Substitui próxima célula
   *
   * @memberof Celula
   */
  public set proxima(celula: Celula | null) {
    this._proxima = celula;
  }
}
