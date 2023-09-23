import { Cliente } from './exercicio4';
import { Agencia, CartaoDeCredito, Conta } from './exercicio8';
// Atividade - Exercícios Fixação - Apostila K19 - Página 44 até 46

// exercicio 22
// TestaContaEAgencia.ts
// import { Agencia } from './Agencia'
const agencia1 = new Agencia(178);
console.log(agencia1);

// exercicio 25

// TestaClienteECartao.ts
// import { Cliente } from './Cliente'
// import { CartaoDeCredito } from './CartaoDeCredito'
const cliente = new Cliente('Rafael Consentino', 112254);
const cartaoDeCredito = new CartaoDeCredito('01/01/2024', 11111111, cliente);
console.log(cartaoDeCredito);

// exercicio 28

// import { Agencia } from './Agencia'
// import { Conta } from './Conta'

const agencia2 = new Agencia(871);
const conta = new Conta(123, 1000, 500, agencia2);
console.log(conta);
