import Pilha from "./pilha";

export default class PilhaComPrioridadePar<T> extends Pilha<T> {
  constructor() {
    super();
  };
  override adicionar(elemento: T): void {
    // continua se number
    if (typeof elemento !== "number") return;
    // salva o tamanho atual
    
    // adiciona a idx 0 se vazio
    if (this.estaVazia()) {
      this.elementos[this.tamanho] = elemento;
      this.tamanho++;
      return;
    }
    let idxImpar = -1;

    for (let i = this.tamanho - 1; i >= 0; i--) {
      let elementoAtual = this.elementos[i];
      if (typeof elementoAtual === "number") {
        if (elementoAtual % 2 !== 0) {
          idxImpar = i;
          break;
        }
      }
    }
    if (idxImpar >= 0) {
      let pivot = idxImpar + 1;
      for (let j = this.tamanho; j >= pivot; j--) {
        this.elementos[j] = this.elementos[j - 1];
      };
      this.elementos[pivot] = elemento;
      // incrementa tamanho
      this.tamanho++;
      return;
    } 
    // se não tiver impar nos elementos
    for (let i = this.tamanho; i > 0; i--) {
      this.elementos[i] = this.elementos[i - 1];
    }
    this.elementos[0] = elemento;
    this.tamanho++;
    return
  };
};

// 0,1,2,3,4,5,6,7,8,9
// 1,5,3,7,2,2,2

let pilha = new PilhaComPrioridadePar();
// pilha.adicionar(3);
// pilha.adicionar(2);
// pilha.adicionar(4);
// pilha.adicionar(5);
// pilha.adicionar(6);
// pilha.adicionar(7);

console.log(pilha);