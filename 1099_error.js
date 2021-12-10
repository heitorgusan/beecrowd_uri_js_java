var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
lines.shift();

for(let valor of lines){
    let [a,b] = valor.split(' ').map(v=>Number(v));
    
    let maior = 0;
    let menor = 0;
    let somaImpar = 0;
    if(b>a){
        maior = b;
        menor = a;
    }else{
        maior = a;
        menor = b;
    }
    
    for(let i = menor+1 ; i < maior ; i++){
        if(i%2!==0){
            somaImpar+=i;
        }
    }
    console.log(somaImpar);
}