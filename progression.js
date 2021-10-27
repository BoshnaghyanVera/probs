//Given 3 variables, find out if they form an arithmetic progression.
let num1 = 30;
let num2 = 20;
let num3 = 10;

if(num3 > num2 && num2 > num1){ 
    if(num3 - num2 === num2 - num1){ 
        console.log("Arithmetic progression")
        } 
            else{ 
      console.log("No arithmetic progression")
        }
} 
else if (num1 > num2 && num2 > num3){ 
  if(num1 - num2 === num2 - num3){ 
        console.log("Arithmetic progression")
        } 
            else{ 
      console.log("No arithmetic progression")
        }  
}
