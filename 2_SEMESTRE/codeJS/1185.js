var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let calcType = lines[0];

lines.shift();

lines = lines.map(v => Number(v));

let matrix = [];

for (let i = 0; i < lines.length; i += 12) {
    let sliced = lines.slice(i, i + 12);
    matrix.push(sliced);
}

values = [];

matrix.forEach((vRow, iRow) => {
    vRow.forEach((vColumn, iColumn) => {
        if (iColumn + iRow < 11) {
            values.push(vColumn)
        }
    })
})

let sum = values.reduce((acc, v) => {
    return acc + v;
}, 0);

if (calcType === 'S') {
    console.log(sum.toFixed(1));
} else {
    console.log((sum / values.length).toFixed(1));
};