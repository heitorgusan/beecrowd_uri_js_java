var input = require('fs').readFileSync('stdin', 'utf-8');
input = Number(input);

const fibonnaci = [0, 1];

let soma = null;

for (let i = 1; i < input - 1; i++) {
    soma = fibonnaci[i] + fibonnaci[i - 1];
    fibonnaci.push(soma);
}
let str = '';
for (let i = 0; i < fibonnaci.length; i++) {
    str += fibonnaci[i] + ' ';
}
console.log(str.trim());