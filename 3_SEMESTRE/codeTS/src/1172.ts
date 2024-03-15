var input = require('fs').readFileSync('src/dev/stdin', 'utf8');
var lines = input.split('\n');




if (lines instanceof Array) {
    lines.forEach((element, index) => {
        try {
            let n = parseInt(element);
            if (n <= 0 || !n) {
                lines[index] = 1;
            } else {
                lines[index] = n;
            }
        }
        catch (error) {
            lines[index] = 1;
        }
    });
}

if (lines instanceof Array) {
    lines.forEach((element, index) => {
        console.log(`X[${index}] = ${element}`);
    });
}