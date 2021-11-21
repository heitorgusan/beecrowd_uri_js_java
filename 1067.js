var input = require('fs').readFileSync('stdin','utf-8');
input = Number(input);
let impares =[];
for(let i = 1 ;i<=input;i++){
    if(i%2!==0){
        impares.push(i);
    }
}

for(let imp of impares){
    console.log(imp);
}