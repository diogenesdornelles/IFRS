var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let is_correct = false;
let count = 0;

while (!is_correct) {
    if (lines[count] === '2002') {
        is_correct = true
    } else {
        console.log('Senha Invalida')
        count++
    }
}
console.log('Acesso Permitido')
