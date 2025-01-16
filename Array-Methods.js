/ ---------- QUESTION 20 ----------
// Write a function called 'divisibleByX' that takes two arguments: an array and an integer.  The function should use the find method to return the first number in the array that's divisible by the integer that was passed as an argument.  If there are no values that are divisible by the second argument, return undefined.

// EXAMPLE ARRAY:
//    let numbers = [4,41,832,72,89,120,431,70];

// EXAMPLE CALL 1:
//    Qconsole.log (`Q20 divisibleByX ([${divArray}], 10):`, divisibleByX(numbers, 10));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 10): 120

// EXAMPLE CALL 2:
//    console.log (`Q20 divisibleByX ([${divArray}]. 3):`, divisibleByX(numbers, 3));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70]. 3): 72

// EXAMPLE CALL 3:
//    console.log (`Q20 divisibleByX ([${divArray}], 2):`, divisibleByX(numbers, 2));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q20 divisibleByX ([4,41,832,72,89,120,431,505,70], 2): 4

// PUT YOUR CODE HERE FOR QUESTIONS

let arrayCols = [20, 25, 30, 35, 40];
let intCols = 5;

function divisibleByX(arCols, inCols) {
  return arCols.find((arColNum) => arColNum % inCols === 0);
}

console.log(divisibleByX(arrayCols, intCols));

// ---------- QUESTION 21 ----------
// Write a function called 'startsWithLetter' that takes two arguments: an array of strings and a letter.  The function should use the find method to return the first string in the array that starts with the letter provided as the argument.  If there's no string in the array that starts with that letter, return undefined. The function should leave lowercase and uppercase letters alone.
// STRETCH GOAL: Throw an error "Letter must be a string of length 1" if the second argument is not a string, or if its length is more than 1.

// EXAMPLE ARRAY:
// let jokeStrings =
//   ["Do you want to hear a joke?",
//    "It's about a three-legged dog",
//    "The dog walks into a bar",
//    "The dog says, ",
//    "\"I'm looking for the man who shot my paw\"",
//    "Get it?"]

// EXAMPLE CALL 1:
//    console.log (`Q21 startsWithLetter T:`, startsWithLetter(jokeStrings, "T"));
// EXAMPLE OUTPUT 1: (if using the example array above)
//    Q21 startsWithLetter T: The dog walks into a bar

// EXAMPLE CALL 2:
//    console.log (`Q21 startsWithLetter I:`, startsWithLetter(jokeStrings, "I"));
// EXAMPLE OUTPUT 2: (if using the example array above)
//    Q21 startsWithLetter I: It's about a three-legged dog

// EXAMPLE CALL 3:
//    console.log (`Q21 startsWithLetter i:`, startsWithLetter(jokeStrings, "i"));
// EXAMPLE OUTPUT 3: (if using the example array above)
//    Q21 startsWithLetter i: undefined

// STRETCH GOAL EXAMPLE CALL:
//    console.log (`Q21 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog"));
// STRETCH GOAL EXAMPLE OUTPUT:
//    Q21 startsWithLetter dog: Error: Letter must be a string of length 1

// PUT YOUR CODE HERE

let lastString = ["What", "Is", "Up"];
let lastArray = "I";

function startsWithLetter(lastS, lastA) {
  return lastS.find((lastOne) => lastOne.startsWith(lastA));
}

console.log(startsWithLetter(lastString, lastArray));
