// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(nums.reduce((a,b)=>a+b))

/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */

console.log(nums.reduce((a,b)=>a*b))

/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */

console.log(nums.reduce((a,b)=>Math.min(a,b)))

/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

const ageArr = []
for(let obj of partyPeople){
    ageArr.push(obj.age)
}
console.log(ageArr.reduce((a,b)=>Math.max(a,b)))
//console.log(partyPeople.reduce((a,b)=>a.age+b.age))