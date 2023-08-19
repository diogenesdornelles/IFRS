var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => Number(v));

values.shift();


const getFibbo = (v) => {
    let a = 0
    let b = 1
    let c
    for (let i = 0; i < v; i++) {
        c = a + b
        a = b
        b = c
    }
    return a
}

values.forEach(v => {
    let fibbo = getFibbo(v)
    console.log(`Fib(${v}) = ${fibbo}`)
})