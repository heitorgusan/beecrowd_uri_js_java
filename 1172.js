var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(v => Number(v));

lines = lines.map(v => v <= 0 ? v = 1 : v = v);

for(let i = 0; i < lines.length; i++){
    console.log(`X[${i}] = ${lines[i]}`);
}