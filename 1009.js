var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let [A,B,C] = lines;
B = parseFloat(B);
const comissao = parseFloat(C * 0.15);
console.log(`TOTAL = R$ ${(comissao+B).toFixed(2)}`);