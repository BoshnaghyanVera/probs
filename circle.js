//Write a function that, given the radius of the circle, calculates its area.
const pi = 3.14;
const radius = -3;

let area = pi * (radius**2)

//It would not make sense if the radius was 0 or negative.
if(radius >= 1){ 
  console.log("Area of the circl is " + area)
} 
else{ 
  console.log("Area cannot be validly calculated")
}
