var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let v;
v = Number(lines[0]);

const getTaxes = (value) => {
    let total = 0
    if (value <= 2000) return 'Isento'
    if (value > 4500) {
        total += ((value - 4500) * 0.28)
        value = 4500
    } 
    if (value > 3000 && value <= 4500) {
        total += ((value - 3000) * 0.18)
        value = 3000
    } 
    if (value > 2000) {
        total += ((value - 2000) * 0.08)
    }
    return `R$ ${total.toFixed(2)}`
}

console.log(getTaxes(v))
