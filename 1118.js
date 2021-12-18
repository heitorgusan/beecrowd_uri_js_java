var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

function calcularMedia(numeros,contador){
    const calcMedia =[];
    for(let i = contador ; i < numeros.length ; i++){
        if(numeros[i]>=0 && numeros[i]<=10){
            if(calcMedia.length===2) break;
            calcMedia.push(numeros[i]);

            contador++;
        }else{
            console.log('nota invalida');
            contador++;
            continue;
        }
    }
    console.log(`media = ${((calcMedia[0]+calcMedia[1])/2).toFixed(2)}`);
    continuarMedia(contador);
}

function continuarMedia (n){
    console.log('novo calculo (1-sim 2-nao)');
    if(lines[n] ===1){
        n++;
        calcularMedia(lines,n);
    }else if (lines[n]===2){
        return;
    }else{
        n++;
        continuarMedia(n);
    }
}
calcularMedia(lines,0);