var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n').map(v => Number(v));

const x = lines.shift();
let z = 0;
let soma = x;
let contator = 1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] > x) {
        z = lines[i];
        break;
    }

}

for (let i = x + 1; soma < z; i++) {
    soma += i;
    contator++;
}

console.log(contator);