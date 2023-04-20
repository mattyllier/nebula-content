//.find() Practice

/* Question 1
Write a HOF to find the first number greater than 10 in an array */
const nums = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ]

console.log(nums.find(a => a > 10))

/* Question 2
Write a HOF to find the first string in an array */
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]

console.log(arr.find(a=>typeof a ==='string'))

/* Question 3
Write a HOF to find the first instance of null in an array */
const arr2 = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]

console.log(arr2.findIndex(a=>a===null))


// .sort() Practice

/* Question 1
Write a HOF to sort an array of numbers from largest to smallest */
const nums0 = [1,25,6,3,88,45,0]

console.log(nums0.sort((a,b)=>a-b))

/* Question 2
Write a HOF to sort peoples names by their length */
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

console.log(partyPeople.sort((a,b)=>a.name.length - b.name.length))

/* Question 3
Write an HOF to sort an array of objects of people by their age youngest to oldest */

console.log(partyPeople.sort((a,b)=>a.age - b.age))

/* Question 4
Write an HOF to sort an array of strings by the last letter of the string */
const strings = ['sam', 'john', 'daniel', 'vanessa']

// const sort = (arr)=>{
//     const revrr = []
//     for(let name of arr){
//         let newName = name.split('').reverse().join('')
//         revrr.push(newName)
//     }
//     return revrr
// }

// console.log((sort(strings)).sort())

console.log(strings.sort((a,b)=>{
    return a[a.length-1]>b[b.length-1] ? 1:-1
}))