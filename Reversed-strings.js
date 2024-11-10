// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

// My Solution starts here

function solution(str){
  let newString = str.split("").reverse().join("")
  return newString; 
}

console.log(solution("Helen"))    
