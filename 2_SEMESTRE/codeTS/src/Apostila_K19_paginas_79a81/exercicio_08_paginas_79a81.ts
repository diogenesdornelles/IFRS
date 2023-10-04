import { Funcionario } from './exercicio_07_paginas_79a81';

const f = new Funcionario<number, string>(2000, 'Rafael Consentino');

// Sem erro
console.log(f.nome);
// Sem erro
console.log(f.salario);
