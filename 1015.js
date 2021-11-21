var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
let [p1,p2] = lines;
p1 = p1.split(' ');
p2 = p2.split(' ');

const distancia = Math.sqrt(Math.pow((p2[0]-p1[0]),2)+Math.pow((p2[1]-p1[1]),2));
console.log(distancia.toFixed(4));
