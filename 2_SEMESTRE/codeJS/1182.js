var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let column = Number(lines[0]);
let calcType = lines[1];

lines.shift();
lines.shift();

lines = lines.map(v => Number(v));

let values = []

for (let i = column; i < lines.length; i += 12) {
    values.push(lines[i])
}

let sum = values.reduce((acc, v) => {
    return acc + v;
}, 0)

if (calcType === 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum / 12).toFixed(1));
}