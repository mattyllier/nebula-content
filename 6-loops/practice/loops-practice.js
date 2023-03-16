const customers = [1,2,3,4,5,6,7,8,9]
for(let i = 0; i < customers.length; i++){
    console.log(`Greetings ${customers[i]}`)
}
console.log()
for(let i = customers.length-1; i >= 0; i--){
    console.log(`Greetings ${customers[i]}`)
}
console.log()
const arrayOfNums = [5,3,2,1,0,9,10,30,55]
for(let i = 0; i < arrayOfNums.length; i+=2){
    console.log(i)
}
console.log()

// 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
for(let i = 0; i <= 20; i++){
    console.log(i);
}
console.log()
//      Each loop it should log to the console the current index

// 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
//      Each loop it should log to the console the current index
for(let i = 1; i <= 40; i+=2){
    console.log(i);
}
console.log()
// 3.   Create an array with all student names in it. 
//      Loop over the array and log each student's name to the console.
//      Inside the array declare an unrequired, but useful variable for 'currentStudent'
const namesArr = ['Matt','Judah','Donald','Abdel','Juliet','Dayana','Aulexis','Asad']
for(let i = 0; i < namesArr.length; i++){
    const currentStudent = namesArr[i]
    console.log(namesArr[i])
}
//or
const currentStudent = `current students: ${namesArr}`
namesArr.unshift(currentStudent)
console.log(namesArr)

// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 === 0){
        console.log(numArray[i]);
    }
}
console.log()
// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers
const newArr = []
for(let i = 0; i < numArray.length; i++){
  if (numArray[i] % 2 === 1){
    newArr.push(numArray[i])
  }
}
console.log(newArr);
console.log()
// 6.   Using the nums and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

        const nums = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
        const positiveArr = [];
        const negativeArr = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i]>0){
                positiveArr.push(nums[i])
            } else{
                negativeArr.push(nums[i]);
            }
        }
        console.log(negativeArr)
        console.log(positiveArr)

console.log()




//while loop
let i = 0
while(i < 10){
console.log(i)
i++
}

console.log()
//do-while loop
i = 0
do {
  console.log(i);
i++
} while(i < 10)

console.log()

// Reminder: control-c will kill an infinitely running node-process
// 1.   Write a while loop that loops over a string until it finds the letter "a"
i = 0
myStr = "which letters does this string contain"
 while(myStr[i] !=='a'){
     console.log(myStr[i])
     i++
}
//or
console.log()
i = 0
while(i < myStr.length){
    if(myStr[i] === 'a'){
        console.log(myStr[i])
        break;
    }
    i++
}

// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number
console.log()
let count = 0
while(count < 100 ){
    count++
}
console.log(count)

console.log()




//continue
let numeri = ''
for(let i = 0; i < 12; i++){
    if(i===3 || i===5 || i===9){
        continue;
    }
    numeri += i
}
console.log(numeri);
console.log();

// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
const str = 'this string contains a hidden value';
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
        console.log('a',[i])
        break;
    }
}

// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'
const numArr = [-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,86,722,815,1223]
for(let i = 0; i < numArr.length; i++){
    if(numArr[i] === 13){
        console.log(`at index ${i} there is the number ${numArr[i]}`)
    }
}

// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console
const numStrArray = ['a','e',1,'b','v',2,'g',3,'d',4,'h',5,'u','v','w',6,'z',7,'c','h',8,'t',9,'i','j','y',10,'k',20,'l',30,'m',40,'n',50,'s',60,'a','e',70,'p','f',80,'t','z',90,'q',100,'r',200,'s','h',300,'t',400]
const lettersArray = []
for(let i = 0; i < numStrArray.length; i++){
    if(typeof(numStrArray[i])=== 'number'){
        continue;
    }
    lettersArray.push(numStrArray[i])
}
console.log(lettersArray);

console.log()



//nested loop

const quote = "use quotes containing vowels"
const vowels = ['a','e','i','o','u','A','E','I','O','U']
const quoteVowels = []
for(let i = 0; i < quote.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(quote[i]===vowels[j]){
            quoteVowels.push(quote[i])
        }
    }
}
console.log(quoteVowels)

// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']
for(let i = 0; i < names.length; i++){
    for(let j = 0; j < names[i].length; j++){
        if (names[i][j]==='a' || names[i][j] ==='A'){
            console.log(`'a' in ${names[i]}`)
        }
    }
}

// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This','is','an','array','of','strings']
const capitalArr = []
for(let i = 0; i < stringArray.length; i++){
    let newStr = ''   //assigned within i so it reassigns at each str
    for(let j = 0; j < stringArray[i].length; j++){
        if(j%2===0){
        newStr += stringArray[i][j].toUpperCase()
        } else {
            newStr += stringArray[i][j]
        }
    }
    capitalArr.push(newStr)
}
console.log(capitalArr)


// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
const singleArray = []
let addedValue = null
for(let i = 0; i < arrayOfArrays.length; i++){
    for(let j = 0; j < arrayOfArrays[i].length; j++){
      addedValue = arrayOfArrays[i][0]+arrayOfArrays[i][j]+ arrayOfArrays[i][j-1]   // += operates same way
    }
    singleArray.push(addedValue)
}
console.log(singleArray)

//or (better way)

const singleArr = []
for(let i = 0; i < arrayOfArrays.length; i++){
    let addedVal = null  // assigned within i so it repeats at each
    for(let j = 0; j < arrayOfArrays[1].length; j++){
        addedVal += arrayOfArrays[i][j]
    }
    singleArr.push(addedVal)
}
console.log(singleArr)
