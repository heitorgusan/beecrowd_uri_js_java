const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf-8').split(' ').map(v => Number(v));

const arr = [];
let cont = 0;
let print = '';

for (let i = 1; i <= input[1]; i++) {
    print+=String(i)+' ';
    cont++;
    if(cont === input[0]){
        console.log(print.trim());
        cont = 0;
        print = '';
    }
}