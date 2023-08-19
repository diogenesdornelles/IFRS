var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const values = lines.map(v => Math.abs(Number(v)));

values.shift()
values.forEach(v => {
    if (v !== 0) {
        let soma = 0
        for (let i = 1; i < v; i++) {
            if (v % i === 0) {
                soma+=i
            }
        }
        if (soma === v){
            console.log(`${v} eh perfeito`)
        } else {
            console.log(`${v} nao eh perfeito`)
        }
    }
})
