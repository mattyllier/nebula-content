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
const myArr = [12,"Seaglass",true,null,undefined,[3,37],BigInt]
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

console.log()

// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] *= 10
console.log(numArr);

// Add an additional element to the prior array
numArr.push(41);
console.log(numArr);

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop()
console.log(removedItem);
// Check if the prior array contains the number 1
console.log(numArr.indexOf(1))
console.log(numArr.includes(1))
//   If it does, log true, if it doesnt, log false
// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift()
console.log(removedFirstItem)
// Add that item back
numArr.unshift(removedFirstItem);
console.log(numArr);
// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
console.log(sortThis.sort());
// Now reverse the prior array
console.log(sortThis.reverse());

// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const myStr = 'not,none,non'

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
const newVar = myStr.split(',');
console.log(newVar)
// Convert the output from the prior example back into a string, but with dashes between the words. 
console.log(newVar.join('-'))

//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
//join('-');

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const myArr2 = [1,2,3,4,5,7,8,9,10];
myArr2.splice(5,0,6)
console.log(myArr2)

// Create two arrays and, using JavaScript join them together
console.log(myArr2.concat(myStr))
// Create a multi-dimensional array
const myArr3 = [[7,5,9],"forty-nine",[7,7],"twenty-five",[5,5],"eighty-one",[3,3,3,3]]
console.log(myArr3);