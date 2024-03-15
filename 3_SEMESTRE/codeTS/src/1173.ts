var input = require('fs').readFileSync('src/dev/stdin', 'utf8');
var lines = input.split('\n');

let _length = 9
let lista = [Number(lines[0])]

for (let i = 0; i <= _length; i++) {
    lista.push(lista[lista.length -1] * 2)
}

if (lista instanceof Array) {
    lista.forEach((element, index) => {
        console.log(`N[${index}] = ${element}`);
    });
}