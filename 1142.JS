var input = require('fs').readFileSync('stdin','utf-8');
var n = Number(input);

let imprimir=[];
let cont = 1;
for(let i = 0 ; i < n ; i++){
    for(let j = 0; j < 3; j++){
        imprimir[i] +=' '+cont;
        cont++;
    }
    imprimir[i]+=' PUM';
    cont++;
}

imprimir = imprimir.map(v=>v.replace('undefined ',''));

for(let v of imprimir){
    console.log(v);
}