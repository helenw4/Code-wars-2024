// ----- Practice JS methods - filter -----
// ---------- QUESTION 11 ----------
// Write a function called 'evenNumbers' that takes an array as an argument and uses the filter method.  Return only the even numbers from the array of numbers.  Remember - you can find out if a number is even by using the % operator (modulus operator) like this:
//  number % 2 === 0   (gives a true boolean result for even numbers)

// EXAMPLE CALL:
//   let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
//   console.log (`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray));

// EXAMPLE OUTPUT:
//   Q11 evenNumbers [4,41,832,72,89,120,431,505,70]: [ 4, 832, 72, 120, 70 ]
//
// If there are no even numbers in the array you make and use, return an empty array.

// PUT YOUR CODE HERE

let onlyEvens = [5, 8, 15, 16, 32, 64];

function evenNumbers(arr) {
  let newEvens = arr.filter((num) => num % 2 === 0);
  return newEvens;
}

console.log(evenNumbers(onlyEvens));

// ---------- QUESTION 12 ----------
// Write a function called 'greaterThan100' that takes in an array of numbers and uses the filter method.  Return any items in the array that are greater than 100.

// EXAMPLE CALL:
//   let numArray = [4,41,832,72,89,120,431,505,70];
//   console.log (`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray));

// EXAMPLE OUTPUT:
//   Q12 greaterThan100 [4,41,832,72,89,120,431,505,70]: [ 832, 120, 431, 505 ]
//
// If there are no numbers greater than 100, return an empty array.

// PUT YOUR CODE HERE

let greaterThan = [50, 75, 100, 125, 150];

function greaterThan100(arr) {
  let isGreater = arr.filter((num) => num > 100);
  return isGreater;
}

console.log(greaterThan100(greaterThan));

// ---------- QUESTION 13 ----------
// Write a function called 'nonAdminUsers' that takes in an array of user objects.  The objects should have a username and isAdmin property each like they do in Question 9.  The function should use the filter method to return the users who are not admins.

// EXAMPLE CALL: (using users array from Q9)
//   console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));

// EXAMPLE OUTPUT:
//   Q13 nonAdminUsers: [
//     { username: 'juan.marcos', isAdmin: false },
//     { username: 'aleksandra.ivanov', isAdmin: false },
//     { username: 'zhang.wei', isAdmin: false }
//   ]

// PUT YOUR CODE HERE

let usersProfiles = [
  {
    username: "helen.abera",
    isAdmin: false,
  },
  {
    username: "may.juner",
    isAdmin: false,
  },
  {
    username: "june.juler",
    isAdmin: false,
  },
  {
    username: "july.auguster",
    isAdmin: true,
  },
];

function nonAdminUsers(arr) {
  let notAdmin = arr.filter((user) => user.isAdmin === false);
  return notAdmin;
}

console.log(nonAdminUsers(usersProfiles));
