var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
lines.shift();

for (let v of lines) {
    v = v.split(' ').map(n => Number(n));
    let contador = 0;
    let soma = 0;

    for (let i = v[0]; contador < v[1]; i++) {
        if (i % 2 !== 0) {
            soma += i;
            contador++;
        }
    }
    console.log(soma);
}