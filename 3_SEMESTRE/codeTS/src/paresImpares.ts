import { Pilha } from "./pilha";

const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ParesImpares {
  private _pilha: Pilha;
  constructor() {
    this._pilha = new Pilha();
  }

  public play(elements: Array<number>) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] % 2 === 0) {
        this._pilha.empilhar(elements[i]);
      } else {
        if (this._pilha.estavazia()) {
          console.log("A pilha está vazia");
        } else {
          this._pilha.desempilhar();
        }
      }
    }
  }
  public result(): void {
    if (this._pilha.getTamanho() > 0) {
      let element = "";
      for (let i = 0; i < this._pilha.getTamanho(); i++) {
        element += String(this._pilha.desempilhar()) + ",";
      }
      console.log(element);
    }
  }
}
