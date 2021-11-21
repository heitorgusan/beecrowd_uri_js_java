var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

const n = 3.14159;
lines=parseFloat(lines);
lines = lines*lines;

console.log(`A=${(n*lines).toFixed(4)}`);