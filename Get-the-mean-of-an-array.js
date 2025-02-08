// It's the academic year's end, the fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// MY SOLUTION: 

function getAverage(marks){
let averMarks = marks.reduce((acc,curVal) => acc + curVal, 0   );
return Math.floor(averMarks / marks.length); 
}

// average needs to be rounded down and we will need Math.floor()


console.log(getAverage([90, 97, 90, 65, 75]))  

