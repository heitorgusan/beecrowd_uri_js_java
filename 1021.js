var input = require('fs').readFileSync('stdin','utf-8');

var lines = input.split('\n');

let valorM = Number(input);
const notas = [100,50,20,10,5,2];
const moedas = [1,0.5,0.25,0.1,0.05,0.01];

console.log('NOTAS:');
for(let nota of notas){
    console.log(`${Math.floor(valorM/nota)} nota(s) de R$ ${nota.toFixed(2)}`);
    valorM = valorM%nota;

}
console.log('MOEDAS:');
for(let moeda of moedas){
    console.log(`${Math.floor(valorM/moeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valorM = valorM%moeda+ 0.00001;
}