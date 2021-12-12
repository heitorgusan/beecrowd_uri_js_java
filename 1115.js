var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v => v.split(' ').map(v=>Number(v)));

for(let cord of lines){
    const [x,y] = [...cord];
    if(x===0||y===0)return;

    if(x>0){
        y>0?console.log('primeiro'):console.log('quarto');
    }else{
        y>0?console.log('segundo'):console.log('terceiro');
    }
}