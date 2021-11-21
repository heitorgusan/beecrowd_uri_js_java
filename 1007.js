var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let dif = ((lines[0]*lines[1])-(lines[2]*lines[3]));
console.log(`DIFERENCA = ${dif}`);
