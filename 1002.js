var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
console.log(lines)
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
console.log(`X = ${a+b}`);