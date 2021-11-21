var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
lines.shift();
let peso= [2,3,5];
// const round = (num, places) => {
// 	if (!("" + num).includes("e")) {
// 		return +(Math.round(num + "e+" + places)  + "e-" + places);
// 	} else {
// 		let arr = ("" + num).split("e");
// 		let sig = ""
// 		if (+arr[1] + places > 0) {
// 			sig = "+";
// 		}

// 		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
// 	}
// }

for(let valores of lines){
    let media = 0;
    valores = valores.split(' ').map(v=>parseFloat(v));
    media = ((valores[0]*peso[0]) + (valores[1]*peso[1]) + (valores[2]*peso[2]))/(peso[0]+peso[1]+peso[2]);
    console.log(media.toFixed(1));
}