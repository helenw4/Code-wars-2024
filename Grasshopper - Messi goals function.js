// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// SOLUTION STARTS HERE 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let messiGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals; 
  return messiGoals; 
}

console.log(goals(5,5,5))


