let i =0;
let j = 1;

while(i<=2){
    
    for(let x = 0; x<3;x++){
        if(i.toFixed(1)%1 !== 0 &&j.toFixed(1)%1!==0){
            console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
        }else{
            console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`);
        }

        j++;
    }
    i+=0.2;
    j=1+i;
}