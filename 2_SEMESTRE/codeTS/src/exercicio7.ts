// Atividade - Exercícios Complementares - Apostila K19 - Página 39

// exercicio 09

export class Funcionario {
  constructor(
    public name: string,
    public salario: number,
  ) {}
  aumentarSalario(valor: number): void {
    if (valor > 0) this.salario += valor;
  }
  consultarDados(): void {
    console.log(`Nome: ${this.name}`);
    console.log(`Salário: ${this.salario}`);
  }
}
