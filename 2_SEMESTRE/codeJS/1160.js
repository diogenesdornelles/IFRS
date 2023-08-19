var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const values = lines.map(v => v);

const numberOfTestCases = values[0];

values.shift()

const tests = values.map(v => v.split(' '));

const populationA = tests.map((v, i) => {
    return Number(v[0])
})
const populationB = tests.map((v, i) => {
    return Number(v[1])
})

const grouwthA = tests.map((v, i) => {
    return Number(v[2]) / 100.00
})
const grouwthB = tests.map((v, i) => {
    return Number(v[3]) / 100.00
})

for (let i = 0; i < numberOfTestCases; i++) {
    let count = 0;
    if (populationA[i] > populationB[i]) {
        continue
    } else {
        while (populationA[i] <= populationB[i]) {
            populationB[i] = Math.trunc(populationB[i] + populationB[i] * grouwthB[i])
            populationA[i] = Math.trunc(populationA[i] + populationA[i] * grouwthA[i])
            count++
            if (count > 100) break
        }
        if (count > 100) {
            console.log(`Mais de 1 seculo.`)
        } else {
            console.log(`${count} anos.`)
        }
        
    }    
}
