var input = require('fs').readFileSync('stdin', 'utf-8');
input = Number(input);

for (let i = 1; i <= input; i++) {
    if (input % i === 0) console.log(i);
}