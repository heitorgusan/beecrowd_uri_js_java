var input = require('fs').readFileSync('stdin','utf-8');
input = parseFloat(input);
let pi = 3.14159;

const volume = (4/3)*pi*Math.pow(input,3);

console.log(`VOLUME = ${volume.toFixed(3)}`);