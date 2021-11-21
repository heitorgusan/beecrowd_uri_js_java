var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v => Number(v)).filter(v =>v>0);

let media = lines.reduce((ac,v)=>{
    let soma =+ ac+v;
    return soma;
},0)/lines.length;

console.log(`${lines.length} valores positivos`);
console.log(media.toFixed(1));