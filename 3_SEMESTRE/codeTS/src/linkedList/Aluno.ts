/**
 *
 *
 * @export
 * @class Aluno
 */
export class Aluno {
  private _nome: string;
  /**
   *
   *
   * @type {string}
   * @memberof Aluno
   */
  public get nome(): string {
    return this._nome;
  }
  /**
   *
   *
   * @memberof Aluno
   */
  public set nome(value: string) {
    this._nome = value;
  }
  private _idade: number;
  /**
   *
   *
   * @type {number}
   * @memberof Aluno
   */
  public get idade(): number {
    return this._idade;
  }
  /**
   *
   *
   * @memberof Aluno
   */
  public set idade(value: number) {
    this._idade = value;
  }
  /**
   * Creates an instance of Celula.
   * @param {CelulaType} elemento
   * @memberof Celula
   */
  constructor(nome: string, idade: number) {
    this._nome = nome;
    this._idade = idade;
  }
}
