const input = require('fs').readFileSync('src/dev/stdin', 'utf8');
const lines = input.split('\n');

function truncateSpecial(value: number) {
  const match = value
    .toFixed(6)
    .toString()
    .match(/(^\d*\.\d{4})50*$/);
  if (match) {
    return match[1];
  } else {
    return value.toFixed(4);
  }
}

let value = Number(lines[0]);

const arr: string[] = [];

arr.push(value.toFixed(4));

for (let i = 0; i < 99; i++) {
  value = value / 2;
  arr.push(truncateSpecial(value));
}

arr.forEach((v, i) => {
  console.log(`N[${i}] = ${v}`);
});
