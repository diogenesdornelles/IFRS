// eslint-disable-next-line @typescript-eslint/no-var-requires
const input: string = require('fs').readFileSync('./src/stdin', 'utf-8');
const lines: string[] = input.split('\n');
lines.pop();

const a = lines[0];
const b = lines[1];

if (typeof a === 'number' && typeof b === 'number') {
  const x = a + b;
  console.log(x);
} else console.log(`${a} ${b}`);
