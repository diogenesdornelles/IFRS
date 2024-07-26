	
export class Pilha {
  private _elementos: Array<string>;
  private _tamanho: number;
  public get tamanho(): number {
      return this._tamanho;
  }
  public set tamanho(value: number) {
      this._tamanho = value;
  }
  constructor() {
      this._elementos = [];
      this._tamanho = 0;
  }
  public topo() {
      if (this.estavazia()) {
          return this._elementos[this._tamanho];
      };
      return this._elementos[this._tamanho - 1];
  }
  public empilhar(elemento: string) {
      this._elementos[this._tamanho] = elemento;
      this._tamanho++;
  }
  public desempilhar(): string {
      if (this._tamanho > 0) {
          let top = this._elementos[this._tamanho - 1];
          let elementos: Array<string> = [];
          for (let i = 0; i < this._tamanho - 1; i++) {
              elementos[i] = this._elementos[i];
          }
          this._tamanho--;
          return top;
      } else {
          this._elementos = [];
          return this._elementos[0];
      }
  }
  public getTamanho(): number { return this._tamanho; }
  public estavazia(): boolean { return this._tamanho === 0 }
  public toString(): string {
      let repr = "[";
      for (let i = 0; i < this._tamanho - 1; i++) {
          repr += String(this._elementos[i]);
          repr += ',';
      }
      if (this._tamanho > 0) {
          repr += this._elementos[this._tamanho - 1];
      }
      repr += ']';
      return repr;
  }
}


export class ControleAcoes {
  private _acoes: Pilha;
  private _podeRefazer: boolean;
  public get podeRefazer(): boolean {
      return this._podeRefazer;
  }
  public set podeRefazer(value: boolean) {
      this._podeRefazer = value;
  }
  constructor() {
      this._acoes = new Pilha();
      this._podeRefazer = false;
  }
  public adicionar(acao: string): void {
      this._acoes.empilhar(acao);
      this._podeRefazer = false;
  }
  public desfazer(): void {
      if (this._acoes.desempilhar()) {
          this._podeRefazer = true;
      }
  }
  public refazer(): void {
      if (this._podeRefazer) {
          this._acoes.tamanho++;
      }
  }
  public listar(): string {
      return this._acoes.toString();
  }
}


let ca = new ControleAcoes();

ca.adicionar("Acao 1");
ca.adicionar("Acao 2");
ca.adicionar("Acao 3");
ca.adicionar("Acao 4");
ca.adicionar("Acao 5");
ca.desfazer(); //desfaz a ação 5
ca.desfazer(); //desfaz a ação 4
ca.refazer(); //refaz a ação 4
ca.adicionar("Acao 6");
ca.refazer(); //impossível refazer, pois foi adicionada uma nova ação

console.log(ca.listar()); // irá imprimir [Acao 1,Acao 2,Acao 3,Acao 4,Acao 6]
