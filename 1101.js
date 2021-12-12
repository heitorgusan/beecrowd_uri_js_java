var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

for(let valor of lines){
    valor = valor.split(' ').map(v=>Number(v));
    let soma = 0;
    let str_soma='';
    if(valor[0] > valor[1] && valor[0] > 0 && valor[1] > 0){
        let temp = valor[0];
        valor[0] = valor[1];
        valor[1] = temp;
    }
    for(let i = valor[0]; i <= valor[1]; i++){
        
        str_soma += String(i)+' ';
        soma += i;
        
    }
    str_soma+='Sum='+soma;
    if(soma!==0)console.log(str_soma);
}