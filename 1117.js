var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

const media = [];
for(let v of lines){
    if(v >= 0 && v <=10){
        media.push(v);
        continue;
    }

    console.log('nota invalida');

}
console.log('media = '+((media[0]+media[1])/2).toFixed(2));