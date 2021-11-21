var input = require('fs').readFileSync('stdin','utf-8');

const dado = parseFloat(input);
let intervalo = null;

if(dado >= 0 && dado <= 25) intervalo = '[0,25]';
if(dado > 25 && dado <= 50) intervalo = '(25,50]';
if(dado > 50 && dado <= 75) intervalo = '(50,75]';
if(dado > 75 && dado <= 100) intervalo = '(75,100]';

if(dado < 0 || dado >100){
    console.log('Fora de intervalo');
}
else{
     console.log(`Intervalo ${intervalo}`);
}
