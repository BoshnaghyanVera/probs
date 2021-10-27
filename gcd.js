//Write a function that returns the greatest common divisor of given 2 numbers
let frstNumber = 105; 
let secNumber = 60;  

//gcd for Greatest Common Factor
let gcd;

//The two numbers should be unequal
while (frstNumber != secNumber)
{
	if (frstNumber > secNumber)
	{
		frstNumber = frstNumber - secNumber;
	}
	else
	{
		secNumber = secNumber - frstNumber;
}
}
gcd = frstNumber;
console.log("The Greates Common Factor is " + gcd); 
