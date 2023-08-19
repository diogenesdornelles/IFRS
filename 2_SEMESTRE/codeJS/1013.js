var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');
let int1, int2, int3, maior1, maior2;
int1 = Number(lines[0]);
int2 = Number(lines[1]);
int3 = Number(lines[2]);
maior1 = (int1 + int2 + Math.abs(int1 - int2)) / 2;
maior2 = (maior1 + int3 + Math.abs(maior1 - int3)) / 2;

console.log(maior2 + " eh o maior");
