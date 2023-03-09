// Turn the following string into all lowercase letters
let noCaps = 'This Should Not Have Capital Letters!'
noCaps = noCaps.toLowerCase();
console.log(noCaps);

// Turn the following string into all uppercase letters
let loud = "i'm very loud!";
loud = loud.toUpperCase();
console.log(loud);

// Join the prior two variables together.
const miVar = `${loud} ${noCaps}`
console.log(miVar);

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
console.log(stringOfNames.split(' '));

// Make your own mad-libs using a template literal
let user = "Joe"
let blnc = "7559"
console.log(`Welcome ${user}, your balance is $${blnc}`);


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
console.log(ironMan[0]+ironMan[5]);


// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
const allStar = string.slice(19,27);
console.log(allStar);

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
const qMark = (string1[11]);
console.log(qMark);


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
console.log(ten+five);

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
console.log(sentence.split(' '));

let miVar1 = "Jake";
miVar1 = miVar1.toUpperCase();
console.log(miVar1);