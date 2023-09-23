import { Cliente, CartaoDeCredito, Conta, Agencia } from './exercicio4';

const cliente = new Cliente('Rafael Consentino', 112254);
const cartaoDeCredito = new CartaoDeCredito('01/01/2024', 11111111, cliente);

console.log(cartaoDeCredito.cliente.nome);
console.log(cartaoDeCredito.numero);

const agencia = new Agencia(178);
const conta = new Conta(111111, 1000, agencia);

console.log(conta.agencia.numero);
console.log(conta.saldo);
