var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

const [number,hour,salary] = lines;
const salario = hour*salary;
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);