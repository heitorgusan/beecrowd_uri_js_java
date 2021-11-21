var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

const [km,cb] = lines;
const kml = km/cb;
console.log(kml.toFixed(3)+' km/l');