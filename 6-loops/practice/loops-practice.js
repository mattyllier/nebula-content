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

//nested loop

// const arr = ['a','b','c','f','a','l','c']
// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         console.log(arr[i],arr[j]);
//     }
// }

