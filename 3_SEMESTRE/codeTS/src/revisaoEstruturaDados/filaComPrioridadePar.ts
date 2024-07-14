import Fila from './fila';

export default class FilaComPrioriadePar<T> extends Fila<T> {
  constructor() {
    super();
  }
  override adicionar(elemento: T): void {
    if (typeof elemento !== 'number') return;
    if (elemento % 2 !== 0) {
      this.elementos[this.tamanho] = elemento;
      this.tamanho++;
    } else {
      const tamanhoAtual = this.tamanho;
      for (let i = 0; i < this.tamanho; i++) {
        const elementoAtual = this.elementos[i];
        if (typeof elementoAtual === 'number') {
          if (elementoAtual % 2 !== 0) {
            const idxImpar = i;
            for (let j = this.tamanho; j >= idxImpar; j--) {
              this.elementos[j] = this.elementos[j - 1];
            }
            this.elementos[idxImpar] = elemento;
            this.tamanho++;
            break;
          }
        }
      }
      if (this.tamanho === tamanhoAtual) {
        this.elementos[this.tamanho] = elemento;
        this.tamanho++;
      }
    }
  }
}

const fila = new FilaComPrioriadePar();

fila.adicionar(3);
fila.adicionar(2);
fila.adicionar(4);
fila.adicionar(5);
fila.adicionar(6);

console.log(fila);
