var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let contPar = 0;
let contImpar =0;
let cont_pos = 0;
let cont_neg=0;

for(let i =0; i<5;i++){
    if(lines[i]%2==0){
        contPar++;
    }else{
        contImpar++;
    }

    if(lines[i]>0){
        cont_pos++;
    }else if(lines[i]<0){
        cont_neg++;
    }
}

console.log(`${contPar} valor(es) par(es)`);
console.log(`${contImpar} valor(es) impar(es)`);
console.log(`${cont_pos} valor(es) positivo(s)`);
console.log(`${cont_neg} valor(es) negativo(s)`);