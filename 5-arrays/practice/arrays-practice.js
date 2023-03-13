const bestFilms = ["12 Monkeys", "Dark City", "COLRPNC"]
console.log(bestFilms[bestFilms.length-1])
bestFilms.unshift("Les Revenants")
console.log(bestFilms)
const myLuckyNumbers = [5,3,2,11,29]
//let lastDigit = myLuckyNumbers[myLuckyNumbers.length-1]
//lastDigit = (lastDigit/3)
//myLuckyNumbers[myLuckyNumbers.length-1] = lastDigit
//myLuckyNumbers[1] = (myLuckyNumbers[1]/3)
//console.log(myLuckyNumbers)
//or
myLuckyNumbers[myLuckyNumbers.length-1] /= 3
myLuckyNumbers[1] *= 3
console.log(myLuckyNumbers)
console.log()
// Declare an empty array
const miArr = []
// Declare an array with all the data types you can think of within it
const myArr = [12,"Seaglass",true,]
console.log(myArr)
// Make a list of classmates names first names in an array
const miArr1 = ["Matt","Asad","Donald","Juliet","Dayana","Judah","Aulexis","Abdel","Eric","Amy"]
// Get the length of that previous array
console.log(miArr1.length);
// Check the type of the previous array
console.log(typeof(miArr1));
// Check if the previous array is an array
console.log(Array.isArray(miArr1));
// Using indexing, grab your name from that previous array
console.log(miArr1[0]);
// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(miArr1[index]);

// Update the array to have each element as a students first and last name : 'firstName lastName'
miArr1[0] = "Matt Reilly"
miArr1[1] = "Asad Rahman"
miArr1[2] = "Donald Williams"
miArr1[3] = "Juliet Vorbe"
miArr1[4] = "Dayana Senat"
miArr1[5] = "Judah Belgrave"
miArr1[6] = "Aulexis Rochell"
miArr1[7] = "Abdel Bessard"
miArr1[8] = "Eric Dirr"
miArr1[9] = "Amy Posten"
console.log(miArr1)