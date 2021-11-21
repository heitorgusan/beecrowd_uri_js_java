var input= require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));
lines.shift();
//EVEN
//ODD
//NULL 0
//POSITIVE
//NEGATIVE
for(let v of lines){
    let frase = null;
    if(v % 2 === 0){
        frase = 'EVEN';
    }else{
        frase = 'ODD';
    }
    if(v > 0 )frase += ' POSITIVE';
    if(v < 0)frase += ' NEGATIVE';


    if(v===0)frase = 'NULL';
    console.log(frase);
}