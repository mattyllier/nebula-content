// Write a statement that checks if 3 is greater than 2
console.log(3 > 2);
// Reverse the prior statement and check if 3 is less than 2
console.log(3 < 2);
// Check if 4 is less than or equal to 4.4
console.log(4 <= 4.4);
// Reverse the prior statement and check if 4 is greater than or equal to 4.4
console.log(4 >= 4.4);
// Check if the string value of 19 is greater than the numeric value of 2
console.log('19'> 2);
console.log();


// Create two variables, one equal to '10' and the other equal to 10
const myStr = '10';
const myVal = 10;
// Comparing the two variables, are they strictly equal?
console.log(myStr === myVal);
//false
// Comparing the two variables, are they loosely equal?
console.log(myStr == myVal);
//true
// Comparing our two prior variables, in one statement, are they both loosely equal and strictly equal? (Using the && operator)
console.log(myStr == myVal && myStr === myVal);
//false
// Comparing our two prior variables, in one statement, are they either loosely equal or strictly equal? (Using the || operator)
console.log(myStr == myVal || myStr === myVal);
//true
// Check if the variable set to 10 is not loosely equal to 'ten' 
console.log(myStr != 'ten');
//true
// Create a variable and initilize it to true, check if it is not strictly equal to 'true'
const myVar = true
console.log(myVar !== 'true');
//true
console.log();


// If x or y is equal to 42 log 'I see you've found the ultimate answer to life, the universe and everything.'
x = 56;
y = 42;
if (x === 42 || y === 42) {
    console.log("I see you've found the ultimate answer to life, the universe and everything");
}
// Save your name to a variable called name
const miName = "Matt Reilly"
// If your name has less than 10 characters then log, 'you'll need more characters!' to the console.
// Otherwise log, 'I see you've got enough characters!' to the console. 
if (miName.length <= 10) {
  console.log(`you'll need more characters!`);
} else {
    console.log(`I see you've got some characters!`)
}

// Create the following if statement: 
// If this month (1-12) is after March and before December, log 'Winter is Coming!'
let mon = 3;
if (mon > 3 && mon < 12) {
    console.log(`Winter is coming!`);
} 

// Create two variables a & b initialized as numbers
const a = 19;
const b = 29;
// Write the following if statement
// If a is greater than b, log 'a is greater than b'
// If a is less than b, log 'a is less than b'
// otherwise log 'a is equal to b'
 if (a > b) {
     console.log(`a is greater than b`);
 } else if (a < b) {
     console.log(`a is less than b`);
 } else {
     console.log(`a is equal to b`);
}
console.log()

const position = Math.ceil(Math.random()*5);
const horseName = `Jake`;
console.log(position);
// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."
if (position === 1) {
    console.log(`${horseName} finished in first place!`);
} else if (position === 2){
    console.log(`${horseName} finished in second place!`);
} else if (position === 3){
    console.log(`${horseName} finished in third place!`);
} else {
    console.log(`${horseName} didn't finish in the top 3.`);
}
console.log();


// USE FAKE INFO FOR THE FOLLOWING EXERCISE
// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
const creditCardNum = `9045-1818-3335-7351`
// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
const last4SS = `4359`
// Initialize a variable called userId, set it equal to a fake user ID
const userId = `user-93035`
// Initialize a variable called password, set it equal to a fake password
const password = `jakewinstherace395`
// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
let inputId = `user-93035`
let inputPass = `jakewinstherace395`
// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
let input = (userId === inputId && password === inputPass) ? `cc: ${creditCardNum}\nss: ${last4SS}` : `incorrect username or id`;
console.log(input);

console.log();


// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement
// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
// The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.


// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let nameOfHorse = `Jake`;
let racePosition = (Math.ceil(Math.random()*5))
console.log(racePosition)
switch (racePosition){
    case 1:
        console.log(`${nameOfHorse} finished in first place!`);
        break;
    case 2:
        console.log(`${nameOfHorse} finished in second place!`);
        break;
    case 3:
        console.log(`${nameOfHorse} finished in third place!`);
        break;
    default:
        console.log(`${nameOfHorse} did not finish in the top 3.`);
        break;
}