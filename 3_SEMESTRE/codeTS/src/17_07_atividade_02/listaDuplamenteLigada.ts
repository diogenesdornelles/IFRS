import { LocalInfo } from "./localInfo";
import { PontoVenda } from "./pontoVenda";
/**
 *
 *
 * @export
 * @class ListaDuplamenteLigada
 * @template T
 */
export class ListaDuplamenteLigada<T extends LocalInfo> {
  private _primeira: PontoVenda<T> | null;
  private _ultima: PontoVenda<T> | null;
  private _totalDePontos: number;
  /**
   * Creates an instance of ListaDuplamenteLigada.
   * @memberof ListaDuplamenteLigada
   */
  constructor() {
    this._primeira = null;
    this._ultima = null;
    this._totalDePontos = 0;
  }
  /**
   * Retorna o primeiro _localInfo
   *
   * @type {(PontoVenda<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  public get primeira(): PontoVenda<T> | null {
    return this._primeira;
  }

  /**
   * Seta o primeiro _localInfos
   *
   * @memberof ListaDuplamenteLigada
   */
  public set primeira(ponto: PontoVenda<T> | null) {
    this._primeira = ponto;
  }

  /**
   * Retorna o total de _localInfos
   *
   * @type {number}
   * @memberof ListaDuplamenteLigada
   */
  public get totalDePontos(): number {
    return this._totalDePontos;
  }

  /**
   * Seta o total de _localInfos
   *
   * @memberof ListaDuplamenteLigada
   */
  public set totalDePontos(value: number) {
    this._totalDePontos = value;
  }

  /**
   * Retorna a última célula
   *
   * @type {(PontoVenda<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  public get ultima(): PontoVenda<T> | null {
    return this._ultima;
  }

  /**
   * Seta a última célula
   *
   * @memberof ListaDuplamenteLigada
   */
  public set ultima(ponto: PontoVenda<T> | null) {
    this._ultima = ponto;
  }
  /**
   * Retorna o tamanho da lista
   *
   * @return {*}  {number}
   * @memberof ListaDuplamenteLigada
   */
  public getTamanho(): number {
    return this._totalDePontos;
  }

  /**
   * Adiciona _localInfo ao fim
   *
   * @param {T} localInfo
   * @return {*}  {void}
   * @memberof ListaDuplamenteLigada
   */
  public adicionaNoFim(localInfo: T): void {
    // cria uma célula com o _localInfo fornecido, definindo próximo como null
    const ponto: PontoVenda<T> = new PontoVenda(localInfo, null, null);
    if (this._ultima) {
      // Se último da lista ligada é do tipo célula, faz ele apontar para próxima célula a ser inserida
      this._ultima.proxima = ponto;
      // ponto, que será a última, apontará para a última, que será a anterior
      ponto.anterior = this.ultima;
      // Atualiza lista ligada para que o valor do atributo último seja a última célula inserida
      this._ultima = ponto;

    } else {
      // Por outro lado, se não houver célula na lista, insere-a como primeira e última
      this._primeira = ponto;
      this._ultima = ponto;
    }
    // incrementa o totalDePontos
    this._totalDePontos++;
    return;
  }

  /**
   * Adiciona _localInfo no começo
   *
   * @param {T} _localInfo
   * @memberof ListaDuplamenteLigada
   */
  public adicionaNoComeco(_localInfo: T): void {
    // cria uma célula a partir do _localInfo
    const ponto: PontoVenda<T> = new PontoVenda(_localInfo, null, null);
    // se não houver uma primeira célula, insere
    if (!this._primeira) {
      this._primeira = ponto;
      this._ultima = ponto;
    } else {
      // a proxima de célula criada será a primeira
      ponto.proxima = this._primeira;
      // a primeira terá como anterior ponto criada
      this._primeira.anterior = ponto;
      // primeira será a célula criada
      this._primeira = ponto;
    }
    this._totalDePontos++;
  }

  /**
   * Remove _localInfo do fim
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
        // se última tiver uma ponto anterior
        if (this._ultima.anterior) {
          // previo será a anterior da última
          let previo = this._ultima.anterior;
          // a próxima de previo será null, encerrando a lista
          previo.proxima = null;
          // define ultima como previo
          this._ultima = previo;
        }
      }
      this._totalDePontos--;
    }
  }
  /**
   * Remove _localInfo do começo
   *
   * @memberof ListaLigada
   */
  public removeDoComeco(): void {
    // se existe ao menos um primeira
    if (this._primeira) {
      if (this._primeira === this._ultima) {
        // Se primeira igual ao último, há apenas um _localInfo na lista. Então, primeira e último ficam null e lista fica vazia.
        this._primeira = null;
        this._ultima = null;
      } else {
        // Se diferentes, existem ao menos dois _localInfos. A primeira passa a ser o seu próximo.
        this._primeira = this._primeira.proxima;
        if (this._primeira && this._primeira.anterior) {
          this._primeira.anterior = null;
        }
        // Se o tamanho da lista ligada é dois, ela passará a ter tamanho 1. Então, último será igual ao primeira. Caso contrário, último permanece o mesmo.
        if (this._totalDePontos === 2) {
          this._ultima = this._primeira;
        }
      }
      // decrementa total de _localInfos
      this._totalDePontos--;
      return;
    }
    return;
  }

  /**
   *
   *
   * @param {number} posicao
   * @param {T} _localInfo
   * @return {*}  {void}
   * @memberof ListaDuplamenteLigada
   */
  public adicionaPorPosicao(posicao: number, localInfo: T): void {
    // se a posição é fora do range, retorna
    if (!this._posicaoOcupada(posicao - 1)) return;
    // se não há localInfos na lista ligada ou apenas dois localInfos, e a inserção é em 0, sem célula anterior, adiciona no começo
    if (!posicao) {
      this.adicionaNoComeco(localInfo);
      return;
    }
    // se a posição for a última
    if (posicao === this._totalDePontos) {
      this.adicionaNoFim(localInfo);
      return;
    }
    // cria uma célula com o localInfo fornecido, definindo próximo como null
    const ponto: PontoVenda<T> = new PontoVenda(localInfo, null, null);
    // obtem célula anterior e posterior
    const pontoPrevia = this._obtemPontoVenda(posicao - 1);
    const pontoPosterior = this._obtemPontoVenda(posicao);
    // insere em meio a elas
    if (pontoPrevia && pontoPosterior) {
      ponto.anterior = pontoPrevia
      pontoPrevia.proxima = ponto;
      ponto.proxima = pontoPosterior;
      pontoPosterior.anterior = ponto
    }
    this._totalDePontos++;
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
    // se não há localInfos na lista ligada ou apenas dois localInfos, e a inserção é em 0, sem célula anterior, adiciona no começo
    if (posicao === 0) {
      this.removeDoComeco();
      return;
    }
    if (posicao === this._totalDePontos - 1) {
      this.removeDoFim();
      return;
    }
    // obtem célula anterior e posterior
    const pontoPrevia = this._obtemPontoVenda(posicao - 1);
    const pontoPosterior = this._obtemPontoVenda(posicao + 1);
    // remove do meio delas
    if (pontoPrevia && pontoPosterior) {
      pontoPrevia.proxima = pontoPosterior;
      pontoPosterior.anterior = pontoPrevia;
    }
    this._totalDePontos--;
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
    return posicao >= 0 && posicao < this._totalDePontos;
  }
  /**
   *
   *
   * @private
   * @param {number} posicao
   * @return {*}  {(PontoVenda<T> | null)}
   * @memberof ListaDuplamenteLigada
   */
  private _obtemPontoVenda(posicao: number): PontoVenda<T> | null {
    let count = 0;
    let pontoAtual: PontoVenda<T> | null = this._primeira;
    if (this._posicaoOcupada(posicao)) {
      while (count < posicao) {
        if (pontoAtual) {
          pontoAtual = pontoAtual.proxima;
        }
        count++;
      }
    }
    return pontoAtual;
  }

  /**
   * Retorna uma representação string dos localInfos contidos na lista
   *
   * @return {*}  {string}
   * @memberof ListaDuplamenteLigada
   */
  public toString(): string {
    if (!this._primeira) {
      return '[]';
    }

    let strRepr: string = '[';
    let pontoAtual: PontoVenda<T> | null = this._primeira;

    while (pontoAtual) {
      if (pontoAtual.localInfo && pontoAtual.localInfo instanceof Object && pontoAtual.localInfo.hasOwnProperty('toString')) {
        strRepr += `${pontoAtual.localInfo.toString()}`;
      }
      strRepr += `${String(pontoAtual.localInfo)}`;
      if (pontoAtual.proxima) {
        strRepr += ', ';
      }
      pontoAtual = pontoAtual.proxima;
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
      const ponto = this._obtemPontoVenda(posicao);
      if (ponto) {
        return ponto.localInfo;
      }
    }
    return undefined;
  }

  /**
   *
   *
   * @param {T} localInfo
   * @return {*}  {boolean}
   * @memberof ListaDuplamenteLigada
   */
  public contem(localInfo: T): boolean {
    let pontoAtual: PontoVenda<T> | null = this._primeira;
    if (pontoAtual) {
      // Enquanto houver uma próxima célula:
      while (pontoAtual) {
        // se eleemnto igual localInfo da célula, retorna true
        if (pontoAtual.localInfo === localInfo) return true;
        // substitui atual pelo próximo
        pontoAtual = pontoAtual.proxima;
      }
    }
    return false;
  }
  /**
   * Retorna a distancia total
   *
   * @return {*}  {number}
   * @memberof ListaDuplamenteLigada
   */
  public getDistancia(): number {
    let pontoAtual: PontoVenda<T> | null = this._primeira;
    let distancia = 0;
    if (pontoAtual) {
      // Enquanto houver uma próxima célula:
      while (pontoAtual) {
        // se eleemnto igual localInfo da célula, adiciona distancia
        if (pontoAtual.localInfo) {
          distancia += pontoAtual.localInfo.distancia
        }
        // substitui atual pelo próximo
        pontoAtual = pontoAtual.proxima;
      }
    }
    return distancia;
  }

  /**
 * Retorna o tempo total
 *
 * @return {*}  {number}
 * @memberof ListaDuplamenteLigada
 */
  public getTempoTotal(): number {
    let pontoAtual: PontoVenda<T> | null = this._primeira;
    let tempo = 0;
    if (pontoAtual) {
      // Enquanto houver uma próxima célula:
      while (pontoAtual) {
        // se eleemnto igual localInfo da célula, adiciona distancia
        if (pontoAtual.localInfo) {
          tempo += pontoAtual.localInfo.tempoViagem;
        }
        // substitui atual pelo próximo
        pontoAtual = pontoAtual.proxima;
      }
    }
    return tempo;
  }
}
