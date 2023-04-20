// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */
const numbers = [108,88,809,87,756,899]

console.log(numbers.map(a=>a*2))

/* Question 2
Using .map() create a new array that halves all numbers in a given array */

console.log(numbers.map(a=>a/2))

/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */

console.log(numbers.map(a=>a**2))

/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */
const lowerCase = ['hello', 'world', 'how', 'are', 'you']

const newArr = lowerCase.map(a=>a.toUpperCase())
console.log(newArr)

/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */
const people = ['Pamela', 'Michael', 'Angela']

const newArr0 = people.map(a=>`Wilkommen ${a}`)
console.log(newArr0)




// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */

numbers.forEach(a=>console.log(a))

/* Question 2
Given an array of people, log a greeting to the console for each person. */

people.forEach(a=>console.log(`Wilkommen ${a}`))

/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]

mixed.forEach(a=>console.log(a ? true:false))

/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']

arrayOfStrings.forEach(a=>{
  const vowels = 'AeEeIiOoUu'
  let count = 0
  a.split('').forEach(char=>{
    vowels.includes(char) ? count++ : count
  })
  console.log(count)
})

/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers0 = [1, 2, 3, 4, 5]

numbers0.forEach(a=>console.log(a*2))

