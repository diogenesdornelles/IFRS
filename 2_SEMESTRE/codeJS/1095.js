var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let J = 60;
let I = 1;

while (J >= 0) {
    console.log(`I=${I} J=${J}`)
    J -= 5
    I += 3
}

