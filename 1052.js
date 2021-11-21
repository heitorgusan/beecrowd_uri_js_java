var input = require('fs').readFileSync('stdin','utf-8');
input = Number(input);

const months = ['January','February','March',
                'April','May','June',
                'July','August','September',
                'October','November','December'];

console.log(months[input-1]);

// switch(input){
//     case 1:
//         console.log(months[input-1]);
//         break;
//     case 2:
//         console.log(months[input-1]);
//         break;
//     case 3:
//         console.log(months[input-1]);
//         break;
//     case 1:
//         console.log(months[input-1]);
//         break;
//     case 4:
//         console.log(months[input-1]);
//         break;
//     case 5:
//         console.log(months[input-1]);
//         break;
//     case 6:
//         console.log(months[input-1]);
//         break;
//     case 7:
//         console.log(months[input-1]);
//         break;
//     case 8:
//         console.log(months[input-1]);
//         break;
//     case 9:
//         console.log(months[input-1]);
//         break;
//     case 10:
//         console.log(months[input-1]);
//         break;
//     case 11:
//         console.log(months[input-1]);
//         break;
//     case 12:
//         console.log(months[input-1]);
//         break;

// }