var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const scores = lines[0].split(' ') 
const averageWeigths = [2, 3, 4, 1]
let pond = 0
let prod = 0


for (let i = 0; i < scores.length; i++) {
    pond += averageWeigths[i]
    prod += averageWeigths[i] * Number(scores[i])
}

let media = prod / pond;

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log(`Aluno aprovado.`)
} else if (media < 5) {
    console.log(`Aluno reprovado.`)
} else {
    console.log(`Aluno em exame.`)
    let exame = Number(lines[1])
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    if ((exame + media) / 2 >= 5) {
        console.log(`Aluno aprovado.`)
    } else {
        console.log(`Aluno reprovado.`)
    }
    console.log(`Media final: ${((exame + media) / 2).toFixed(1)}`)
}

