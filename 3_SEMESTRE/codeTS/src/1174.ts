const input = require('fs').readFileSync('src/dev/stdin', 'utf8');
const lines = input.split('\n');

if (lines instanceof Array) {
  const filtered: number[] = lines.filter((element) => {
    return Number(element) <= 10 ? Number(element) : false;
  });
  if (filtered instanceof Array) {
    filtered.forEach((element, index) => {
      console.log(`A[${index}] = ${Number(element).toFixed(1)}`);
    });
  }
}
