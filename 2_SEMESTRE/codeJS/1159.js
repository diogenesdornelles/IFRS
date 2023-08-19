var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const values = lines.map(v => Number(v));
let count = 0;
let X = 1;
let arr = [2, 4, 6, 8]
let result;

while (X !== 0) {
    let start = 0
    X = values[count]
    if (X !== 0) {
        if (X % 2 === 0) {
            start += X
            result = arr.reduce((acc, value) => acc + value + start, start)
            console.log(result)
        } else {
            start += X + 1
            result = arr.reduce((acc, value) => acc + value + start, start)
            console.log(result)
        }
        count++
    }
}