
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of a given length and false in any other case.

// (In this case, all triangles must have a surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true


// SOLUTION STARTS HERE 

function isTriangle(a, b, c) {
  // Check for positive side lengths and the triangle inequality
  if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(3,3,3))    
