//For a given number N, calculate N!. 
let num = 4;
let result = 1;

if(num < 0){
  console.log("Can't calculate for negative numbers");
  return;
  }

  while(num >= 1){ 
    result *= num;
    num--;
  }
  console.log(result)
