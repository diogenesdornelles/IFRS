/* eslint-disable @typescript-eslint/no-namespace */

namespace Interfaces {
  export interface IConta {
    deposita(valor: number): void;
    saca(valor: number): void;
    getSaldo(): number;
  }
}

namespace ContaTipo {
  export class Corrente implements Interfaces.IConta {
    private _taxaDeOperacao: number = 0.45;
    private _saldo: number;

    constructor(saldo: number) {
      this._saldo = saldo;
    }
    public deposita(valor: number): void {
      this._saldo += valor - this._taxaDeOperacao;
    }
    public saca(valor: number): void {
      this._saldo -= valor + this._taxaDeOperacao;
    }
    getSaldo(): number {
      return this._saldo;
    }
  }
  export class Poupanca implements Interfaces.IConta {
    private _saldo: number;

    constructor(saldo: number) {
      this._saldo = saldo;
    }
    public deposita(valor: number): void {
      this._saldo += valor;
    }
    public saca(valor: number): void {
      this._saldo -= valor;
    }
    getSaldo(): number {
      return this._saldo;
    }
  }
}

namespace Geradores {
  export class Extrato {
    public static geraExtrato(conta: Interfaces.IConta): void {
      console.log('EXTRATO');
      console.log(`Saldo: ${conta.getSaldo()}`);
    }
  }
}

namespace Testador {
  export function iniciar(): void {
    const cc = new ContaTipo.Corrente(500);
    const cp = new ContaTipo.Poupanca(500);
    cc.deposita(500);
    cp.deposita(500);
    Geradores.Extrato.geraExtrato(cc);
    Geradores.Extrato.geraExtrato(cp);
    cc.saca(100);
    cp.saca(100);
    Geradores.Extrato.geraExtrato(cc);
    Geradores.Extrato.geraExtrato(cp);
  }
}

Testador.iniciar();
