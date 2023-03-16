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
const logTenTimes = () => {
    for(let i = 0; i <= 10; i++){
        console.log('merkhutz')
    }
    return 'merkhutz'
}
console.log(logTenTimes())

console.log()
// 5. Write the prior function utilizing a 'fat arrow' function
//above
//other syntax:
const logTimesTen = function() {
    for(let i = 0; i <= 10; i++){
        console.log('merkhutz')
    }
    return 'merkhutz'
}
console.log(logTimesTen())


// 1. Write a function that multiplies 3 input numbers together.
// const cube = (array) => {
//     for(let i = 0; i <= 3; i++){
//         array[i] *= product
//     }
//     return product
// }
// const threeNumArray = [5,12,28]
// console.log(cube(threeNumArray))

// 2. Write a function that takes in a number and logs all odd numbers leading up to that number


// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 


// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator


// 5. Write a function which takes in two arrays and returns those arrays combined together. 