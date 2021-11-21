var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ').map((v)=>Number(v));

const [a,b,c] = lines;

if(a + b > c && b + c > a && a + c > b){
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
}else{
    console.log(`Area = ${(((a+b)*c)/2).toFixed(1)}`);
}