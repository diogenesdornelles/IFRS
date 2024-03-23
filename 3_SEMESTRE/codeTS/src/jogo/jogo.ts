import { getIndexMaiorValor } from './getIndexMaiorValor';
import { getRodada } from './getRodada';
import { getSomaRodada } from './getSomaRodada';
import { getVencedor } from './getVencedor';
import { haIguais } from './haIguais';
import { Jogador } from './jogador';

export class Jogo {
  private _jogadores: Array<Jogador>;
  private _rodada: Array<number>;
  private _acumulador: number;
  private _tamanhoRodada: number;
  constructor(jogadores: Array<Jogador>) {
    this._tamanhoRodada = 3;
    for (let i = 0; i < jogadores.length; i++) {
      if (jogadores[i].pilha.getTamanho() !== this._tamanhoRodada) {
        throw new Error('Jogador deve fazer apenas 3 jogadas');
      }
    }
    this._jogadores = jogadores;
    this._acumulador = 0;
    this._rodada = [];
  }
  public get acumulador(): number {
    return this._acumulador;
  }
  public get rodada(): Array<number> {
    return this._rodada;
  }
  public get jogadores(): Array<Jogador> {
    return this._jogadores;
  }

  public getResultado(): Jogador {
    while (!this._jogadores[0].pilha.estavazia()) {
      let rodada = getRodada(this._tamanhoRodada, this._jogadores);
      this._acumulador += getSomaRodada(rodada);
      if (haIguais(rodada)) {
        continue;
      } else {
        this._jogadores[getIndexMaiorValor(rodada)].addPontuação(this._acumulador);
        this._acumulador = 0;
      }
    }
    return getVencedor(this._jogadores);
  }
}
