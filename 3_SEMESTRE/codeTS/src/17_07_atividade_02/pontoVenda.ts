import { LocalInfo } from "./localInfo";

/**
 *
 *
 * @export
 * @class PontoVenda
 * @template T
 */
export class PontoVenda<T extends LocalInfo> {
  private _localInfo: T;
  private _anterior: PontoVenda<T> | null;
  private _proxima: PontoVenda<T> | null;

  /**
   * Creates an instance of PontoVenda.
   * @param {T} localInfo
   * @param {(PontoVenda<T> | null)} proxima
   * @param {(PontoVenda<T> | null)} anterior
   * @memberof PontoVenda
   */
  constructor(localInfo: T, proxima: PontoVenda<T> | null, anterior: PontoVenda<T> | null) {
    this._localInfo = localInfo;
    this._anterior = anterior;
    this._proxima = proxima;
  }

  /**
   * Retorna o localnfo
   *
   * @type {T}
   * @memberof PontoVenda
   */
  public get localInfo(): T {
    return this._localInfo;
  }
  /**
   * Seta o localnfo
   *
   * @memberof PontoVenda
   */
  public set localInfo(localnfo: T) {
    this._localInfo = localnfo;
  }

  /**
   * Retorna a próxima célula
   *
   * @type {(PontoVenda<T> | null)}
   * @memberof PontoVenda
   */
  public get proxima(): PontoVenda<T> | null {
    return this._proxima;
  }

  /**
   * Seta a próxima célula
   *
   * @memberof PontoVenda
   */
  public set proxima(ponto: PontoVenda<T> | null) {
    this._proxima = ponto;
  }
  /**
   * Retorna a célula anterior
   *
   * @type {(PontoVenda<T> | null)}
   * @memberof PontoVenda
   */
  public get anterior(): PontoVenda<T> | null {
    return this._anterior;
  }

  /**
   * Seta a célula anterior
   *
   * @memberof PontoVenda
   */
  public set anterior(ponto: PontoVenda<T> | null) {
    this._anterior = ponto;
  }
}
