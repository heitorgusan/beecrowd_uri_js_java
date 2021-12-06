
let i =1;
let j =7;
let j_original = 7;
while(i<10){

    for(let x =0 ; x<3;x++){
        console.log(`I=${i} J=${j}`);
        j--;
    }
    i+=2;
    j_original+=2;
    j = j_original;
}