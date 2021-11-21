var input = require('fs').readFileSync('stdin', 'utf8');
input = Number(input);

for(let i =1;i<=10;i++){
    console.log(i+' x '+input+' = '+input*i);
}