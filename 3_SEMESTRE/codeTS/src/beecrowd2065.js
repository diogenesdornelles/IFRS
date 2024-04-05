	
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


let N, M, Vs, Cs;

N = lines[0].split(' ')[0]
M = lines[0].split(' ')[1]
Vs = lines[1].split(' ').map((line) => parseInt(line))
Cs = lines[2].split(' ').map((line) => parseInt(line))

class Fila {
  constructor() {
    this._elementos = [];
    this._tamanho = 0;
  }
  elementos() {
    return this._elementos;
  }

  tamanho() {
    return this._tamanho;
  }
  enfileirar(elemento) {
    this._elementos[this._tamanho] = elemento;
    this._tamanho++;
    return true;
  };
  estaVazia() {
    return this._tamanho === 0;
  };
  proximoElemento() {
    if (this._tamanho > 0) {
      return this._elementos[0];
    } else {
      return -1;
    };
  };
  desenfileirar(){
    if (this._tamanho > 0) {
      const top = this._elementos[0];
      for (let i = 0; i < this._tamanho; i++) {
        this._elementos[i] = this._elementos[i + 1];
      }
      this._tamanho--;
      return top;
    } else {
      this._elementos = [];
      return this._elementos[0];
    }
  };
  toString() {
    let repr = '[';
    for (let i = 0; i < this._tamanho - 1; i++) {
      repr += String(this._elementos[i]);
      repr += ',';
    }
    if (this._tamanho > 0) {
      repr += this._elementos[this._tamanho - 1];
    }
    repr += ']';
    return repr;
  };
}

class Cliente {
  constructor(nItems, identificador) {
    this.nItems = nItems
    this.identificador = identificador
  }
}

class Funcionario {
  constructor(tempoPorItem, identificador) {
    this.tempoPorItem = tempoPorItem
    this.identificador = identificador
  }
}

class Caixa {
  constructor() {
    this.funcionarios = []
    this.ordem = 0
  }
  addFunc(funcionario) {
    this.funcionarios.push(funcionario)
  }
  getProximo() {
    let func = this.funcionarios[this.ordem]
    this.ordem++
    if (this.ordem === this.funcionarios.length) {
      this.ordem = 0
    }
    return func
  }
}

let caixa = new Caixa()
let fila = new Fila()

for (let i= 1; i <= N; i++) {
  let func = new Funcionario(Vs[i - 1], i)
  caixa.addFunc(func)
}

for (let i= 1; i <= M; i++) {
  let cliente = new Cliente(Cs[i - 1], i)
  fila.enfileirar(cliente)
}

class Atendimento {
  constructor(fila, caixa) {
    this.fila = fila
    this.caixa = caixa
    this.tempo = 0
  }
 
  atender() {
    while (!this.fila.estaVazia()) {
      this.tempo += this.fila.desenfileirar().nItems * this.caixa.getProximo().tempoPorItem
      console.log(this.tempo)
    }
  }
}

let atendimento = new Atendimento(fila, caixa)

atendimento.atender()

console.log(atendimento.tempo)
