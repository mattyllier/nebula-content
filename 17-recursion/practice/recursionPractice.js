// ## Recursion Practice 1

// Basic syntax of a recursive function
function recursiveFunction (input) {
    // Base case
    if (input === 'base case') {
      return 'base case'
    } else {
      // Recursive case
      return recursiveFunction(input)
    }
  }
  
  /* Question 1:
  Write a recursive function that takes in a number and returns the factorial of that number.
    - What is a factorial? A way to find the product of a number and all the numbers that come before it.
    - ex: 5 -> 5 * 4 * 3 * 2 * 1 = 120
  */
  
  // Solution Here
  function factorial (num) {
    if(num===1) return 1
    else return num * factorial(num-1)
  }

  // Test Case - Logs nothing if test passes
  console.assert(factorial(5) === 120, 'Question 1 - Test Failed') // 120
  
  /* Question 2:
  Write a recursive function that takes in a number and returns the sum of all the numbers from 1 to that number.
    - ex: 5 -> 1 + 2 + 3 + 4 + 5 = 15
  */
  
  // Solution Here
  function sumToN(num) {
    if(num===1) return 1
    else return num + sumToN(num-1)
  }
  
  // Test Case
  console.assert(sumToN(5) === 15, 'Question 2 - Test Failed') // 15
  
  
  /*
  Question 3:
  Write a recursive function that takes in a string and returns the number of vowels in that string.
    - ex: 'hello' -> 2
  */
  
  // Solution Here
  function countVowels (str) {
    if(str==='') return 0
    else {
return /[aeiou]/gi.test(str[0]) ? 1+countVowels(str.slice(1)) : countVowels(str.slice(1))
    }
  }
  // Test Case - Logs nothing if test passes
  console.assert(countVowels('hello') === 2,'Question 3 - Test Failed') // 2
  
  
  /*
  Question 4:
  Write a recursive function that takes in an array and returns the sum of all the elements in that array.
    - ex: [1, 2, 3] -> 1 + 2 + 3 = 6
  */
  
  // Solution Here
  function sumArray (arr) {
    if(arr.length===0) return 0
    else return arr[0] + sumArray(arr.slice(1))
  }
  
  // Test Case - Logs nothing if test passes
  console.assert(sumArray([1, 2, 3]) === 6,'Question 4 - Test Failed') // 6
  
  
  /*
  Question 5:
  Write a recursive function that takes in a string and returns the reverse of that string.
    - ex: 'hello' -> 'olleh'
  */
  
  // Solution Here
  function reverseString (str) {
    if(str==='') return ''
    else return reverseString(str.slice(1))+str[0]
  }
  
  // Test Case - Logs nothing if test passes
  console.assert(reverseString('hello') === 'olleh', 'Question 5 - Test Failed') // 'olleh'
  