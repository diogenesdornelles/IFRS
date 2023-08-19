var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

let x, y;
x = Number(lines[0]);
y = Number(lines[1]);

var myFunction = (x, y) => {
    if (x === 0 && y === 0) {
        console.log('Origem');
        return;
    }
    if (x === 0 && y !== 0) {
        console.log('Eixo Y');
        return;
    }
    if (x !== 0 && y === 0) {
        console.log('Eixo X');
        return;
    }
    if (x > 0 && y > 0) {
        console.log('Q1');
        return;
    }
    if (x < 0 && y > 0) {
        console.log('Q2');
        return;
    }
    if (x < 0 && y < 0) {
        console.log('Q3');
        return;
    }
    if (x > 0 && y < 0) {
        console.log('Q4');
        return;
    }
}

myFunction(x, y)