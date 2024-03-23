import { Pilha } from './pilha';

export default class PilhaDePares {
  private _pilha: Pilha<number>;
  constructor() {
    this._pilha = new Pilha();
  }

  public get pilha(): Pilha<number> {
    return this._pilha;
  }

  public add(numero: number): string {
    if (numero % 2 === 0) {
      this._pilha.empilhar(numero);
      return 'Par adicionado';
    } else {
      if (this._pilha.estavazia()) {
        return 'A pilha está vazia';
      } else {
        this._pilha.desempilhar();
        return 'Par retirado';
      }
    }
  }

  public getResultado(): string {
    if (this._pilha.getTamanho() > 0) {
      let pilhaStr = '';
      const length = this._pilha.getTamanho();
      for (let i = 0; i < length; i++) {
        pilhaStr += String(this._pilha.desempilhar()) + '-';
      }
      return pilhaStr;
    } else {
      return 'A pilha está vazia';
    }
  }
}
