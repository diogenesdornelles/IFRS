var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');
var A, B, SOMA;
A = Number(lines[0]);
B = Number(lines[1]);
SOMA = A + B;

console.log("SOMA = " + SOMA);