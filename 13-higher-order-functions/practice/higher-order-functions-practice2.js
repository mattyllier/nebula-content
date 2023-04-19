/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */

const alterArr = (func,arr)=>{
    return func(arr)
}

const doubler = (arr)=>{
    return arr.map(a=>a*2)
}

const halves = (arr)=>{
    return arr.map(a=>a/2)
}

const exp = (arr)=>{
    return arr.map(a=>a**2)
}


myArr = [1,3,45,5,7,96,908,907]

console.log(alterArr(doubler,myArr))
console.log(alterArr(halves,myArr))
console.log(alterArr(exp,myArr))

/* Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

const stringInfo=(func,str)=>{
    let count = 0
    for(let char of str){
        if(func(char)){
            count++
        }
    }
    return count
}

const length =(str)=>{
    return true
}

// const vowelsFilter = (arr)=>{
//     for(let char of arr){
//         if(char!==/[AaEeIiOoUu]/g){
//             arr.splice([char],1)
//         }
//     }
//     return arr
// }

const vowels =(char)=>{
    let vowels = 'AaEeIiOoUu'
    return vowels.includes(char)
}

const nonLetters =(char)=>{
    let nonLetters = /[^a-z]/g
    return char===nonLetters
}

const myStr = 'use this in higher order functions'

console.log(stringInfo(length,myStr))
console.log(stringInfo(vowels,myStr))
console.log(stringInfo(nonLetters,myStr))



/* Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18                            */
    
const minimize = (func, arr)=>{
    return func(arr)
}

const mult = (arr)=>{
    return arr.reduce((a,b)=>a*b)
}

const add = (arr)=>{
    return arr.reduce((a,b)=>a+b)
}

console.log(minimize(add,myArr))
console.log(minimize(mult,myArr))