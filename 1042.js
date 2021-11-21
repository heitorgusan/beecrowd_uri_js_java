var input = require('fs').readFileSync('stdin','utf-8');
let valores_originais = input.split(' ').map((v)=>Number(v));
let valores_ordenados = [...valores_originais];

//SWAP(TROCAR)
// function trocar(a,b){
//     return [b,a];
// }
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

//0,2,8,9,10,12;
valores_ordenados = bubbleSort(valores_ordenados);

for(let n of valores_ordenados){
    console.log(n);
}
console.log();

for(let n of valores_originais){
    console.log(n);
}