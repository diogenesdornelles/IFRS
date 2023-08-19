var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

const values = lines.map(v => Number(v));

let start = (values[0] * 60 + values[1]) * 60 * 1000
let end = (values[2] * 60 + values[3]) * 60 * 1000

if (start >= end) {
    end += 24 * 60 * 60 * 1000
}

result = end - start

if (result >= 60 * 1000 && result <= 24 * 60 * 60 * 1000) {
    let hours = Math.trunc(result / (60 * 60 * 1000))
    let minuts = result - (hours * (60 * 60 * 1000))
    minuts = Math.trunc(minuts / (60 * 1000))
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minuts} MINUTO(S)`)
}


	
