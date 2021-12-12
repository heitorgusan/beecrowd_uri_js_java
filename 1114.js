var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map(v=>Number(v));

for(let senha of lines){
    if(senha===2002){
        console.log('Acesso Permitido');
        return;
    }
    console.log('Senha Invalida');
}