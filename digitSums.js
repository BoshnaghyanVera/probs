//Output all the 2 digit numbers, for which the sum of the digits is smaller than 10
for(let i=10; i<99; i++) { 
    //calculating sum of the digits of two-digit numbers
    const digit2 = i%10;
    const digit1 = (i-digit2)/10;
    let num= digit1+digit2;

    //checking if the sum of the digits id less than 10
    if(num <10) { 
        console.log(i)
    }
}