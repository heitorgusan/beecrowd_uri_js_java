var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>v.split(' ').map(v=> Number(v)));
lines.shift();

for(let numeros of lines){
    const [dividendo,divisor] = [...numeros];
    if(divisor===0){
        console.log('divisao impossivel');
        continue;
    }

    console.log((dividendo/divisor).toFixed(1));
}