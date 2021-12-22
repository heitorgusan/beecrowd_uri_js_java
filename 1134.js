var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

// const posto = {
//     alcool: 0,
//     gasolina: 0,
//     diesel: 0
// };

// for(let combustivel of lines){
//     if(combustivel>=4)continue;
    
//     if(combustivel === 1 ){
//         posto.alcool++;
//     }else if(combustivel ===2){
//         posto.gasolina++;
//     }else{
//         posto.diesel++;
//     }
// }

// console.log(`MUITO OBRIGADO\nAlcool: ${posto['alcool']}\nGasolina: ${posto['gasolina']}\nDiesel: ${posto['diesel']}\n`);

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for(let c of lines){
    if(c===1)alcool++;
    if(c===2)gasolina++;
    if(c===3)diesel++;
}

console.log('MUITO OBRIGADO');
console.log('Alcool: '+alcool);
console.log('Gasolina: '+gasolina);
console.log('Diesel: '+diesel);