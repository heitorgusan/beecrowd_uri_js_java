var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ').map((v)=>Number(v));

let [a,b] = lines;

if(a % b === 0 || b % a === 0){
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}