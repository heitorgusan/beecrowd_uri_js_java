var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ');

let [a,b,c] = lines;
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
let maiorab = (a+b+Math.abs(a-b))/2;

let maiorabc = (maiorab+c+Math.abs(maiorab-c))/2;
console.log(`${maiorabc} eh o maior`);