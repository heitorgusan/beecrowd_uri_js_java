var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
var [n1,n2,n3,n4,n5] = lines;
var cont = 0;
if(n1%2===0)cont++;
if(n2%2===0)cont++;
if(n3%2===0)cont++;
if(n4%2===0)cont++;
if(n5%2===0)cont++;

console.log(cont+' valores pares');