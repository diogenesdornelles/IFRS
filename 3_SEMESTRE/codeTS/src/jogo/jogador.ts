import { Pilha } from '../pilha';
import { alimentarPilha } from './alimentarPilha';

export class Jogador {
  private _name: string;
  private _pontuação: number;
  private _pilha: Pilha<number>;
  constructor(name: string, numbers: Array<number> = []) {
    this._name = name;
    this._pontuação = 0;
    if (numbers.length > 0) {
      this._pilha = new Pilha();
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 9) {
          this._pilha.empilhar(9);
        } else if (numbers[i] < 1) {
          this._pilha.empilhar(1);
        } else {
          this._pilha.empilhar(Math.floor(numbers[i]));
        }
      }
    } else {
      this._pilha = alimentarPilha(new Pilha<number>(), 3);
    }
  }
  public joga(): number {
    if (this._pilha instanceof Pilha) {
      if (!this._pilha.estavazia()) {
        return this._pilha.desempilhar();
      }
    }
    return -1;
  }
  public get pontuação(): number {
    return this._pontuação;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get pilha(): Pilha<number> {
    return this._pilha;
  }
  public addPontuação(valor: number): void {
    this._pontuação += valor;
  }
}
