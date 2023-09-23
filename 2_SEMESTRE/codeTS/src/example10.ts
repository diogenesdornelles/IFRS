// Atividade - Exercícios Fixação - Apostila K19 - Página 48

// exercicios 11 e 12
// example.ts
class Conta {
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
    alert(`Saldo: ${this.saldo}`);
  }
}

// exercicio 14

class Funcionario {
  constructor(
    public nome: string,
    public salario: number = 200,
  ) {}
  aumentarSalario(valor: number): void {
    if (valor > 0) this.salario += valor;
  }
  consultarRegistros(): void {
    alert(
      `Nome: ${this.nome}
      Salário: ${this.salario}
      `,
    );
  }
}

let numero: string = '';
while (!parseFloat(numero)) {
  numero = window.prompt('Informe o número da conta: ') ?? 'a';
}
let saldo: string = '';
while (!parseFloat(saldo)) {
  saldo = window.prompt('Informe o saldo inicial da conta: ') ?? 'a';
}
let limite: string = '';
while (!parseFloat(limite)) {
  limite = window.prompt('Informe o limite inicial da conta: ') ?? 'a';
}

const c = new Conta(parseFloat(numero), parseFloat(saldo), parseFloat(limite));

class ManipulaConta {
  constructor(public conta: Conta) {}
  menu(): void {
    alert(`Opções:
    1 - Sacar
    2 - Depositar
    3 - Imprimir extrato
    4 - Sair`);
  }
  loop(): void {
    let opcao: string = '0';
    while (parseFloat(opcao) !== 4) {
      this.menu();
      opcao = window.prompt('Informe uma opção: ') ?? '0';
      switch (opcao) {
        case '1':
          this.operarSaque();
          break;
        case '2':
          this.operarDeposito();
          break;
        case '3':
          this.operarImprimirExtrato();
          break;
        case '4':
          break;
        default:
          alert('Escolha uma opção válida');
          break;
      }
    }
  }
  operarSaque(): void {
    const valor: string = window.prompt('Informe o valor do saque: ') ?? '0';
    if (parseFloat(valor) && parseFloat(valor) > 0) {
      this.conta.sacar(parseFloat(valor));
    }
  }
  operarDeposito(): void {
    const valor: string = window.prompt('Informe o valor do deposito: ') ?? '0';
    if (parseFloat(valor) && parseFloat(valor) > 0) {
      this.conta.depositar(parseFloat(valor));
    }
  }
  operarImprimirExtrato(): void {
    this.conta.imprimirExtrato();
  }
}

const manipulaConta = new ManipulaConta(c);
manipulaConta.loop();

// exercicio 15

let nome: string = '';
while (!nome) {
  nome = window.prompt('Informe o nome do funcionário: ') ?? '';
}

const f = new Funcionario(nome);

class ManipulaFuncionario {
  constructor(public funcionario: Funcionario) {}
  menu(): void {
    alert(`
    Opções:
    1 - Altera nome
    2 - Altera salário
    3 - Visualizar registros do funcionário
    4 - Sair
    `);
  }
  loop(): void {
    let opcao: string = '0';
    while (parseFloat(opcao) !== 4) {
      this.menu();
      opcao = window.prompt('Informe uma opção: ') ?? '0';
      switch (opcao) {
        case '1':
          this.alterarNome();
          break;
        case '2':
          this.alterarSalario();
          break;
        case '3':
          this.visualizarRegistros();
          break;
        case '4':
          break;
        default:
          alert('Escolha uma opção válida');
          break;
      }
    }
  }
  alterarNome(): void {
    const novoNome: string = window.prompt('Informe o novo nome: ') ?? '';
    if (novoNome) this.funcionario.nome = novoNome;
  }
  alterarSalario(): void {
    const valor: string = window.prompt('Informe o novo salario: ') ?? '0';
    if (parseFloat(valor) && parseFloat(valor) > 0) this.funcionario.salario = parseFloat(valor);
  }
  visualizarRegistros(): void {
    this.funcionario.consultarRegistros();
  }
}

const manipularFuncionario = new ManipulaFuncionario(f);
manipularFuncionario.loop();
