const input = require('fs').readFileSync('src/dev/stdin', 'utf8');
const lines = input.split('\n');

if (lines instanceof Array) {
  lines.forEach((element, index) => {
    try {
      const n = parseInt(element);
      if (n <= 0 || !n) {
        lines[index] = 1;
      } else {
        lines[index] = n;
      }
    } catch (error) {
      lines[index] = 1;
    }
  });
}

if (lines instanceof Array) {
  lines.forEach((element, index) => {
    console.log(`X[${index}] = ${element}`);
  });
}
