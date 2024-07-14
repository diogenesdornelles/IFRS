import { Celula } from "./celula"
/**
 *
 *
 * @export
 * @class ListaDuplamenteLigada
 * @template T
 */
export class ListaDuplamenteLigada<T> {
  private _primeira: Celula<T> | null;
  private _ultima: Celula<T> | null;
  private _totalDeElementos: number;
  /**
   * Creates an instance of ListaDuplamenteLigada.
   * @memberof ListaDuplamenteLigada
   */
  constructor() {
    this._primeira = null;
    this._ultima = null;
    this._totalDeElementos = 0;
  }
  /**
   * Retorna o primeiro elemento
   *
   * @type {(Celula<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  public get primeira(): Celula<T> | null {
    return this._primeira;
  }

  /**
   * Seta o primeiro elementos
   *
   * @memberof ListaDuplamenteLigada
   */
  public set primeira(celula: Celula<T> | null) {
    this._primeira = celula;
  }

  /**
   * Retorna o total de elementos
   *
   * @type {number}
   * @memberof ListaDuplamenteLigada
   */
  public get totalDeElemento(): number {
    return this._totalDeElementos;
  }

  /**
   * Seta o total de elementos
   *
   * @memberof ListaDuplamenteLigada
   */
  public set totalDeElemento(value: number) {
    this._totalDeElementos = value;
  }

  /**
   * Retorna a última célula
   *
   * @type {(Celula<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  public get ultima(): Celula<T> | null {
    return this._ultima;
  }

  /**
   * Seta a última célula
   *
   * @memberof ListaDuplamenteLigada
   */
  public set ultima(value: Celula<T> | null) {
    this._ultima = value;
  }
  /**
   * Retorna o tamanho da lista
   *
   * @return {*}  {number}
   * @memberof ListaDuplamenteLigada
   */
  public getTamanho(): number {
    return this._totalDeElementos
  }

  /**
   * Adiciona elemento ao fim
   *
   * @param {T} elemento
   * @return {*}  {void}
   * @memberof ListaDuplamenteLigada
   */
  public adicionaNoFim(elemento: T): void {
    // cria uma célula com o elemento fornecido, definindo próximo como null
    const celula: Celula<T> = new Celula(elemento, null, null);
    if (this._ultima) {
      // Se último da lista ligada é do tipo célula, faz ele apontar para próxima célula a ser inserida
      this._ultima.proxima = celula;
      // celula, que será a última, apontará para a última, que será a anterior
      celula.anterior = this.ultima;
      // Atualiza lista ligada para que o valor do atributo último seja a última célula inserida
      this._ultima = celula;

    } else {
      // Por outro lado, se não houver célula na lista, insere-a como primeira e última
      this._primeira = celula;
      this._ultima = celula;
    }
    // incrementa o totalDeElementos
    this._totalDeElementos++;
    return;
  }

  /**
   * Adiciona elemento no começo
   *
   * @param {T} elemento
   * @memberof ListaDuplamenteLigada
   */
  public adicionaNoComeco(elemento: T): void {
    // cria uma célula a partir do elemento
    const celula: Celula<T> = new Celula(elemento, null, null);
    // se não houver uma primeira célula, insere
    if (!this._primeira) {
      this._primeira = celula;
      this._ultima = celula;
    } else {
      // a proxima de célula criada será a primeira
      celula.proxima = this._primeira;
      // a primeira terá como anterior celula criada
      this._primeira.anterior = celula;
      // primeira será a célula criada
      this._primeira = celula;
    }
    this._totalDeElementos++;
  }

  /**
   * Remove elemento do fim
   *
   * @memberof ListaDuplamenteLigada
   */
  public removeDoFim(): void {
    // se houve ultima
    if (this._ultima) {
      // caso última igual primeira, limpa lista
      if (this._primeira === this._ultima) {
        this._primeira = null;
        this._ultima = null;
      } else {
        // se última tiver uma celula anterior
        if (this._ultima.anterior) {
          // previo será a anterior da última
          let previo = this._ultima.anterior;
          // a próxima de previo será null, encerrando a lista
          previo.proxima = null;
          // define ultima como previo
          this._ultima = previo;
        }
      }
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
        // Se diferentes, existem ao menos dois elementos. A primeira passa a ser o seu próximo.
        this._primeira = this._primeira.proxima;
        if (this._primeira && this._primeira.anterior) {
          this._primeira.anterior = null;
        }
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
   *
   *
   * @param {number} posicao
   * @param {T} elemento
   * @return {*}  {void}
   * @memberof ListaDuplamenteLigada
   */
  public adicionaPorPosicao(posicao: number, elemento: T): void {
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
    const celula: Celula<T> = new Celula(elemento, null, null);
    // obtem célula anterior e posterior
    const celulaPrevia = this._obtemCelula(posicao - 1);
    const celulaPosterior = this._obtemCelula(posicao);
    // insere em meio a elas
    if (celulaPrevia && celulaPosterior) {
      celula.anterior = celulaPrevia
      celulaPrevia.proxima = celula;
      celula.proxima = celulaPosterior;
      celulaPosterior.anterior = celula
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
      celulaPosterior.anterior = celulaPrevia;
    }
    this._totalDeElementos--;
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
   *
   *
   * @private
   * @param {number} posicao
   * @return {*}  {(Celula<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  private _obtemCelula(posicao: number): Celula<T> | null {
    let count = 0;
    let celulaAtual: Celula<T> | null = this._primeira;
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
    let celulaAtual: Celula<T> | null = this._primeira;

    while (celulaAtual) {
      if (celulaAtual.elemento && celulaAtual.elemento instanceof Object && celulaAtual.elemento.hasOwnProperty('toString')) {
        strRepr += `${celulaAtual.elemento.toString()}`;
      }
      strRepr += `${String(celulaAtual.elemento)}`;
      if (celulaAtual.proxima) {
        strRepr += ', ';
      }
      celulaAtual = celulaAtual.proxima;
    }

    strRepr += ']';
    return strRepr;
  }

  /**
   *
   *
   * @param {number} posicao
   * @return {*}  {(T | undefined)}
   * @memberof ListaDuplamenteLigada
   */
  public obtemElemento(posicao: number): T | undefined {
    if (this._posicaoOcupada(posicao)) {
      const celula = this._obtemCelula(posicao);
      if (celula) {
        return celula.elemento;
      }
    }
    return undefined;
  }

  /**
   *
   *
   * @param {T} elemento
   * @return {*}  {boolean}
   * @memberof ListaDuplamenteLigada
   */
  public contem(elemento: T): boolean {
    let celulaAtual: Celula<T> | null = this._primeira;
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
