var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');
var A, B, X;
A = Number(lines[0]);
B = Number(lines[1]);
X = A + B;
console.log("X = "+ X);