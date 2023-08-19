var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
var A, B, MEDIA, PESOS, POND, PROD;
A = Number(lines[0]);
B = Number(lines[1]);

PESOS = [3.5, 7.5]

POND = PESOS.reduce((acc, peso) => acc + peso, 0);

PROD = [A, B].map((v, i) => Number(v) * PESOS[i])

SOMA = PROD.reduce((acc, v) => acc + v, 0);

MEDIA = SOMA / POND;

console.log("MEDIA = " + MEDIA.toFixed(5));
