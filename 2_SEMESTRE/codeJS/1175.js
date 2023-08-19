var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => Number(v));

values.reverse();

values.forEach((v, i) => {
    console.log(`N[${i}] = ${v}`)
});