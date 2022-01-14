var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

for(let i = 0 ; i < lines.length ; i++){
    if(lines[i] === 0 ) return;
    let print = '';
    for(let j = 1 ; j <= lines[i] ; j++){
        print+=j+' ';
    }
    console.log(print.trim());
}