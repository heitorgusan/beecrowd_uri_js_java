var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

let [x,y] = lines;
let somaImpar = 0;
if(x>y){
    for(y=y+1; y < x ; y++){
        if(y%2!==0){
            somaImpar+=y;
        }
    }
}else{
    for(x=x+1; x < y ; x++){
        if(x%2!==0){
            somaImpar+=x;
        }
    }
}

console.log(somaImpar);