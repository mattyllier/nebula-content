/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */
const multiply =(operand1,operand2)=> {
    return +operand1 * +operand2
}
const exponent =(operand1,operand2)=> {
    return operand1 ** operand2
}
const subtract =(operand1,operand2)=> {
    return +operand1 - +operand2
}

const calculate=(func,operand1,operand2)=>{
     return func(operand1,operand2)
 }

console.log(calculate(exponent,5,8))

/* Question 2
Write a function that takes in any number of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
  Example:
    calculateAll(multiply, 1,4,1,231,5) => 4620
    calculateAll(subtract, 2,4,5,7) => -14
*/

const calculateAll = (func,arr)=>{
    const newArr = arr.reduce(func)
    return newArr
}

const myArr = [56,556,67,89,809]
console.log(calculateAll(multiply,myArr))
console.log(calculateAll(subtract,myArr))


/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
  Example:
    modify(yeller, 'I need a nap') => I NEED A NAP!!!
    modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
    modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/

const myStr = 'modifyThisString'

const modifyStr=(func,str)=>{
    return func(str)
}

const yeller = (str)=>{
    return str.toUpperCase()
}

const sarcastic=(str)=>{
    let newArr = []
    for(let i = 0; i < str.length; i++){
        if(i%2===0){
            newArr.push(str[i].toUpperCase())
        } else if (i%2===1){
            newArr.push(str[i].toLowerCase())
        }
    }
    return newArr.join('')
}

const code =(str)=>{
    return str.replace(/[AaEeIiOoUu]/g,'-')
}

console.log(modifyStr(code,myStr))
console.log(modifyStr(yeller,myStr))
console.log(modifyStr(sarcastic,myStr))
/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
  Examples:
    oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['I love coding, 'goosfraba']

    oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    ['Nested Array!']

    oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
    =>
    [10, Infinity]
*/
const typeOfArr = (dataType,arr)=>{
    return dataType(arr)
}
const myArr0 = [undefined,10,null,Infinity,'findingout']

const strings = (arr)=>{
    let newArr= []
    for(let char of arr){
    if(typeof(char)==='string'){
        newArr.push(char)
    }
}
return newArr
}
console.log(typeOfArr(strings,myArr0))