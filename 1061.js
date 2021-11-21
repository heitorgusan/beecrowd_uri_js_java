var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

const [startingDay,startingHours,endingDay,endingHours] = lines;

//Extraindo os números iniciais.
let startingDayNumber = Number(startingDay.replace('Dia ',''));
let startingHoursNumber = startingHours.replace(/\D /g ,'');
startingHoursNumber = startingHoursNumber.split(' ').map(v=>Number(v));
let [h1,m1,s1] = startingHoursNumber;

//Extraindo os números Finais
let endingDayNumber = Number(endingDay.replace('Dia ',''));
let endingHoursNumber = endingHours.replace(/\D /g ,'');
endingHoursNumber = endingHoursNumber.split(' ').map(v=>Number(v));
let [h2,m2,s2] = endingHoursNumber;

//CONVERTENDO TUDO EM SEGUNDOS;
let t1 = s1+m1*60+h1*60*60+startingDayNumber*60*60*24;
let t2 = s2+m2*60+h2*60*60+endingDayNumber*60*60*24;
let tempo_total = t2-t1;

//Convertendo em minutos
console.log(`${parseInt(tempo_total/(60*60*24))} dia(s)`);
tempo_total = tempo_total % (60*60*24);
console.log(`${parseInt(tempo_total/(60*60))} hora(s)`);
tempo_total = tempo_total % (60*60);
console.log(`${parseInt(tempo_total/(60))} minuto(s)`);
tempo_total = tempo_total % 60;
console.log(`${parseInt(tempo_total)} segundo(s)`);
// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)