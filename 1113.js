var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

for(let valor of lines){
    valor = valor.split(' ').map(v=>Number(v));
    if(valor[0]===valor[1])return;
    if(valor[0]!==valor[1])valor[0]>valor[1]?console.log('Decrescente'):console.log('Crescente');
}