var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let [peca1,peca2]=lines;
peca1 = peca1.split(' ');
peca2 = peca2.split(' ');
let p1_qtde;
let p1_valor;
let p2_qtde;
let p2_valor;
let total1;
let total2;

p1_qtde = parseFloat(peca1[1]);
p1_valor = parseFloat(peca1[2]);

p2_qtde = parseFloat(peca2[1]);
p2_valor = parseFloat(peca2[2]);

total1 = parseFloat(p1_qtde*p1_valor);
total2 = parseFloat(p2_qtde*p2_valor);

let total_real = parseFloat(total1+total2);
console.log(`VALOR A PAGAR: R$ ${total_real.toFixed(2)}`);
