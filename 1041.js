var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split(' ').map((v)=>Number(v));

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
if(x===0 && y==x){
    console.log('Origem');
}else if(y===0 && x!==0){
    console.log('Eixo X');
}else if(x===0 && y!==0){
    console.log('Eixo Y');
}else if(x>0){
    if(y>0){
        console.log('Q1');
    }else{
        console.log('Q4');
    }
}else{
    if(y>0){
        console.log('Q2');
    }else{
        console.log('Q3');
    }
}