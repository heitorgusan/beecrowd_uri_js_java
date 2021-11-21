var input = require('fs').readFileSync('stdin','utf-8');
input = Number(input);

for(let i = 1 ; i <=10000; i++){
    if(i%input === 2){
        console.log(i);
    }
}