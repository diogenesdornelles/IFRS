export class Funcionario {
  private _nome: string;
  private _salario: number;
  private _valeAlimentacao: number = 500;
  private _dependentes: Array<string>;
  constructor(nome: string, salario: number) {
    this._nome = nome;
    this._salario = salario;
    this._dependentes = new Array<string>();
  }
  adicionaDependente(nome: string): void {
    this._dependentes.push(nome);
  }
  getValeAlimentacao(): number {
    return this._valeAlimentacao;
  }
  aumentaSalario(valor: number): void {
    this._salario += valor;
  }
  getDependente(index: number): string {
    return this._dependentes[index];
  }
}
