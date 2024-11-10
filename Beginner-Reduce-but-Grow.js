// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// MY SOLUTION STARTS HERE 

function grow(array){
  let grownArray = array.reduce((acc, curVal) => acc * curVal, 1  )
  return grownArray
}

console.log(grow([3, 3, 3, 3]))  
