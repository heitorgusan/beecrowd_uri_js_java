var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let [notas,nota_exame] = lines;
notas = notas.split(' ');

let [n1,n2,n3,n4] =  notas;
n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
nota_exame  = parseFloat(nota_exame);
let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + n4 ) / 10;
console.log(`Media: ${media.toFixed(1)}`);
if(media >= 7){ 
    console.log('Aluno aprovado.');
}else if (media >= 5 &&  media < 7){
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${nota_exame.toFixed(1)}`);
    if(nota_exame+media >=5){
        console.log('Aluno aprovado.');
        console.log(`Media final: ${((media+nota_exame)/2).toFixed(1)}`);
    }else{
        console.log('Aluno reprovado.');
        console.log(`Media final: ${((media+nota_exame)/2).toFixed(1)}`);
    }
}else{
    console.log('Aluno reprovado.');
}