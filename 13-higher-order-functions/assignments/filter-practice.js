// .filter() Practice

/* Question 1
Write a function to filter an array for all the numbers greater than 5 */
const q1Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
console.log(q1Arr.filter(a=>a>5))

/* Question 2
Write a function to filter an array for all the even numbers */
const q2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(q1Arr.filter(a=>a%2===0))

/* Question 3
Write a function to filter an array for all the non number item */
const q3Arr = [1, 'a', 'b', 2, {}, []]

console.log(q3Arr.filter(a=>typeof(a)!=='number'))

/* Question 4
Write a function to filter an array of objects for people over the age of 21 */
const partyPeople = [
  { name: 'John', age: 25 },
  { name: 'Jordan', age: 18 },
  { name: 'Frank', age: 50 },
  { name: 'Anna', age: 12 }
]
console.log(partyPeople.filter(a=>{
  return a.age > 21
}))

/* Question 5
Write a function to filter out all letters from a string
  Hint: filter doesn't work on strings.. */

const myStr = '345y5om323W09j3'
console.log(myStr.replace(/[a-zA-Z]/g,''))

const myArr = myStr.split('')
console.log(myArr.filter(a=>/[^a-zA-Z]/g.test(a)).join(''))

const myArr1 = myStr.split('')
console.log(myArr.filter(a=>/[^a-z]/gi.test(a)).join(''))

