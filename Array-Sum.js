//  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// MY SOLUTION STARTS: 

function sum (numbers) {
  let arrSum = numbers.reduce((acc, curVal) => acc + curVal, 0)
  return arrSum; 
}   
