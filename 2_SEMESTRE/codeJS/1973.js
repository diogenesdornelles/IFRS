var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let values = lines[1].split(' ');

values = values.map(v => Number(v));

let stars = [];

let farmsStacked = [];

values.forEach((qtn, index) => {
    stars = [...stars, {number: index, sheeps: qtn}];
});

for (let i = 0; i < stars.length; i++) {
    if (stars[i].sheeps > 0) {
        stars[i].sheeps--
        if (!farmsStacked.includes(stars[i].number)) farmsStacked.push(stars[i].number);
        if ((stars[i].sheeps + 1) % 2 === 0) {
            if (i - 2 > -1) {
                i -= 2;
            } else i = stars.length;
        }
    } 
}

const total = stars.reduce((acc, star) => acc + star['sheeps'], 0);

console.log(`${farmsStacked.length} ${total}`);