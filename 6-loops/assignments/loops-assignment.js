// 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
//      Each loop it should log to the console 'the current index is _'
for(let i = 0; i <= 30; i++){
    console.log(`the current index is ${i}`)
}

// 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
//      Each loop it should log to the console the current index
for(let i = 1; i <= 10; i+=2){
    let index = i-1
    console.log(index)
}

// 3.   Create an array with your top 5 celebrity names in it. 
//      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
//      Loop over the array and log each celebrity's full name to the console.
namesArr = ['Maureen Keeley','Phil Coco','Bob Muollo','John Lord','Red Reilly']
for(let i = 0; i < namesArr.length; i++){
    console.log(namesArr[i]);
}
console.log()
// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < namesArr.length; i++){
    if(namesArr[i].length % 2 === 0){
        console.log(namesArr[i])
    }
}
console.log()
// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
const firstNamesArr = []
for(let i = 0; i < namesArr.length; i++){
    for(let j = 0; j < namesArr[i].length; j++){
        if(namesArr[i][j]===' '){
            break;
        } else {
            firstNamesArr.push(namesArr[i][j])
        }
    }
}
console.log(firstNamesArr.join(''))

// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
const lastNamesArr = []
for(let i = 0; i < namesArr.length; i++){
    for(let j = namesArr[i].length; j > 0; j--){
        let character = namesArr[i][j]
        if(character===' '){
            break;
        } else {
            lastNamesArr.unshift(character)  
    }
}
}
console.log(lastNamesArr.join(''))

console.log()
// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
const vowelsArr = ['a','A','e','E','i','I','o','O','u','U']
for(let i = 0; i < namesArr.length; i++){
    for(let j = 0; j < namesArr[i].length; j++){
        let letter = namesArr[i][j]
        for(let k = 0; k < vowelsArr.length; k++){
            let vowel = vowelsArr[k]
            if(letter===vowel){
            console.log(letter)
        }
    }
}
console.log()
}


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for(let i = 0; i < namesArr.length; i++){
    for(let j = 0; j < namesArr[i].length; j++){
        let letter = namesArr[i][j]
        if(letter===letter.toUpperCase() && letter !== ' '){
            console.log(namesArr[i][j])
        }
    }
}

// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
for(let i = 0; i < namesArr.length; i++){
    console.log(namesArr[i].toUpperCase().replace(' ','-'))
}
console.log()
// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop
const selected = 'Red Reilly'
for(let i = 0; i < namesArr.length; i++){
    if(namesArr[i]===selected){
        console.log(namesArr[i])
        break;
    }
}

//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
for(let i = 0; i <= 30; i++){   
    if(i % 2 === 0 && i % 3 === 0){
        console.log('fizz-buzz');
    } else if (i % 2 === 0){
        console.log('fizz')
    } else if (i % 3 === 0){
        console.log('buzz')
    } else {
        console.log(i)
    }
}
const a = 'A'
console.log(a === a.toUpperCase())