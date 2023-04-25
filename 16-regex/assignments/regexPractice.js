// 1.   Write a function that tests if a string contains the string of '123' within it

const myStr = 'H34mgt930g123g3vm33i4ngYOMthreadQreviserXEi'
const test123 = (str)=>{
    return /123/.test(str)
}
console.log(test123(myStr))

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false

const testCAfterA = (str)=>{
    return /YOM.*Q/i.test(str)
}
console.log(testCAfterA(myStr))


// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

const instancesOf = (str,regex)=>{
    return str.match(regex).length
}
console.log(instancesOf(myStr,/t/gi))

//or
const instancesOfChar = (str,substr)=>{
    const regex = new RegExp(substr, 'gi')
    return str.match(regex).length
}

console.log(instancesOfChar(myStr,'t'))

// 4.   Write a function that checks if all characters in a string are lowercase letters

myStr2 = 'weigfnefinqwf'

const checkLowerCase = (str)=>{
    const newArr = []
    str.split('').forEach(a=>{
        /[a-z]/g.test(a) ? newArr.push(a) : false
    })
    console.log(newArr.join(''))
    return str===newArr.join('')
}
console.log(checkLowerCase(myStr2))


//or
const lowerCaseLetters = (str)=>{
    return str.split('').every(a=>/[a-z]/g.test(a))
}
console.log(lowerCaseLetters(myStr2))

//or

const myStr5 = 'newsyntax'
const lowerCaseStr = (str)=>{
    return /^[a-z]+$/.test(str)
}
console.log(lowerCaseStr(myStr5))


// 5.   Write a function that checks if a string has an uppercase letter

const checkUpperCase =(str)=>{
    return /[A-Z]/g.test(str)
}
console.log(checkUpperCase(myStr2))

// 6.   Write a function that checks if a string contains a dash or underscore 

const myStr3 = 'https://irnbg34+_24t09n.com'

const checkDash = (str)=>{
    return /-|_/g.test(str)
}
console.log(checkDash(myStr3))

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end

const containsCom = (str)=>{
    return /\.com$/.test(str)
}
console.log(containsCom(myStr3))

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning

const containsHttp = (str)=>{
    return /^http:\/\/|https:\/\//.test(str)
}
console.log(containsHttp(myStr3))

//or
const containsHttps = (str)=>{
    return /^https?:\/\//.test(str)
}
console.log(containsHttps(myStr3))


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not

const firstUpperCase = (str)=>{
    return /^[A-Z]/g.test(str)
}
console.log(firstUpperCase(myStr))