const input = require('fs').readFileSync('src/dev/stdin', 'utf8');
const lines = input.split('\n');

if (lines instanceof Array) {
  const reversed = lines.map((v, i, arr) => {
    return arr[arr.length - (i + 1)];
  });
  reversed.forEach((element, index) => {
    console.log(`N[${index}] = ${element}`);
  });
}
