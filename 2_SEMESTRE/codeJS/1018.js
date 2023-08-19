var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => Number(v));

let cash = values[0]

let originalCash = values[0]

 const params = [
 {q: 0, v: 100},
 {q: 0, v: 50},
{q: 0, v: 20},
{q: 0, v: 10},
{q: 0, v: 5},
{q: 0, v: 2},
{q: 0, v: 1}
 ]

params.forEach((cedula) => {
    if (cash >= cedula['v']) {
        cedula['q'] = Math.trunc(cash / cedula['v'])
        cash = (cash - cedula['q'] * cedula['v']).toFixed(2)
    }
})
console.log(originalCash)
params.forEach(cedula => {
    console.log(`${cedula['q']} nota(s) de R$ ${cedula['v'].toFixed(2).replace('.', ',')}`)
})