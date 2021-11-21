var input = require('fs').readFileSync('stdin','utf-8');
let numero = Number(input);

const tempo = [365,30];

console.log(`${Math.floor(numero/tempo[0])} ano(s)`);
numero %=tempo[0];
console.log(`${Math.floor(numero/tempo[1])} mes(es)`);
numero%=tempo[1];
console.log(`${numero} dia(s)`);