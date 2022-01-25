var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n').map(v => Number(v));
lines.forEach(v => {
    if (v === 0) return;
    let soma = 0;
    let cont = 0;
    for (let i = v; cont < 5; i++) {
        if (i % 2 === 0) {
            soma += i;
            cont++;
        }

    }
    console.log(soma);
});