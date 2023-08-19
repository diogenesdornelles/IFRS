var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

var a, b, c, delta, r1, r2;
lines = lines.map(v => Number(v));
a = lines[0];
b = lines[1];
c = lines[2];

delta = Math.pow(b, 2) + -1 * (4 * a * c);

if (delta < 0) {
    console.log("Impossivel calcular")
} else if (a !== 0) {
    r1 = (- b + Math.sqrt(delta)) / (2 * a)
    r2 = (- b - Math.sqrt(delta)) / (2 * a)
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
} else if (a === 0) {
  console.log("Impossivel calcular")
}
