var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n').map(v => Number(v));

let media = 0;
let divisor = 0;
lines.forEach(v => {
    if (v <= 0) return;
    divisor++;
    media += v;
});

console.log((media / divisor).toFixed(2));