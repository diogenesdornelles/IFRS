var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
var numberEmployee, workedHours, amountReceivedPerHour, total;
numberEmployee = Number(lines[0]);
workedHours = Number(lines[1]);
amountReceivedPerHour = Number(lines[2]);

total = workedHours * amountReceivedPerHour;

console.log("NUMBER = " + numberEmployee);
console.log("SALARY = U$ " + total.toFixed(2));