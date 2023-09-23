// Atividade - Exercícios Fixação - Apostila K19 - Página 44 até 46

import { Cliente } from './exercicio4';

// exercicio 20
// Agencia.ts
export class Agencia {
  constructor(public numero: number) {}
}

// exercicio 23
// CartaoDeCredito.ts
// import { Cliente } from "./Cliente";
export class CartaoDeCredito {
  constructor(
    public dataDeValidade: string,
    public numero: number,
    public cliente: Cliente,
  ) {}
}

// exercicio 26
// Conta.ts
// import { Agencia } from "./Agencia";
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
}
