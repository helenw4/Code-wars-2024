// Create a function that answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lowercase "r", you are playing banjo!

// The function takes a name as its only argument and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// MY SOLUTION STARTS HERE:::

function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r"){
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}
