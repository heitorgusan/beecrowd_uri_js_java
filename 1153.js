var input = require('fs').readFileSync('stdin', 'utf-8');
input = Number(input);
let fac = input;


for (let i = input - 1; i > 0; i--) {
    fac *= i;
}


console.log(fac);