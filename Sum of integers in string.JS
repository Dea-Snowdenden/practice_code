Sum of integers in string

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string 
"The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

SOLUTION:

function sumOfIntegersInString(s){
  try { return s.match(/\d+/g).reduce((x,y)=>+x + +y,0) }
  catch (TypeError) { return 0 }
}