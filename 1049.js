var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n').map((v)=>v.replace(/(\r\n|\n|\r)/gm, ""));
let animais = [
    {
        tipo:'vertebrado',
        especie: 'ave',
        alimentacao:'carnivoro',
        animal:'aguia'
    },
    {
        tipo:'vertebrado',
        especie: 'ave',
        alimentacao:'onivoro',
        animal:'pomba'
    },
    {
        tipo:'vertebrado',
        especie: 'mamifero',
        alimentacao:'onivoro',
        animal:'homem'
    },
    {
        tipo:'vertebrado',
        especie: 'mamifero',
        alimentacao:'herbivoro',
        animal:'vaca'
    },
    {
        tipo:'invertebrado',
        especie: 'inseto',
        alimentacao:'hematofago',
        animal:'pulga'
    },
    {
        tipo:'invertebrado',
        especie: 'inseto',
        alimentacao:'herbivoro',
        animal:'lagarta'
    },
    {
        tipo:'invertebrado',
        especie: 'anelideo',
        alimentacao:'hematofago',
        animal:'sanguessuga'
    },
    {
        tipo:'invertebrado',
        especie: 'anelideo',
        alimentacao:'onivoro',
        animal:'minhoca'
    }

]

let [tipo,especie,alimentacao]=lines;

for(let animal of animais){
    if(tipo === animal.tipo && especie === animal.especie && alimentacao === animal.alimentacao){
        console.log(animal.animal);
    }
    
}