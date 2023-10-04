import { Funcionario } from './exercicio_02_paginas_79a81';
const f = new Funcionario<string, number>('Rafael Consentino', 2000);

console.log(f.nome);
console.log(f.salario);
