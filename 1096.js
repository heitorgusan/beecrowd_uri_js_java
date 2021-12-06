let i=1;
let j =7;

do{
    for(let x = 0;x < 3 ; x++){
        console.log(`I=${i} J=${j}`);
        j--;
    }
    j=7;
    i+=2;
    
}while(i<10);