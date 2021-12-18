var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>v.split(' ').map(v=>Number(v)));
let inter = 0;
let gremio = 0;
let empates = 0;

function resultadoGrenal(n){
    let inter_time = (lines[n][0]);
    let gremio_time = (lines[n][1]);
    if(inter_time>gremio_time){
        inter++;
    }else if (gremio_time > inter_time) {
        gremio++;
    }else{
        empates++;
    }
    n++;
    if(n < lines.length)continuarGrenal(n);
}

function continuarGrenal(n){
    console.log('Novo grenal (1-sim 2-nao)');
    if(lines[n][0] === 1){
        n++;
        resultadoGrenal(n);
    }else{
        console.log(`${inter + gremio + empates} grenais`);
        console.log(`Inter:${inter}`);
        console.log(`Gremio:${gremio}`);
        console.log(`Empates:${empates}`);
        if(inter>gremio){
            console.log(`Inter venceu mais`);
        }else if(inter<gremio){
            console.log(`Gremio venceu mais`);
        }else{
            console.log(`Nao houve vencedor`);
        }
    }
}
resultadoGrenal(0);