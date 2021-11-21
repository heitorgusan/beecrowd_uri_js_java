var input = require('fs').readFileSync('stdin','utf-8');
input = parseInt(input);
let cadastrado = false;

let estados = [
    {ddd:61,estado:'Brasilia'},
    {ddd:71,estado:'Salvador'},
    {ddd:11,estado:'Sao Paulo'},
    {ddd:21,estado:'Rio de Janeiro'},
    {ddd:32,estado:'Juiz de Fora'},
    {ddd:19,estado:'Campinas'},
    {ddd:27,estado:'Vitoria'},
    {ddd:31,estado:'Belo Horizonte'}
];

for(let obj of estados){
    if(input === obj.ddd){
        console.log(obj.estado);
        cadastrado = true;
        return;
    }
}

if(!cadastrado)console.log('DDD nao cadastrado');