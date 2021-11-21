var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split(' ');

const item = parseInt(lines.shift());
const qtde = parseInt(lines.shift());
let total = 0;
switch(item){

    case 1:
        total = qtde * 4;
        break;
    case 2:
        total = qtde * 4.5;
        break;
    case 3:
        total = qtde * 5;
        break;
    case 4:
        total = qtde * 2;
        break;
    case 5:
        total = qtde * 1.5;
        break;

}

console.log(`Total: R$ ${total.toFixed(2)}`);