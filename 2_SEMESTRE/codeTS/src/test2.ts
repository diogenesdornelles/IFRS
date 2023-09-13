import { Cliente, CartaoDeCredito, Agencia, Conta, ContaAlterada } from './exercicio2';

// testaClient.ts
// import { Cliente } from "./Client";

const client1 = new Cliente('Jão', 123456);
const client2 = new Cliente('Ana', 654321);

client1.codigo = 123456789;
client1.nome = 'Jão da Silva';

client2.codigo = 987654321;
client2.nome = 'Ana Bolena';

console.log(client1.codigo);
console.log(client1.nome);

console.log(client2.codigo);
console.log(client2.nome);

// testaCartaoDeCredito.ts
// import { CartaoDeCredito } from "./CartaoDeCredito";

const cartao1 = new CartaoDeCredito('01/01/2028', 123456);
const cartao2 = new CartaoDeCredito('01/07/2026', 654321);

cartao1.dataDeValidade = '01/01/2027';
cartao1.numero = 123456987;
cartao2.dataDeValidade = '01/09/2026';
cartao2.numero = 987561231;

console.log(cartao1.dataDeValidade);
console.log(cartao1.numero);

console.log(cartao2.dataDeValidade);
console.log(cartao2.numero);

// testaAgencia.ts
// import { Agencia } from "./Agencia";

const agencia1 = new Agencia(123);
const agencia2 = new Agencia(654);

agencia1.numero = 1230;
agencia2.numero = 6540;

console.log(agencia1.numero);
console.log(agencia2.numero);

// testaConta.ts
// import { Conta } from "./Conta";

const conta1 = new Conta(856, 1000, 2000);
const conta2 = new Conta(786, 5000, 10000);

console.log(conta1.numero);
console.log(conta1.saldo);
console.log(conta1.limite);

console.log(conta2.numero);
console.log(conta2.saldo);
console.log(conta2.limite);

conta1.numero = 1230;
conta2.numero = 9851;
conta1.saldo = 750;
conta2.saldo = 2500;
conta1.limite = 2050;
conta2.limite = 12500;

console.log(conta1.numero);
console.log(conta1.saldo);
console.log(conta1.limite);

console.log(conta2.numero);
console.log(conta2.saldo);
console.log(conta2.limite);

// testaContaAlterada.ts
// import { ContaAlterada } from "./ContaAlterada";

const conta3 = new ContaAlterada(856, 1000);
const conta4 = new ContaAlterada(786, 5000);

console.log(conta3.numero);
console.log(conta3.saldo);
console.log(conta3.limite);

console.log(conta4.numero);
console.log(conta4.saldo);
console.log(conta4.limite);

conta1.numero = 1230;
conta2.numero = 9851;
conta1.saldo = 750;
conta2.saldo = 2500;
conta1.limite = 2050;
conta2.limite = 12500;

console.log(conta3.numero);
console.log(conta3.saldo);
console.log(conta3.limite);

console.log(conta4.numero);
console.log(conta4.saldo);
console.log(conta4.limite);
