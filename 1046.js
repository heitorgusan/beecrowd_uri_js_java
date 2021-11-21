var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ').map((v)=>Number(v));

[h1,h2] = lines;
let horas = 0;
if(h1>h2){
    horas = (24-h1) + h2;
}else if (h2>h1){
    horas = h2-h1;
}else{
    horas =24;
}

console.log(`O JOGO DUROU ${horas} HORA(S)`);