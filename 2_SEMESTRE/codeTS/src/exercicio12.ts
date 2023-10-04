// Atividade - Exercícios Complementares - Apostila K19 - Página 81Tarefa

// exercicio 1 a 4

/**
 * Representa uma agência com um código e um município.
 */
export class Agencia {
  /**
   * Cria uma nova instância da classe Agencia.
   * @param {number} _codigo - O código da agência.
   * @param {string} _municipio - O município da agência.
   */
  constructor(
    private _codigo: number,
    private _municipio: string,
  ) {}
}

/**
 * Classe que representa um cliente.
 */
export class Cliente {
  /**
   * Cria uma nova instância da classe Cliente.
   * @param {string} _nome - O nome do cliente.
   * @param {string} _sobrenome - O sobrenome do cliente.
   * @param {string} _cpf - O CPF (Cadastro de Pessoas Físicas) do cliente.
   */
  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _cpf: string,
  ) {}
}

/**
 * Tipo união que representa tipos de contas: Corrente ou Poupança.
 */
export type TTipoConta = 'CC' | 'CP';

/**
 * Classe que representa uma conta bancária.
 */

export class Conta {
  /**
   * Cria uma nova instância da classe Cliente.
   * @param {string} _numero - O número da conta.
   * @param {string} _tipo - O tipo de conta.
   * @param {string} _agencia - A agência em que o cliente mantém a conta.
   * @param {string} _cliente - O cliente titular da conta.
   * @param {string} _saldo - O saldo disponível em conta.
   * @param {string} _limite - O limite disponpivel em conta.
   */
  constructor(
    private _numero: number,
    private _tipo: TTipoConta,
    private _agencia: Agencia,
    private _cliente: Cliente,
    private _saldo: number,
    private _limite: number,
  ) {}

  /**
   * Obtém o número da conta.
   * @returns {number} O número da conta.
   * @access public
   */
  get numero(): number {
    return this._numero;
  }

  /**
   * Define o número da conta.
   * @param {number} valor - O novo número da conta.
   * @access public
   */
  set numero(valor: number) {
    if (valor > 0) this._numero = valor;
  }

  /**
   * Obtém o tipo de conta.
   * @returns {TTipoConta} O tipo de conta.
   * @access public
   */
  get tipo(): TTipoConta {
    return this._tipo;
  }

  /**
   * Define o tipo de conta.
   * @param {TTipoConta} valor - O novo tipo de conta.
   * @access public
   */
  set tipo(valor: TTipoConta) {
    this._tipo = valor;
  }

  /**
   * Obtém a agência da conta.
   * @returns {Agencia} A agência da conta.
   * @access public
   */
  get agencia(): Agencia {
    return this._agencia;
  }

  /**
   * Define a agência da conta.
   * @param {Agencia} valor - A nova agência da conta.
   * @access public
   */

  set agencia(valor: Agencia) {
    this._agencia = valor;
  }

  /**
   * Obtém o cliente da conta.
   * @returns {Cliente} O cliente da conta.
   * @access public
   */

  get cliente(): Cliente {
    return this._cliente;
  }

  /**
   * Define o cliente da conta.
   * @param {Cliente} valor - O novo cliente da conta.
   * @access public
   */
  set cliente(valor: Cliente) {
    this._cliente = valor;
  }

  /**
   * Obtém o saldo da conta.
   * @returns {number} O saldo da conta.
   * @access public
   */
  get saldo(): number {
    return this._saldo;
  }

  /**
   * Obtém o limite da conta.
   * @returns {number} O limite da conta.
   * @access public
   */
  get limite(): number {
    return this._limite;
  }

  /**
   * Define o limite da conta.
   * @param {number} valor - O novo limite da conta.
   * @access public
   */
  set limite(valor: number) {
    this._limite = valor;
  }

  /**
   * Define o novo saldo e o limite da conta após uma operação de retirada, de acordo com valor requisitado.
   * @param {number} valor - O valor a ser subtraído da conta.
   * @returns {boolean} - O sesultado da operação, caso positivo
   * @access private
   */
  private _diminuirSaldo(valor: number): boolean {
    if (valor > 0) {
      if (valor <= this.saldo) {
        this._saldo = this.saldo - valor;
      } else if (valor <= this.saldo + this.limite) {
        this._saldo = this.saldo - valor;
        this.limite = this.limite + this.saldo;
        this._saldo = 0;
      } else {
        throw new Error('Valor requisitado excede limite e saldo em conta');
      }
    } else {
      throw new Error('Valor requisitado deve ser positivo');
    }
    return true;
  }
  /**
   * Sacar uma quantia existente em conta, de acordo com valor requisitado.
   * @param {number} valor - O valor a ser sacado da conta.
   * @access public
   */
  sacar(valor: number): void {
    if (this._diminuirSaldo(valor)) {
      console.log(`Valor sacado: ${valor}`);
      this.imprimirExtrato();
    }
  }

  /**
   * Depositar uma quantia na conta, de acordo com valor requisitado.
   * @param {number} valor - O valor a ser depositado na conta.
   * @access public
   */
  depositar(valor: number): void {
    if (valor > 0) {
      this._saldo += valor;
    } else {
      throw new Error('Valor a ser depositado deve ser positivo');
    }
    console.log(`Valor depositado: ${valor}`);
    this.imprimirExtrato();
  }

  /**
   * Transferir uma quantia entre contas, de acordo com valor requisitado.
   * @param {number} valor - O valor a ser transferido da conta.
   * @param {Conta} conta - A conta destino da operação.
   * @access public
   */
  transferir(valor: number, conta: Conta): void {
    if (this._diminuirSaldo(valor)) {
      conta._saldo += valor;
      console.log(`Valor transferido: ${valor}`);
      this.imprimirExtrato();
    }
  }

  /**
   * Imprime um extrato da conta.
   */
  imprimirExtrato(): void {
    console.log(`Seu saldo é de: ${this.saldo}`);
    console.log(`Seu limite é de: ${this.limite}`);
  }
}

const agenciaA = new Agencia(12345, 'Bento Gonçalves');

const titularA = new Cliente('Jão', 'da Silva', '00580678094');

const contaA = new Conta(123, 'CC', agenciaA, titularA, 1000, 1000);

const agenciaB = new Agencia(54321, 'POA');

const titularB = new Cliente('Ana', 'da Silva', '59874563215');

const contaB = new Conta(568, 'CC', agenciaB, titularB, 2000, 500);

console.log('------------------------------------------------');
contaA.imprimirExtrato();
console.log('------------------------------------------------');
contaB.imprimirExtrato();
console.log('------------------------------------------------');
contaA.sacar(150);
console.log('------------------------------------------------');
contaB.depositar(300);
console.log('------------------------------------------------');
contaB.transferir(280, contaA);
console.log('------------------------------------------------');
