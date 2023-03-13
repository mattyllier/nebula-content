// 1.   Create an array that contains two of your favorite things to do
const myArray = ['type','travel']
// 2.   Using an array method, add another thing you like to do to that list
myArray.push('categorise')
console.log(myArray)
// 3.   Reverse the order of the array (remember, if needed use MDN)
console.log(myArray.reverse());
//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(dayArray.length);
// 5.   log the 4th element in the array
console.log(dayArray[3]);
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const removedDay = dayArray.shift()
console.log(dayArray,removedDay)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
dayArray.unshift(removedDay)
console.log(dayArray);
// 8.   Remove the last element in the array. Log the new array and log the element removed
const removedElement = dayArray.pop()
console.log(dayArray, removedElement)
// 9.   Add 'Saturday' back to the end of the array and log the new array
dayArray.push(removedElement)
console.log(dayArray);
//10.   Replace 'Thursday' with 'Friday Junior'
dayArray.splice(4,1,'Friday Junior');
console.log(dayArray)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const day = dayArray[4];
console.log(`My favourite day is ${day}`);
//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const phoneLaptop = phone.concat(laptop);
console.log(phoneLaptop);
//13.   Write a line of code to test if something is an array or not
console.log(Array.isArray(dayArray));