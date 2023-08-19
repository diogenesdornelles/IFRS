var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let value = Number(lines[0]);

function customRound(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    const roundedValue = Math.floor(number * factor + 0.5) / factor;
    return roundedValue.toFixed(decimalPlaces);
  }

arr = [];

arr.push(value.toFixed(4));

for (let i = 0; i < 99; i++) {
    value = value / 2;
    //value = customRound(value, 4);
    arr.push(value.toFixed(10));
}

arr.forEach((v, i) => {
    console.log(`N[${i}] = ${v}`);
    
});


// N[0] = 123456789012345.0000
// N[1] = 61728394506172.5078
// N[2] = 30864197253086.2539


// N[5] = 3858024656635.7813 -1 JS


// N[5] = 3858024656635.78125 subiu 1
// N[26] = 1839649.51355 subiu 0
// N[32] = 28744.52365 subiu 1
// N[41] = 56.14165 subiu 1
// N[45] = 3.50885 subiu 1
// N[50] = 0.10965 subiu 1
// N[54] = 0.00685 subiu 1
// N[61] = 0.00005 subiu 1