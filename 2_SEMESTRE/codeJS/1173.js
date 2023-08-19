var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let value = Number(lines[0]);

let values = [];

for (let i = 0; i < 10; i++) {
    values.push(value);
    value *= 2;
}

values.forEach((v, i) => {
    console.log(`N[${i}] = ${v}`)
});
