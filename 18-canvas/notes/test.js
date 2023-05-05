//Write a function that takes in a number and returns the 3rd digit from that number

const digit3 = (num) =>num.toString()[2]

console.log(digit3('1104'))


//Write a function that returns an array of all the numbers between 50 - 150 that are divisible by 3

const arr = []
const returnNums = ()=>{
    for(let i = 50; i <=150; i++){
        if(i % 3===0) arr.push(i)
    }
    return arr
}

console.log(returnNums())

//Write a function that takes in an array of numbers and returns the average of all the numbers

const myArr = [235,356,457,63,6,34,24,6,1,6,7,3,2346]

const returnAvg = (arr)=>arr.reduce((a,b)=>(a+b)/arr.length)

console.log(returnAvg(myArr))

//Write a function that takes in an array of elements and returns a true if every element inside is truthy

const myArr0 = [true,Infinity]

const isTrue = (arr)=>arr.every(a=>a)

console.log(isTrue(myArr0))

//Write a function that takes in a number and returns true if the number is odd and false otherwise

const isOdd = (num)=>!!(num % 2)

console.log(isOdd('4827'))

//Write a function that takes in an array of numbers and returns the sum of all positive numbers

const myArr1 = [0,3,5,2,-4]

const returnSum = (arr)=>arr.reduce((a,b)=>b>0 ? a+b : a)

console.log(returnSum(myArr1))

//Write a function that takes in a string input and returns only the letters that are capital letters

const returnCapitals = (str)=>{
    const capitals = str.split('').filter(a=>a!==a.toLowerCase())
    return capitals.join('')
}

console.log(returnCapitals('FrFgEfdzv'))

//Write a function that takes in a string and returns a count of all the non - letter characters

const nonCharacters = (str)=>{
    let count = 0
    str.split('').forEach(a=>{
        if(/[^a-z]/gi.test(a)) count++
    })
    return count
}

console.log(nonCharacters('fgm349t3-=2wq./-3'))


//Write a function that sorts an array of strings by the last letter in each string

const sortByLast = (arr)=>{
    const newArr = arr.map(a=>a.split('').reverse().join(''))
    newArr.sort((a,b)=>a[0]-b[0])
    console.log(newArr)
    return newArr.map(a=>a.split('').reverse().join(''))
}

console.log(sortByLast(['ergZ','wrt3q4Y','4twrgX']))