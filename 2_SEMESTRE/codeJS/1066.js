var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let arr;
let par = []
let impar = []
let positivo = []
let negativo = []

arr = lines.map(v => Number(v))

arr.forEach(v => {

    if (v % 2 === 0) {
        par.push(v) 
    } else {
        impar.push(v)
    }
    if (v > 0) {
        positivo.push(v)
    } else if (v < 0) {
        negativo.push(v)
    }
})
par.pop()
console.log(par.length + ' valor(es) par(es)')
console.log(impar.length + ' valor(es) impar(es)')
console.log(positivo.length + ' valor(es) positivo(s)')
console.log(negativo.length + ' valor(es) negativo(s)')
