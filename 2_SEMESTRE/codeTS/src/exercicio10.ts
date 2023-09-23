// Atividade - Exercícios Fixação - Apostila K19 - Página 48Tarefa

// exercicios 11 e 12
// Conta.ts
export class Conta {
  constructor(
    public numero: number,
    public saldo: number,
    public limite: number,
  ) {}
  depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }
  sacar(valor: number): void {
    if (valor <= this.saldo + this.limite) this.saldo -= valor;
  }
  imprimirExtrato(): void {
    console.log(`Saldo: ${this.saldo}`);
  }
}

// exercicio 14

export class Funcionario {
  constructor(
    public nome: string,
    public salario: number = 200,
  ) {}
  aumentarSalario(valor: number): void {
    if (valor > 0) this.salario += valor;
  }
  consultarRegistros(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário: ${this.salario}`);
  }
}
