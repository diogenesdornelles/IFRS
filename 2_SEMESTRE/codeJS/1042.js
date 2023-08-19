var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

let originalArray, clonedArray;

originalArray = lines.map(v => Number(v));

clonedArray = [...originalArray]

function compare(a, b) {
    return a - b;
  }

clonedArray.sort(compare)

clonedArray.forEach(v => console.log(v))
console.log('')
originalArray.forEach(v => console.log(v))
