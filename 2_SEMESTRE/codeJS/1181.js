var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let line = Number(lines[0]);
let calcType = lines[1];
let sum;
let avg;

lines.shift();
lines.shift();

lines = lines.map(v => Number(v));

let values = lines.slice(line * 12, line * 12 + 12);

sum = values.reduce((acc, v) => {
    return acc + v;
}, 0)

if (calcType === 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum / 12).toFixed(1));
}
