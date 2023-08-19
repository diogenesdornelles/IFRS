var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');


var π, A, R;

π = 3.14159;

R = Number(lines[0]);

A = π * R * R;

console.log("A=" + A.toFixed(4));