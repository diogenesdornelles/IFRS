import { Celula, CelulaType } from './celulaAluno';

/**
 *
 *
 * @export
 * @class ListaLigada unidirecional
 */
export class ListaLigadaAluno {
  private _primeira: Celula | null;
  private _ultima: Celula | null;
  private _totalDeElementos: number;
  /**
   * Creates an instance of ListaLigada.
   * @memberof ListaLigada
   */
  constructor() {
    this._primeira = null;
    this._ultima = null;
    this._totalDeElementos = 0;
  }
  /**
   * Retorna primeira célula
   *
   * @readonly
   * @type {(Celula | null)}
   * @memberof ListaLigada
   */
  public get primeira(): Celula | null {
    return this._primeira;
  }
  /**
   * Substitui primeira célula
   *
   * @memberof ListaLigada
   */
  public set primeira(celula: Celula | null) {
    this._primeira = celula;
  }
  /**
   * Retorna total de elementos
   *
   * @type {number}
   * @memberof ListaLigada
   */
  public get totalDeElemento(): number {
    return this._totalDeElementos;
  }
  /**
   * Substitui total de elementos
   *
   * @memberof ListaLigada
   */
  public set totalDeElemento(value: number) {
    this._totalDeElementos = value;
  }
  /**
   * Retorna última célula
   *
   * @readonly
   * @type {(Celula | null)}
   * @memberof ListaLigada
   */
  public get ultima(): Celula | null {
    return this._ultima;
  }

  /**
   * Substitui última célula
   *
   * @memberof ListaLigada
   */
  public set ultima(value: Celula | null) {
    this._ultima = value;
  }

  /**
   * Adiciona elemento ao final
   *
   * @param {CelulaType} elemento
   * @return {*}  {void}
   * @memberof ListaLigada
   */
  public adicionaNoFim(elemento: CelulaType): void {
    // cria uma célula com o elemento fornecido, definindo próximo como null
    const celula: Celula = new Celula(elemento, null);
    if (this._ultima) {
      // Se último da lista ligada é do tipo célula, faz ele apontar para próxima célula a ser inserida
      this._ultima.proxima = celula;
      // Atualiza lista ligada para que o valor do atributo último seja a última célula inserida
      this._ultima = celula;
    } else {
      // Por outro lado, se não houver célula na lista, insere-a como primeira e última
      this._primeira = celula;
      this._ultima = celula;
    }
    // incrementa o tamanho
    this._totalDeElementos++;
    return;
  }
  /**
   * Adiciona elemento no começo
   *
   * @param {CelulaType} elemento
   * @return {*}  {void}
   * @memberof ListaLigada
   */
  public adicionaNoComeco(elemento: CelulaType): void {
    // cria uma célula com o elemento fornecido, definindo próximo como null
    const celula: Celula = new Celula(elemento, null);
    if (!this._primeira) {
      // Se vazia a lista, define a célula a ser inserida como primeira e última
      this._primeira = celula;
      this._ultima = celula;
    } else {
      // Por outro lado, faz atributo proxima da celula a ser inserida apontar para a primeira, a qual se torna a segunda
      celula.proxima = this._primeira;
      // substitui primeira célula da lista ligada pela célula a ser inserida
      this._primeira = celula;
    }
    // incrementa o tamanho
    this._totalDeElementos++;
    return;
  }

  /**
   * Remove elemento no final
   *
   * @return {*}  {void}
   * @memberof ListaLigada
   */
  public removeDoFim(): void {
    if (this._ultima) {
      // se primeira igual último, há só um elemento
      if (this._primeira === this._ultima) {
        this._primeira = null;
        this._ultima = null;
      } else {
        let celulaAtual: Celula | null = this._primeira;
        let temp = null;
        // Se há uma primeira célula
        if (celulaAtual) {
          // Enquanto houver uma próxima célula (próximo não for nulo, ou seja, última célula):
          while (celulaAtual.proxima) {
            // guarda Celula anterior em temp
            temp = celulaAtual;
            // substitui atual pelo próximo
            celulaAtual = celulaAtual.proxima;
          }
          if (temp) {
            // remove último
            temp.proxima = null;
            // o último será a penpultima célula
            this._ultima = temp;
          }
        }
      }
      // decrementa tamanho da lista
      this._totalDeElementos--;
    }
  }
  /**
   * Remove elemento do começo
   *
   * @memberof ListaLigada
   */
  public removeDoComeco(): void {
    // se existe ao menos um primeira
    if (this._primeira) {
      if (this._primeira === this._ultima) {
        // Se primeira igual ao último, há apenas um elemento na lista. Então, primeira e último ficam null e lista fica vazia.
        this._primeira = null;
        this._ultima = null;
      } else {
        // Se diferentes, existem ao menos dois elementos. O primeira passa a ser o seu próximo.
        this._primeira = this._primeira.proxima;
        // Se o tamanho da lista ligada é dois, ela passará a ter tamanho 1. Então, último será igual ao primeira. Caso contrário, último permanece o mesmo.
        if (this._totalDeElementos === 2) {
          this._ultima = this._primeira;
        }
      }
      // decrementa total de elementos
      this._totalDeElementos--;
      return;
    }
    return;
  }
  /**
   * Retorna true se a posição fornecida está na lista. Caso contrário, false
   *
   * @private
   * @param {number} posicao
   * @return {*}  {boolean}
   * @memberof ListaLigada
   */
  private _posicaoOcupada(posicao: number): boolean {
    return posicao >= 0 && posicao < this._totalDeElementos;
  }
  /**
   * Retorna uma célula, conforme posição passada como parâmetro.
   *
   * @private
   * @param {number} posicao
   * @return {*}  {(Celula | null)}
   * @memberof ListaLigada
   */
  private _obtemCelula(posicao: number): Celula | null {
    let count = 0;
    let celulaAtual: Celula | null = this._primeira;
    if (this._posicaoOcupada(posicao)) {
      while (count < posicao) {
        if (celulaAtual) {
          celulaAtual = celulaAtual.proxima;
        }
        count++;
      }
    }
    return celulaAtual;
  }
  /**
   * Adiciona elemmento na lista ligada de acordo com a posição
   *
   * @param {number} posicao
   * @param {CelulaType} elemento
   * @memberof ListaLigada
   */
  public adicionaPorPosicao(posicao: number, elemento: CelulaType): void {
    // se a posição é fora do range, retorna
    if (!this._posicaoOcupada(posicao - 1)) return;
    // se não há elementos na lista ligada ou apenas dois elementos, e a inserção é em 0, sem célula anterior, adiciona no começo
    if (!posicao) {
      this.adicionaNoComeco(elemento);
      return;
    }
    // se a posição for a última
    if (posicao === this._totalDeElementos) {
      this.adicionaNoFim(elemento);
      return;
    }
    // cria uma célula com o elemento fornecido, definindo próximo como null
    const celula: Celula = new Celula(elemento, null);
    // obtem célula anterior e posterior
    const celulaPrevia = this._obtemCelula(posicao - 1);
    const celulaPosterior = this._obtemCelula(posicao);
    // insere em meio a elas
    if (celulaPrevia && celulaPosterior) {
      celulaPrevia.proxima = celula;
      celula.proxima = celulaPosterior;
    }
    this._totalDeElementos++;
    return;
  }
  /**
   * Remove célula da lista ligada de acordo com a posição
   *
   * @param {number} posicao
   * @return {*}  {void}
   * @memberof ListaLigada
   */
  public removePorPosicao(posicao: number): void {
    // se a posição é fora do range, retorna
    if (!this._posicaoOcupada(posicao)) return;
    // se não há elementos na lista ligada ou apenas dois elementos, e a inserção é em 0, sem célula anterior, adiciona no começo
    if (posicao === 0) {
      this.removeDoComeco();
      return;
    }
    if (posicao === this._totalDeElementos - 1) {
      this.removeDoFim();
      return;
    }
    // obtem célula anterior e posterior
    const celulaPrevia = this._obtemCelula(posicao - 1);
    const celulaPosterior = this._obtemCelula(posicao + 1);
    // remove do meio delas
    if (celulaPrevia && celulaPosterior) {
      celulaPrevia.proxima = celulaPosterior;
    }
    this._totalDeElementos--;
    return;
  }

  /**
   * Retorna uma representação string dos elementos contidos na lista
   *
   * @return {*}  {string}
   * @memberof ListaLigada
   */
  public toString(): string {
    if (!this._primeira) {
      return '[]';
    }

    let strRepr: string = '[';
    let celulaAtual: Celula | null = this._primeira;

    while (celulaAtual) {
      strRepr += `{ nome: ${celulaAtual.elemento.nome}, idade: ${celulaAtual.elemento.idade} }`;
      if (celulaAtual.proxima) {
        strRepr += ', ';
      }
      celulaAtual = celulaAtual.proxima;
    }

    strRepr += ']';
    return strRepr;
  }
  /**
   * Retorna o elemento de acordo com a posição. Se o elemento não estivar na lista, retorna undefined
   *
   * @param {number} posicao
   * @return {*}  {(CelulaType | undefined)}
   * @memberof ListaLigada
   */
  public obtemElemento(posicao: number): CelulaType | undefined {
    if (this._posicaoOcupada(posicao)) {
      const celula = this._obtemCelula(posicao);
      if (celula) {
        return celula.elemento;
      }
    }
    return undefined;
  }
  /**
   * Retorna true se o elemento está na lista ligada. Caso contrário, false.
   *
   * @param {CelulaType} elemento
   * @return {*}  {boolean}
   * @memberof ListaLigada
   */
  public contem(elemento: CelulaType): boolean {
    let celulaAtual: Celula | null = this._primeira;
    if (celulaAtual) {
      // Enquanto houver uma próxima célula:
      while (celulaAtual) {
        // se eleemnto igual elemento da célula, retorna true
        if (celulaAtual.elemento === elemento) return true;
        // substitui atual pelo próximo
        celulaAtual = celulaAtual.proxima;
      }
    }
    return false;
  }
}
