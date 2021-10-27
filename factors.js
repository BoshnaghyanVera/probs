//Output all the factors (divisors) of the given number N.
const number = 20;
let divisor = 1;

//Working on positive numbers only
while(number >= 1){ 
  if(number % divisor == 0){ 
    console.log(divisor);
    divisor++;
      }
      else { 
        divisor++;
      }
  }
