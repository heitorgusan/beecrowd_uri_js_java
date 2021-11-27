//Sapos, ratos e coelhos.
// A primeira lines de entrada contém um valor inteiro N que indica os 
// vários casos de teste que vem a seguir.
// Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade 
// de cobaias utilizadas e um caractere 
// Tipo ('C', 'R' ou 'S'), 
// indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).
var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>v.replace('\r',''));
lines.shift();

experiments = {
    C: 0,
    R: 0,
    S: 0,
    total:0
};

for(let guineaPig of lines){
    const [number,animal] = guineaPig.split(' ');
    if(animal ==='C') experiments[animal]+=Number(number);
    if(animal ==='R') experiments[animal]+=Number(number);
    if(animal ==='S') experiments[animal]+=Number(number);
    experiments['total']+=Number(number);
};

console.log(`Total: ${experiments['total']} cobaias`);
console.log(`Total de coelhos: ${experiments['C']}`);
console.log(`Total de ratos: ${experiments['R']}`);
console.log(`Total de sapos: ${experiments['S']}`);
console.log(`Percentual de coelhos: ${(experiments['C']/experiments['total'] *100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(experiments['R']/experiments['total'] *100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(experiments['S']/experiments['total'] *100).toFixed(2)} %`);