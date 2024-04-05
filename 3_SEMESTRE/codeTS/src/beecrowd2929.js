var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');



class Sacola {
    constructor() {
      this.presentes = [];
      this.tamanho = 0;
    }
    empilhar(elemento) {
      this.presentes[this.tamanho] = elemento;
      this.tamanho++;
    }
    desempilhar() {
      if (this.tamanho > 0) {
        const top = this.presentes[this.tamanho - 1];
        const presentes = [];
        for (let i = 0; i < this.tamanho - 1; i++) {
          presentes[i] = this.presentes[i];
        }
        this.tamanho--;
        this.presentes = presentes;
        return top;
      } else {
        return "EMPTY";
      }
    }
    estavazia() {
      return this.tamanho === 0;
    }
    getMenor() {
      if (this.estavazia()) return 'EMPTY';
      let menor = this.presentes[0];
      for (let i = 1; i < this.tamanho; i++) {
        if (this.presentes[i] < menor) {
          menor = this.presentes[i];
        }
      }
      return menor;
    }
  }

let sacola = new Sacola();

for (let i = 1; i < lines.length; i++) {
    if (lines[i] === 'POP') {
        let result = sacola.desempilhar();
        if (result === "EMPTY") {
            console.log(result);
        }
    }
    if (lines[i] === 'MIN') {
        console.log(sacola.getMenor());
    }
    if (lines[i].includes('PUSH')) {
        sacola.empilhar(parseInt(lines[i].split(' ')[1]));
    }
}
