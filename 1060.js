var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

let contPositivos = 0;
for(let n of lines){
    if(n>0){
        contPositivos++;
    }
}

console.log(`${contPositivos} valores positivos`);