var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

const [horas,velocidade]=lines;

const totalLitro = (velocidade/12) * horas;

console.log(totalLitro.toFixed(3));