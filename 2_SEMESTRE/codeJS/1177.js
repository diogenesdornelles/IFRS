var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let value = Number(lines[0]);

arr = [];

let count = 0;

for (let i = 0; i < 1000; i++) {
    if (count >= value) count = 0;
    arr.push(count)
    count++
}

arr.forEach((v, i) => {
    console.log(`N[${i}] = ${v}`)
});
