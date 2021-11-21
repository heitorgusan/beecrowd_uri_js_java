var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ').map((v)=>Number(v));

function bubbleSort(arrays){
    let tamanho = arrays.length;
    for(let i = 0 ; i < tamanho;i++){
        for(let j = 0 ; j <tamanho;j++){
            if(arrays[j]>arrays[j+1]){
                let tmp = arrays[j+1];
                arrays[j+1] = arrays[j]
                arrays[j] = tmp;
                
            }
            
        }
    }
    return arrays;
}

lines = bubbleSort(lines);

[c,b,a] = lines;

if(a >= (b+c)){
    console.log('NAO FORMA TRIANGULO');
}else{

    if((a*a) == ((b*b) + (c*c))){
        console.log('TRIANGULO RETANGULO');
    }
    if((a*a) > ((b*b) + (c*c))){
        console.log('TRIANGULO OBTUSANGULO');
    }
    if((a*a) < ((b*b) + (c*c))){
        console.log('TRIANGULO ACUTANGULO');
    }
    if(a == b && b== c){
        console.log('TRIANGULO EQUILATERO');
    }
    if(a==b && b!=c || b==c && a!=c || a==c && b!=c){
        console.log('TRIANGULO ISOSCELES');
    }
}