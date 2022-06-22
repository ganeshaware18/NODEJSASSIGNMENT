var res;
function onetohund(number){

    var reusl = ++number ;
   
 if(reusl % 5 == 0 && reusl % 3 == 0){
       
    console.log(reusl + ": foobar");
    }
    
    else{
        if(reusl % 3 == 0){
            console.log(reusl + ": foo");
        }
    
        else if(reusl % 5 == 0){
            console.log(reusl + ": bar");
        }

        else {
            console.log(reusl);
        }
    }
    res = (number * (number+1)) / 2;

    if(reusl < 100){
        onetohund(reusl);
    }


}
onetohund(0);

console.log("NATURAL NUMBER SUM: " + res);