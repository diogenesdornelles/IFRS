var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines[1].split(' ').map(v => Number(v));

let min = Math.min( ...values );

let position = values.indexOf(min);

console.log(`Menor valor: ${min}`)
console.log(`Posicao: ${position}`)