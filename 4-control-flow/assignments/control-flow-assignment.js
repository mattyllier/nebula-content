//1. Write a statement that checks if 2 and 'two' are equal
const myVal = 2;
const myStr = 'two';
console.log(myVal==myStr); //false
//2. Write a statement that checks if '2' and 2 are loosely equal
console.log('2' == 2); //true
//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === '14'); //false
//4. Write a statement that checks if 10 is greater than -100
console.log(10 > 100); //false
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
console.log(4 === Math.round(4.4)); //true
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
console.log(10 >= Math.ceil(9.1)); //true
//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(10 >= 2 && 3 > 4); //false
// 7.a Without changing any of the numbers, or their order. How do we make this print true?
console.log(10 >= 2 || 3 > 4); //true
//8. Pick a number between 1-20 and assign it to a variable
const myVar = Math.ceil(Math.random()*20);
console.log(myVar)
  // This is the number of watermelons you purchased.
  // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
  // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
  // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
  // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
  // If your number of watermelons is more than 15, print, 'Did you have a coupon?'
if (myVar === 1 || myVar === 2) {
  console.log('Looks like you like watermelon');
} else if (myVar > 2 && myVar < 5) {
    console.log(`That's a lot of watermelons`);
} else if (myVar > 5 && myVar < 10) {
    console.log(`That's too many watermelons!`);
} else if (myVar > 10 && myVar < 15) {
    console.log('You must be CRAZY for watermelon!');
} else {
    console.log('Did you have a coupon?');
}
//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"
const myVar0 = Math.ceil(Math.random()*10);
console.log(myVar0);
console.log(myVar0 > 6 ? `Time to eat!` : `I'm not hungry`);

// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement
const myVal0 = Math.ceil(Math.random()*8);
console.log(myVal0);
switch(myVal0) {
    case 1:
        console.log(`Makes sense`);
        break;
    case 3:
        console.log(`Perfect plan`);
        break;
    case 5:
        console.log(`Undoubtedly`);
        break;
    case 7:
        console.log(`Ask me again later`);
        break;
    default:
        console.log(`Perhaps!`);
}

  // BONUS:
    // On the prior example, try and have the answer print like someone is speaking to you.
    
    // Ex:
      //Input:  Will I win the lottery?
      //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you
  
    // Ex2:
      // Input: Will I get a new pet this year?
      // Output: Will you get a pet this year? It is certain. 
  
    // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?

let input = 'Will I...?';
input = input.replace('I', 'you');
console.log(input)
const myVal1 = Math.ceil(Math.random()*8);
// console.log(myVal1);
switch(myVal1) {
    case 1:
        console.log(`Makes sense`);
        break;
    case 3:
        console.log(`Perfect plan`);
        break;
    case 5:
        console.log(`Undoubtedly`);
        break;
    case 7:
        console.log(`Ask me again later`);
        break;
    default:
        console.log(`Perhaps!`);
}