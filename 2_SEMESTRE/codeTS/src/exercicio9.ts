// Atividade - Exercícios Fixação - Apostila K19 - Página 47Tarefa

// exercicio 29

// Agencia.ts
export class Agencia {
  constructor(public numero: number) {}
}

// Conta.ts
export class Conta {
  constructor(
    public numero: number,
    public saldo: number,
    public limite: number = 100,
    public agencia: Agencia,
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
  consultarSaldoDisponible(): number {
    return this.saldo + this.limite;
  }
  transferir(destino: Conta, valor: number): void {
    if (valor > 0) {
      this.saldo -= valor;
      destino.saldo += valor;
    }
  }
}
