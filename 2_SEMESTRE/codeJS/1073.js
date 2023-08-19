var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let v;
v = Number(lines[0]);

const printSquares = (value) => {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 0) {
            console.log(`${i}^2 = ${Math.pow(i, 2)}`)
        }
    }
}

printSquares(v)