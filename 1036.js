var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ');
let [A,B,C] = lines;
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);
const delta = (B*B)-(4*A*C);
let R1 = 0;
let R2 = 0;
if(delta < 0 || A === 0){
    console.log('Impossivel calcular');
}else{
    R1 = (-B + Math.sqrt(delta)) / (2*A);
    R2 = (-B - Math.sqrt(delta)) / (2*A);

    console.log('R1 = ' + R1.toFixed(5));
    console.log('R2 = ' +R2.toFixed(5));
}
