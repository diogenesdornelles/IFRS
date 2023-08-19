var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => Number(v));

let cash = values[0]

 const params = [
 {q: 0, v: 100},
 {q: 0, v: 50},
{q: 0, v: 20},
{q: 0, v: 10},
{q: 0, v: 5},
{q: 0, v: 2},
{q: 0, v: 1},
{q: 0, v: 0.5},
{q: 0, v: 0.25},
{q: 0, v: 0.1},
{q: 0, v: 0.05},
{q: 0, v: 0.01},
 ]


 if (cash >= 0.01) {
    params.forEach((cedula) => {
        if (cash >= cedula['v']) {
            cedula['q'] = Math.trunc(cash / cedula['v'])
            cash = (cash - cedula['q'] * cedula['v']).toFixed(2)
        }
    })
    console.log("NOTAS:")
    params.forEach(cedula => {
        if (cedula['v'] > 1) {
            console.log(`${cedula['q']} nota(s) de R$ ${cedula['v'].toFixed(2)}`)
        }
    })
    console.log("MOEDAS:")
    params.forEach(cedula => {
        if (cedula['v'] <= 1) {
            console.log(`${cedula['q']} moeda(s) de R$ ${cedula['v'].toFixed(2)}`)
        }
    })
 } 

