var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let v;
v = Number(lines[0]);

const printTable = (value) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${value} = ${i * value}`)
    }
}

printTable(v)