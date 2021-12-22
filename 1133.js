var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));
let[a,b] = [...lines];

if(a>b){
    let temp = b; //b = 100
    b = a;
    a = temp;
}

for(let i = a+1 ; i < b; i++){
    if(i % 5 === 2 || i % 5 === 3)console.log(i);
}