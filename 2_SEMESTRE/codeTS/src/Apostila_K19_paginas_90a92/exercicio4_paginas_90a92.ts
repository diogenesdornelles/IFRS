// exercicio4_paginas_90a92 e exercicio6_paginas_90a92

import { Secretaria, Gerente, Telefonista } from './exercicio3_paginas_90a92';

const s = new Secretaria('Tatiana Andrade', 1500, 198);

const g = new Gerente('Rafael Consentino', 2000, 'rafael.consentino', '12345');

const t = new Telefonista('Carolina Melo', 1000, 13);

console.log('GERENTE');
console.log('Nome: ' + g.nome);
console.log('Salário: ' + g.salario);
console.log('Usuário: ' + g.usuario);
console.log('Senha: ' + g.senha);
console.log('Bonificação: ' + g.calculaBonificacao()); //

console.log('TELEFONISTA');
console.log('Nome: ' + t.nome);
console.log('Salário: ' + t.salario);
console.log('Estação de trabalho: ' + t.estacaoDeTrabalho);
console.log('Bonificação: ' + t.calculaBonificacao());

console.log('SECRETARIA');
console.log('Nome: ' + s.nome);
console.log('Salário: ' + s.salario);
console.log('Ramal: ' + s.ramal);
console.log('Bonificação: ' + s.calculaBonificacao());
