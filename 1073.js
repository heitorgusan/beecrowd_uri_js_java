var input = require('fs').readFileSync('stdin','utf-8');

for(let i = 1; i <= input; i++){
    if(i%2==0)console.log(`${i}^2 = ${i**2}`);
}