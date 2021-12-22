var input = require('fs').readFileSync('stdin','utf-8');
var n = Number(input);

for(let i = 1; i <= n;i++){
    console.log(i**1+' '+i**2+' '+i**3);
}