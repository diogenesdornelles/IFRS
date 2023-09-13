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
  ) {}
}

// Agencia.ts
export class Agencia {
  constructor(
    public numero: number,
  ) {}
}

// Conta.ts
export class Conta {
  constructor(
    public numero: number,
    public saldo: number,
    public limite: number,
  ) {}
}

// ContaAlterada.ts
export class ContaAlterada {
  constructor(
    public numero: number,
    public saldo: number,
    public limite: number = 100,
  ) {}
}
