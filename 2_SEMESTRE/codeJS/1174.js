var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => parseFloat(v));


values.forEach((v, i) => {
    if (v <= 10) {
        console.log(`A[${i}] = ${v.toFixed(1)}`)
    }
});
