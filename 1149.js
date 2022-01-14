var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ').map(v => Number(v));

const a = lines.shift();
let n = null;
let soma = 0;
lines.forEach(v => {

    if (v > 0) {
        n = v;
        return;
    }
});

for (let i = 0; i < n; i++) {
    soma+= (a+i);
}
console.log(soma);