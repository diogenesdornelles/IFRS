var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

arr1 = lines.map(line => line.split(' '));
arr2 = arr1.map(el => {
    arr = []
    el.forEach(v => {

        arr.push(Number(v))
    })
    return arr
})

arr2.forEach(el => {
    msg = ''
    let maior
    let soma = 0
    menor = el[0] >= el[1]
    if (menor) {
        menor = el[1] 
        maior = el[0]
    } else {
        menor = el[0]
        maior = el[1]
    }
    for (let i = menor; i <= maior; i++){
        msg += `${i} `
        soma += i
    }
    if (soma > 0 && !msg.includes('0')) {
        console.log(`${msg}Sum=${soma}`)
    }
})