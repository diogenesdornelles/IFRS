"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDuplamenteLigada = void 0;
var celula_1 = require("./celula");
/**
 *
 *
 * @export
 * @class ListaDuplamenteLigada
 * @template T
 */
var ListaDuplamenteLigada = /** @class */ (function () {
    /**
     * Creates an instance of ListaDuplamenteLigada.
     * @memberof ListaDuplamenteLigada
     */
    function ListaDuplamenteLigada() {
        this._primeira = null;
        this._ultima = null;
        this._totalDeElementos = 0;
    }
    Object.defineProperty(ListaDuplamenteLigada.prototype, "primeira", {
        /**
         * Retorna o primeiro elemento
         *
         * @type {(Celula<T> | null)}
         * @memberof ListaDuplamenteLigada
         */
        get: function () {
            return this._primeira;
        },
        /**
         * Seta o primeiro elementos
         *
         * @memberof ListaDuplamenteLigada
         */
        set: function (celula) {
            this._primeira = celula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListaDuplamenteLigada.prototype, "totalDeElemento", {
        /**
         * Retorna o total de elementos
         *
         * @type {number}
         * @memberof ListaDuplamenteLigada
         */
        get: function () {
            return this._totalDeElementos;
        },
        /**
         * Seta o total de elementos
         *
         * @memberof ListaDuplamenteLigada
         */
        set: function (value) {
            this._totalDeElementos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListaDuplamenteLigada.prototype, "ultima", {
        /**
         * Retorna a última célula
         *
         * @type {(Celula<T> | null)}
         * @memberof ListaDuplamenteLigada
         */
        get: function () {
            return this._ultima;
        },
        /**
         * Seta a última célula
         *
         * @memberof ListaDuplamenteLigada
         */
        set: function (value) {
            this._ultima = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retorna o tamanho da lista
     *
     * @return {*}  {number}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.getTamanho = function () {
        return this._totalDeElementos;
    };
    /**
     * Adiciona elemento ao fim
     *
     * @param {T} elemento
     * @return {*}  {void}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.adicionaNoFim = function (elemento) {
        // cria uma célula com o elemento fornecido, definindo próximo como null
        var celula = new celula_1.Celula(elemento, null, null);
        if (this._ultima) {
            // Se último da lista ligada é do tipo célula, faz ele apontar para próxima célula a ser inserida
            this._ultima.proxima = celula;
            // celula, que será a última, apontará para a última, que será a anterior
            celula.anterior = this.ultima;
            // Atualiza lista ligada para que o valor do atributo último seja a última célula inserida
            this._ultima = celula;
        }
        else {
            // Por outro lado, se não houver célula na lista, insere-a como primeira e última
            this._primeira = celula;
            this._ultima = celula;
        }
        // incrementa o totalDeElementos
        this._totalDeElementos++;
        return;
    };
    /**
     * Adiciona elemento no começo
     *
     * @param {T} elemento
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.adicionaNoComeco = function (elemento) {
        // cria uma célula a partir do elemento
        var celula = new celula_1.Celula(elemento, null, null);
        // se não houver uma primeira célula, insere
        if (!this._primeira) {
            this._primeira = celula;
            this._ultima = celula;
        }
        else {
            // a proxima de célula criada será a primeira
            celula.proxima = this._primeira;
            // a primeira terá como anterior celula criada
            this._primeira.anterior = celula;
            // primeira será a célula criada
            this._primeira = celula;
        }
        this._totalDeElementos++;
    };
    /**
     * Remove elemento do fim
     *
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.removeDoFim = function () {
        // se houve ultima
        if (this._ultima) {
            // caso última igual primeira, limpa lista
            if (this._primeira === this._ultima) {
                this._primeira = null;
                this._ultima = null;
            }
            else {
                // se última tiver uma celula anterior
                if (this._ultima.anterior) {
                    // previo será a anterior da última
                    var previo = this._ultima.anterior;
                    // a próxima de previo será null, encerrando a lista
                    previo.proxima = null;
                    // define ultima como previo
                    this._ultima = previo;
                }
            }
            this._totalDeElementos--;
        }
    };
    /**
     * Remove elemento do começo
     *
     * @memberof ListaLigada
     */
    ListaDuplamenteLigada.prototype.removeDoComeco = function () {
        // se existe ao menos um primeira
        if (this._primeira) {
            if (this._primeira === this._ultima) {
                // Se primeira igual ao último, há apenas um elemento na lista. Então, primeira e último ficam null e lista fica vazia.
                this._primeira = null;
                this._ultima = null;
            }
            else {
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
    };
    /**
     *
     *
     * @param {number} posicao
     * @param {T} elemento
     * @return {*}  {void}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.adicionaPorPosicao = function (posicao, elemento) {
        // se a posição é fora do range, retorna
        if (!this._posicaoOcupada(posicao - 1))
            return;
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
        var celula = new celula_1.Celula(elemento, null, null);
        // obtem célula anterior e posterior
        var celulaPrevia = this._obtemCelula(posicao - 1);
        var celulaPosterior = this._obtemCelula(posicao);
        // insere em meio a elas
        if (celulaPrevia && celulaPosterior) {
            celula.anterior = celulaPrevia;
            celulaPrevia.proxima = celula;
            celula.proxima = celulaPosterior;
            celulaPosterior.anterior = celula;
        }
        this._totalDeElementos++;
        return;
    };
    /**
     * Remove célula da lista ligada de acordo com a posição
     *
     * @param {number} posicao
     * @return {*}  {void}
     * @memberof ListaLigada
     */
    ListaDuplamenteLigada.prototype.removePorPosicao = function (posicao) {
        // se a posição é fora do range, retorna
        if (!this._posicaoOcupada(posicao))
            return;
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
        var celulaPrevia = this._obtemCelula(posicao - 1);
        var celulaPosterior = this._obtemCelula(posicao + 1);
        // remove do meio delas
        if (celulaPrevia && celulaPosterior) {
            celulaPrevia.proxima = celulaPosterior;
            celulaPosterior.anterior = celulaPrevia;
        }
        this._totalDeElementos--;
        return;
    };
    /**
     * Retorna true se a posição fornecida está na lista. Caso contrário, false
     *
     * @private
     * @param {number} posicao
     * @return {*}  {boolean}
     * @memberof ListaLigada
     */
    ListaDuplamenteLigada.prototype._posicaoOcupada = function (posicao) {
        return posicao >= 0 && posicao < this._totalDeElementos;
    };
    /**
     *
     *
     * @private
     * @param {number} posicao
     * @return {*}  {(Celula<T> | null)}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype._obtemCelula = function (posicao) {
        var count = 0;
        var celulaAtual = this._primeira;
        if (this._posicaoOcupada(posicao)) {
            while (count < posicao) {
                if (celulaAtual) {
                    celulaAtual = celulaAtual.proxima;
                }
                count++;
            }
        }
        return celulaAtual;
    };
    /**
     * Retorna uma representação string dos elementos contidos na lista
     *
     * @return {*}  {string}
     * @memberof ListaLigada
     */
    ListaDuplamenteLigada.prototype.toString = function () {
        if (!this._primeira) {
            return '[]';
        }
        var strRepr = '[';
        var celulaAtual = this._primeira;
        while (celulaAtual) {
            if (celulaAtual.elemento && celulaAtual.elemento instanceof Object && celulaAtual.elemento.hasOwnProperty('toString')) {
                strRepr += "".concat(celulaAtual.elemento.toString());
            }
            strRepr += "".concat(String(celulaAtual.elemento));
            if (celulaAtual.proxima) {
                strRepr += ', ';
            }
            celulaAtual = celulaAtual.proxima;
        }
        strRepr += ']';
        return strRepr;
    };
    /**
     *
     *
     * @param {number} posicao
     * @return {*}  {(T | undefined)}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.obtemElemento = function (posicao) {
        if (this._posicaoOcupada(posicao)) {
            var celula = this._obtemCelula(posicao);
            if (celula) {
                return celula.elemento;
            }
        }
        return undefined;
    };
    /**
     *
     *
     * @param {T} elemento
     * @return {*}  {boolean}
     * @memberof ListaDuplamenteLigada
     */
    ListaDuplamenteLigada.prototype.contem = function (elemento) {
        var celulaAtual = this._primeira;
        if (celulaAtual) {
            // Enquanto houver uma próxima célula:
            while (celulaAtual) {
                // se eleemnto igual elemento da célula, retorna true
                if (celulaAtual.elemento === elemento)
                    return true;
                // substitui atual pelo próximo
                celulaAtual = celulaAtual.proxima;
            }
        }
        return false;
    };
    return ListaDuplamenteLigada;
}());
exports.ListaDuplamenteLigada = ListaDuplamenteLigada;
