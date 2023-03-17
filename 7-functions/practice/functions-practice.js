//contains function
const hasLetterZ = (name) => {
    for(let i = 0; i < name.length; i++){
        if(name[i]==='z' || name[i]==='Z'){
            return true;
        }
    }
    return false;
}
console.log(hasLetterZ('Zetra'))

//count function
const countLetterZ = (name) => {
    let count = 0
    for(let i = 0; i < name.length; i++){
        if(name[i]==='z' || name[i]==='Z'){
            count++
        }
    }
    return count;
}
console.log(countLetterZ('ZetraZZ'))

//
const multiplyByTen = (number) => {
    return (number*10)
}
console.log(multiplyByTen(15))
//

const sayGoodbye = (nammer) => {
    return `Auf wieter sehen ${nammer}!`
}
console.log(sayGoodbye('Avil'))
//

const evenNumbers = (array) => {
    const evenArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenArray.push(array[i])
        }
    }
    return evenArray
}
const numArr = [163,45,44,26,392,32,58,0]
console.log(evenNumbers(numArr))
//

const reverseWords = (word) => {
    wordArr = word.split('').reverse().join('')
    return wordArr

}
console.log(reverseWords('Matt'))
//



// 1. Write a function that takes in 1 number and returns that number + 1
const plusOne = (number) => {
    return number + 1
}
console.log(plusOne(15))

//or
const addOne = (number) => {
    return ++number
}
console.log(addOne(19))

//or
const plusAddOne = (number) => {
    number++
    return number
}
console.log(plusAddOne(24))

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
const goodNight = (name) => {
    return `Goodnight ${name}!`
}
console.log(goodNight("Azura"))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
const containsZero = (array) => {
    for(let i = 0; i < array.length; i++){
        if(array.includes(0)){
            return 'this array has number zero in it'
        }
    }
    return 'no zero'
}
console.log(containsZero(numArr))

// 4. Write a function that console logs 'hello world' 10 times to the console. 
const logTenTimes = (string) => {
    for(let i = 0; i <= 10; i++){
        console.log(string)
    }
}
logTenTimes('merkhutz')

console.log()
// 5. Write the prior function utilizing a 'fat arrow' function
//above
//other syntax:
const logTimesTen = function() {
    for(let i = 0; i <= 10; i++){
        console.log('merkhutz')
    }
}
logTimesTen()


// 1. Write a function that multiplies 3 input numbers together.
const cube = (val1 = 0, val2 = 0, val3 = 0) => {
       return val1*val2*val3
}
console.log(cube(2,5,6))

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
const oddNums = (val) => {
    let i = 1
    while(i < val){
        if(i % 2 !== 0){
        console.log(i)
        }
        i++
    }
}
oddNums(16)

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
namesArr = ['Maureen Keeley','Maureen McBreen','Kathleen Coco']
const initialsArr = []
const initials = (array) => {
    for(let i = 0; i < array.length; i++){
        let initStr = ''
        for(let j = 0; j < array[i].length; j++){
            let letter = array[i][j]
            if(letter===letter.toUpperCase() && letter !== ' '){
                initStr += letter
            }
        }
        initialsArr.push(initStr)
    }
    console.log(initialsArr)
}
initials(namesArr)

console.log()
// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
const mathsOperation = (num1,num2,operator) => {
    if(operator==='+'){
        return num1 + num2
    } else if(operator==='-'){
        return num1 - num2
    } else if(operator==='*'){
        return num1*num2
    } else if(operator==='/'){
        return num1/num2
    } else if((operator==='<' && num1<num2)||(operator==='>' && num1>num2)){
        return true
    } else if((operator==='<' && num1>num2)||(operator==='>' && num1<num2)){
        return false
    } else {
        return 'try again'
    }
}
console.log(mathsOperation(5,11,'*'))

// 5. Write a function which takes in two arrays and returns those arrays combined together. 
const array1 = [1,5,3]
const array2 = [3,5,9]
const arrFunc = (arr1,arr2) => {
    return arr1.concat(arr2)
}
console.log(arrFunc(array2,array1))

// Answer the following questions in your own words
    // 1. What is a function?
const a1 = `a function is a group of code that can be reused with a varying input within the parameters and return a specified output \nwhen invoked with a parameter`

    // 2. Why is it useful?
const a2 = `a function can be designed to be reused with any variable within the declared parameters`        

    // 3. Give a 'real world example'. Ours was woodchipper. Try and think of something yourself. 
const a3 = `an example of a function would be typing on a computer, a keystroke would be the parameter, the return or output of the function would be seeing the corresponding characters appear on the display`

    // 4. There is different syntax / ways of defining a function write out the syntax for each:
    //     1. Function declaration:
function myFun() {
}
    //     2. Function expressions:
const myFunc = function(){
}
    //     3. Arrow functions: 
const myFunction = () => {
}
    // 5. What is a parameter?
const a5 = `parameters are placeholder variables in parenthesis defined along with the function name, they are the input into the function`

    // 6. What is an argument?
const a6 = `an argument is the condition in parenthesis that is evaluated as true or false in a conditional statement, determining which code is executed`  

    // 7. What does the return statement do?
const a7 =  `a return statement stops the code similarly to a break and declares what the output of a function is, they are not necessary, such as if the function already logs to the console in a loop`

    // 8. What is scope? Do you have a real-world example of something similar to scope?
const a8 = `a scope is the reach that a declared variable applies and/or is accessible. a scope would be looking out of an airplane window, you can see the global scope of the sunshine that others can, be others cannot see you within the flying airplane`