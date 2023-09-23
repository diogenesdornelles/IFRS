import { Conta, Funcionario } from './exercicio10';

// exercicio 13
// TestaConta.ts
// import { Conta } from './Conta';
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
    console.log('Opções: ');
    console.log('1 - Sacar');
    console.log('2 - Depositar');
    console.log('3 - Imprimir extrato');
    console.log('4 - Sair');
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
          console.log('Escolha uma opção válida');
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
// TestaFuncionario.ts

let nome: string = '';
while (!nome) {
  nome = window.prompt('Informe o número da conta: ') ?? '';
}

const f = new Funcionario(nome);

class ManipulaFuncionario {
  constructor(public funcionario: Funcionario) {}
  menu(): void {
    console.log('Opções: ');
    console.log('1 - Altera nome');
    console.log('2 - Altera salário');
    console.log('3 - Visualizar registros do funcionário');
    console.log('4 - Sair');
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
          console.log('Escolha uma opção válida');
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
    this.visualizarRegistros();
  }
}

const manipularFuncionario = new ManipulaFuncionario(f);
manipularFuncionario.loop();
