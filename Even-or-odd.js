
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


// MY SOLUTION 

function oddOrEven(array) {
 const arrSum = array.reduce( (acc, curVal) => acc + curVal, 0 )
 if (arrSum % 2 === 0) {
   return "even"
 } else {
   return "odd"
 }
} 

// OR 

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
} 
