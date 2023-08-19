var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines.map(v => Number(v));

let par = []
let impar = []

values.forEach(v => {
    if (v !== 0) {
        if (v % 2 === 0) {
            if (par.length === 5) {
                par.forEach((v, i) => {
                    console.log(`par[${i}] = ${v}`)
                })
                par = []
                par.push(v)
            } else {
                par.push(v)
            }
        } else {
            
            if (impar.length === 5) {
                impar.forEach((v, i) => {
                    console.log(`impar[${i}] = ${v}`)
                })
                impar = []
                impar.push(v)
            } else {
                impar.push(v)
            }
        }
    }
    
})

if (impar.length > 0) {
    impar.forEach((v, i) => {
        console.log(`impar[${i}] = ${v}`)
    })
}
if (par.length > 0) {
    par.forEach((v, i) => {
        console.log(`par[${i}] = ${v}`)
    })
}