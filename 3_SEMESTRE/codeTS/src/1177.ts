var input = require('fs').readFileSync('src/dev/stdin', 'utf8');
var lines = input.split('\n');

let fator = Number(lines[0])
let n = 0

for (let i = 0; i < 40; i++) {
    console.log(`N[${i}] = ${n}`);
    if (n === fator - 1) {
        n = 0
    } else {
        n++
    }
}