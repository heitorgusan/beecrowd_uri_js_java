var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

let maior = [...lines];
let posicao = 0;
maior = [...maior.sort((a,b)=>b-a)];

for(let i = 0 ;i<lines.length;i++){
    if(maior[0]===lines[i]){
        posicao = i+1;
    }
}

console.log(maior[0]);
console.log(posicao);