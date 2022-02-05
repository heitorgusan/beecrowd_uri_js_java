var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input = Number(input);

let x = [];
x.push(input);
console.log(`N[${0}] = ${x[0]}`);
for(let i = 1; i < 10 ; i++){
    x.push(x[i-1]*2);
    console.log(`N[${i}] = ${x[i]}`);
}
