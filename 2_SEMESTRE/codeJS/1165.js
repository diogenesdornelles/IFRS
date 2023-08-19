var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const values = lines.map(v => Math.abs(Number(v)));
values.shift()

values.forEach(v => {
    let isPrimo = true
    if (v !== 0) {
        for (let i = 2; i < v; i++) {
            if (v % i === 0) {
                isPrimo = false
            }
        }
        if (isPrimo === true){
            console.log(`${v} eh primo`)
        } else {
            console.log(`${v} nao eh primo`)
        }
    }
})
