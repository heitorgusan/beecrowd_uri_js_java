var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));
let [a,b] = [...lines];

if(a>b){
    let temp = b;//100
    b=a;//b=200
    a=temp;//a=100
}

let soma = 0;

for(let i = a; i <= b;i++){
    if(i%13!==0){
        soma+=i;
    }
}

console.log(soma);