var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

let media = ((lines[0]*2)+(lines[1]*3)+(lines[2]*5))/10;
console.log(`MEDIA = ${media.toFixed(1)}`);