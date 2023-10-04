/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Funcionario } from './exercicio_04_paginas_79a81';

const f = new Funcionario<number, string>(2000, 'Rafael Consentino');

// Property 'nome' is private and only accessible within class 'Funcionario<T, U>'.ts(2341)
//@ts-ignore
console.log(f._nome);
// Property 'salario' is private and only accessible within class 'Funcionario<T, U>'.ts(2341)
//@ts-ignore
console.log(f._salario);
