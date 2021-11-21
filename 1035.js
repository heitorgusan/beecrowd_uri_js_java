var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ');

const [A,B,C,D] = lines;

if((B > C && D > A) && ((C + D) > (A + B)) && (C > 0 && D >0) && (A % 2 === 0)){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}