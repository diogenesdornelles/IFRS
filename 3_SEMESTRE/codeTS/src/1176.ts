var input = require('fs').readFileSync('src/dev/stdin', 'utf8');
var lines = input.split('\n');

let tests = lines[0]
let cases = lines.slice(1, lines.length)

const get_fib = (n: number) => {
    let a = 1
    let b = 0
    let c
    if (n === 0) return b
    if (n === 1) return a
    for (let i = 0; i < n; i++) {
        c = a
        a = a + b
        b = c
    }
    return b
}

for (let i = 0; i < tests; i++) {
    console.log(`Fib(${cases[i]}) = ${get_fib(Number(cases[i]))}`);
}
