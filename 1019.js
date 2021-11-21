var input = require('fs').readFileSync('stdin','utf-8');

let valor = Number(input);
const time = [3600,60];
let hours = 0;
let minutes = 0;
let seconds = 0;

if(Math.floor((valor/time[0]))> 0) {
    hours = Math.floor(valor/time[0]);
    valor%=time[0];
}
if(Math.floor((valor/time[1]))> 0) {
    minutes = Math.floor(valor/time[1]);
    valor%=time[1];
}
seconds = valor;
console.log(`${hours}:${minutes}:${seconds}`);