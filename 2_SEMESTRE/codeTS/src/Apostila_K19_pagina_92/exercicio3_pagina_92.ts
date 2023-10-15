// exercicio3_pagina_92

import { Secretaria, Gerente, Telefonista } from './exercicio2_pagina_92';

const s = new Secretaria('Tatiana Andrade', 1500, 198);

const g = new Gerente('Rafael Consentino', 2000, 'rafael.consentino', '12345');

const t = new Telefonista('Carolina Melo', 1000, 13);

console.log('GERENTE');
g.imprimeDados();

console.log('TELEFONISTA');
t.imprimeDados();

console.log('SECRETARIA');
s.imprimeDados();
