// exercicio1_pagina_92

export default abstract class Funcionario {
  constructor(
    private _nome: string,
    private _salario: number,
  ) {}
  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public calculaBonificacao(): number {
    return this._salario * 0.1;
  }
  public imprimeDados(): void {
    console.log('Nome: ' + this.nome);
    console.log('Salário: ' + this.salario);
    console.log('Bonificação: ' + this.calculaBonificacao());
  }
}
