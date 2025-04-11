// Convert the number to a reversed array of digits
// Given a random non-negative number, you must return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


// SOLUTION STARTS HERE 

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

