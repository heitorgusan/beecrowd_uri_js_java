let input = require('fs').readFileSync('stdin','utf-8');
input = Number(input);
let valorTaxado = 0;
let taxa=0;
const [f1,f2,f3] = [0.08,0.18,0.28];
if(input <= 2000){
    console.log('Isento');
}else{
    valorTaxado = input-2000;
   
    if(valorTaxado<=1000){
        taxa = valorTaxado *f1;
    }else{
        taxa = 1000*f1;
        valorTaxado -=1000;
        if(valorTaxado<=1500){
            taxa += valorTaxado * f2;
        }else{
            taxa += 1500 * f2;
            valorTaxado -= 1500;
            taxa+=valorTaxado*f3;
        }
    }

    console.log(`R$ ${taxa.toFixed(2)}`);
}