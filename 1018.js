var input = require('fs').readFileSync('stdin','utf-8');


//SOLUÇÃO 1
// var valorMon = parseFloat(input);
// const cedulas = [100,50,20,10,5,2,1];
// const cedulas_qtde = [];

// var resto = 0;

// for(var cedula of cedulas){
//     if(Math.floor(valorMon/cedula)>0){
//         resto = valorMon%cedula;
//         cedulas_qtde.push(Math.floor(valorMon/cedula));
//         valorMon = resto;
//     }else{
//         cedulas_qtde.push(0);
//     }
// }
// console.log(input);
// console.log(cedulas_qtde[0]+' nota(s) de R$ 100,00');
// console.log(cedulas_qtde[1]+' nota(s) de R$ 50,00');
// console.log(cedulas_qtde[2]+' nota(s) de R$ 20,00');
// console.log(cedulas_qtde[3]+' nota(s) de R$ 10,00');
// console.log(cedulas_qtde[4]+' nota(s) de R$ 5,00');
// console.log(cedulas_qtde[5]+' nota(s) de R$ 2,00');
// console.log(cedulas_qtde[6]+' nota(s) de R$ 1,00');
// console.log('');

//SOLUÇÃO 2
console.log(input);
valor = Number(input);

const nota = [100, 50, 20, 10, 5, 2, 1];
for (let i = 0 ; i < nota.length;i++) {

var qtd_nota = Math.floor(valor/nota[i]);
console.log(`${qtd_nota} nota(s) de R$ ${nota[i]},00`);

valor %= nota[i];
}
let valor = Number(input);
console.log(valor);

console.log(parseInt(valor/100)+' nota(s) de R$ 100,00');
if(parseInt(valor/100)>0)valor%=100;
console.log(parseInt(valor/50)+' nota(s) de R$ 50,00');
if(parseInt(valor/50)>0)valor%=50;
console.log(parseInt(valor/20)+' nota(s) de R$ 20,00');
if(parseInt(valor/20)>0)valor%=20;
console.log(parseInt(valor/10)+' nota(s) de R$ 10,00');
if(parseInt(valor/10)>0)valor%=10;
console.log(parseInt(valor/5)+' nota(s) de R$ 5,00');
if(parseInt(valor/5)>0)valor%=5;
console.log(parseInt(valor/2)+' nota(s) de R$ 2,00');
if(parseInt(valor/2)>0)valor%=2;
console.log(parseInt(valor/1)+' nota(s) de R$ 1,00');
if(parseInt(valor/1)>0)valor%=1;