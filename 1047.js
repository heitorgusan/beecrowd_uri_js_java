var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ').map((v)=>Number(v));

let [h1,m1,h2,m2] = lines;
let minutos;
let horas;
if(h2>h1){
    if(m2>m1){
        minutos = m2-m1;
        horas = h2-h1;
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
    }else if(m1>m2){
        horas = h2-h1;
        minutos = m1-m2;
        horas = (horas*60) - minutos;
        console.log(`O JOGO DUROU ${parseInt(horas/60)} HORA(S) E ${horas%60} MINUTO(S)`);
    }else{
        horas = h2-h1;
        minutos=0;
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
    }

}else if(h1>h2){
    if(m2>m1){
        minutos = m2-m1;
        horas = 24 - (h1-h2);
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
    }else if(m1>m2){
        horas =24 - (h1-h2);
        minutos = m1-m2;
        horas = (horas*60) - minutos;
        console.log(`O JOGO DUROU ${parseInt(horas/60)} HORA(S) E ${horas%60} MINUTO(S)`);
    }else{
        horas = 24 - (h1-h2);
        minutos=0;
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
    }

}else{
    horas = 24;
    if(m1>m2){
        minutos = m1-m2;
        horas=(horas*60) - minutos;
        console.log(`O JOGO DUROU ${parseInt(horas/60)} HORA(S) E ${horas%60} MINUTO(S)`);
    }else if (m2>m1){
        horas = 0;
        minutos = m2-m1;
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
    }else{
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${0} MINUTO(S)`);
    }
}