// exercícios da página 34 e 35 da Apostila da K19
// Client.ts
export class Cliente {
  constructor(
    public nome: string,
    public codigo: number,
  ) {}
}

// CartaoDeCredito.ts
export class CartaoDeCredito {
  constructor(
    public dataDeValidade: string,
    public numero: number,
    public cliente: Cliente,
  ) {}
}

// Agencia.ts
export class Agencia {
  constructor(public numero: number) {}
}

// Conta.ts
export class Conta {
  constructor(
    public numero: number,
    public saldo: number,
    public agencia: Agencia,
    public limite: number = 100,
  ) {}
}
