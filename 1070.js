var input = require('fs').readFileSync('stdin','utf-8');
input = Number(input);

let cont = 0;

while(cont<6){
    if(input%2!==0){
        console.log(input);
        cont++;
    }
    input++;
}