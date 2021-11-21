var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
console.log(`SOMA = ${a+b}`);