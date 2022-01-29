var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
const valores = [];
const tempoUltrapassar = [];
lines.shift();

//Separando as strings
for (let v of lines) {
    v = v.split(' ').map(valor => Number(valor));
    valores.push(v);
}

//Calculando o tempo de crescimento em anos

for (let v of valores) {
    let [pA, pB, tpA, tpB] = v;
    let tempo = 0;
    
    if(pA>pB){
        tempo =0;
        tempoUltrapassar.push(tempo);
        continue;
    }

    do{
        tempo++;
        if(tempo > 100) {
            tempo = 'Mais de 1 seculo.';
            break;
        }
        pA += Math.floor((tpA / 100) * pA);
        pB += Math.floor((tpB / 100) * pB);

    }while(pA<=pB);
    
    tempoUltrapassar.push(tempo);

}

for (let v of tempoUltrapassar) {
    if (typeof v !== 'number') {
        console.log(v);
        continue;
    }

    console.log(v + ' anos.');
}