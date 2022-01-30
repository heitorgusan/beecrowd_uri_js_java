var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n').map(v => Number(v));

lines.shift();

lines.forEach(v => {
    let soma = 0;
    for (let i = 1; i < v; i++) {
        if (v % i === 0) soma += i;
    }
    soma === v && v !== 0 ? console.log(`${v} eh perfeito`) : console.log(`${v} nao eh perfeito`);
});