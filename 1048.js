var input = require('fs').readFileSync('stdin','utf-8');
var salario = Number(input);
const reajustes = [0.15,0.12,0.10,0.07,0.04];
let reajuste_ganho = 0;
let reajuste_percentual = 0;

if(salario <= 400){
    reajuste_ganho =salario*reajustes[0];
    salario +=  salario*reajustes[0];
    reajuste_percentual = reajustes[0]*100;
}else if(salario >=400.01 && salario<=800){
    reajuste_ganho =salario*reajustes[1];
    salario+=salario*reajustes[1];
    reajuste_percentual = reajustes[1]*100;
}
else if (salario >=800.01 && salario<=1200){
    reajuste_ganho =salario*reajustes[2];
    salario+=salario*reajustes[2];
    reajuste_percentual = reajustes[2]*100;
}
else if (salario >=1200.01 && salario<=2000){
    reajuste_ganho =salario*reajustes[3];
    salario+=salario*reajustes[3];
    reajuste_percentual = reajustes[3]*100;
}
else{
    reajuste_ganho =salario*reajustes[4];
    salario+=salario*reajustes[4];
    reajuste_percentual = reajustes[4]*100;
}

console.log(`Novo salario: ${salario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
console.log(`Em percentual: ${reajuste_percentual.toFixed(0)} %`);