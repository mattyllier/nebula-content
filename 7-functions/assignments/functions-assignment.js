// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
numerArr = [57,63,87,91,46,65,36,54,19,92,101,317]
const addOne = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i]++
    }
    return arr
}
console.log(addOne(numerArr))
  
// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// Example string = "happy birthday", letter = "a", should return true
// Example string = "happy birthday", letter = "q" should return false
const containsLetter = (str,letter) => {
    for(let i = 0; i < str.length; i++){
        if(str[i]===letter){
            return true
        }
    }
    return false
}
console.log(containsLetter('Paddy','y'))

//or
const containsALetter = (str,letter) => {
    return str.includes(letter)
}
console.log(containsALetter('Paddy','y'))
  
// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
let newArr = []
const firstNamesArr = (arr) => {
    for(let i = 0; i < arr.length; i++){
    let oneNameArr = arr[i].split(' ')
    newArr.push(oneNameArr[0])
    }
    return newArr
}
namesArr = ['Maryanne Callelomanorte','August Cabernet','Yadi Merkhutz']
console.log(firstNamesArr(namesArr))
  
// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
const greeting = (name) => {
    return `auf wieder sehen ${name}!`
}
console.log(greeting(`Hattie`))
  
// 5. Write a function that takes in the year someone was born and returns their age.
// Example: birth year: 2000 returns 23
const ageCalc = (year) => {
    let age = 2023 - year
    return `you turn ${age} this year`
}
console.log(ageCalc(2000))

//or
const ageCalculator = (yearBorn) => {
    const date = new Date()
    let year = date.getFullYear()
    let age = year - yearBorn
    return `you turn ${age} this year`
}
console.log(ageCalculator(2000))

//kata links (original assignment before pull)

//complete the solution so that it reverses the string passed into it.
const reverseWords = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverseWords('world'))

//write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
const returnStr = (n,s) => {
    for(let i = 0; i < n; i++){
        console.log(s)
    }
}
returnStr(7,`tsitsikamma`)

//find the smallest integer in the array
const numArr = [36,58,7,46,49,53,178,5,43,578,805]
const findInt = (arr) => {
    return Math.min(...arr)
}
console.log(findInt(numArr))

//combine two arrays and add contents
//not accumulating
const myArr = [35,58,57,61,305,49,81,65,52,26,83,59,54,7,33,8,9,0,704]
const addArrays = (arr1,arr2) => {
    const newArr = []
    newArr.concat(arr1,arr2)
    let val = null
    for(let i = 0; i < newArr.length; i++){
        val += newArr[i]
    }
    return val
}
console.log(addArrays(numArr,myArr))

//convert string to number
const strToNum = (str) => {
    return parseInt(str)
}
console.log(strToNum('317'))