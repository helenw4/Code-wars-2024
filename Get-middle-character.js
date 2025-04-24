// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"


// MY SOLUTION: 

function getMiddle(s)
{
     let middleIndex = Math.floor(s.length / 2); // create formula for finding middle char of word and store it in a variable 
    if (s.length % 2 === 0) { // if the length of characters of the word if even 
        return s[middleIndex - 1] + s[middleIndex]; // If the length is even, return the middle two characters

    } else {
        // If the length is odd, return the middle character
        return s[middleIndex];
    }
} 
