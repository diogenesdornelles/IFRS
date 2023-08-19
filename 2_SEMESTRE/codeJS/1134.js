var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

values = lines.map(v => Number(v))
let count = 0;
let alcool = []
let gas = []
let diesel = []

while (values[count] !== 4) {
    if (values[count] > 4 || values[count] < 1) {
        count++
    } else {
        if (values[count] === 1) alcool.push(values[count])
        if (values[count] === 2) gas.push(values[count])
        if (values[count] === 3) diesel.push(values[count])
        count++
    }
}
console.log('MUITO OBRIGADO')
console.log(`Alcool: ${alcool.length}`)
console.log(`Gasolina: ${gas.length}`)
console.log(`Diesel: ${diesel.length}`)

