var input = require('fs').readFileSync('stdin'  ,'utf-8');
var lines = input.split('\n');

console.log(`PROD = ${lines[0]*lines[1]}`);
