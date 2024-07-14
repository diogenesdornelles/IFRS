export type CelulaType = number;

/**
 *
 *
 * @export
 * @class Celula
 * @template T
 */
export class Celula<T> {
  private _elemento: T;
  private _anterior: Celula<T> | null;
  private _proxima: Celula<T> | null;

  /**
   * Creates an instance of Celula.
   * @param {T} elemento
   * @param {(Celula<T> | null)} proxima
   * @param {(Celula<T> | null)} anterior
   * @memberof Celula
   */
  constructor(elemento: T, proxima: Celula<T> | null, anterior: Celula<T> | null) {
    this._elemento = elemento;
    this._anterior = anterior;
    this._proxima = proxima;
  }

  /**
   * Retorna o elemento
   *
   * @type {T}
   * @memberof Celula
   */
  public get elemento(): T {
    return this._elemento;
  }
  /**
   * Seta o elemento
   *
   * @memberof Celula
   */
  public set elemento(elemento: T) {
    this._elemento = elemento;
  }

  /**
   * Retorna a próxima célula
   *
   * @type {(Celula<T> | null)}
   * @memberof Celula
   */
  public get proxima(): Celula<T> | null {
    return this._proxima;
  }

  /**
   * Seta a próxima célula
   *
   * @memberof Celula
   */
  public set proxima(celula: Celula<T> | null) {
    this._proxima = celula;
  }
  /**
   * Retorna a célula anterior
   *
   * @type {(Celula<T> | null)}
   * @memberof Celula
   */
  public get anterior(): Celula<T> | null {
    return this._anterior;
  }

  /**
   * Seta a célula anterior
   *
   * @memberof Celula
   */
  public set anterior(value: Celula<T> | null) {
    this._anterior = value;
  }
}
