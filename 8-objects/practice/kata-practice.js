//repeat string number of times
function repeatStr (n, s) {
    let str = ''
    let i = 0
    while(i < n){
      str += s
      i++
    }
    return str;
  }

  //better
  function repeatStr (n, s) {
    return s.repeat(n);
  }



//find least in array
function findSmallestInt(arr) {
      return Math.min(...arr)
}
  
//or compare loop
function findSmallestInteger(arr) {
      let least = Infinity
      for(let i = 0; i < arr.length; i++){
        if(arr[i]<least){
          least = arr[i]
        }
      }
      return least
}

//or compare sort
function smallestIntegerFinder(arr) {
      return arr.sort((a,b) => a-b)[0]
}


//add arrays
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => (acc + cur));
  }

//or loop
function arrayPlusArray(arr1, arr2) {
    arr3 = arr1.concat(arr2)
    let sum = 0
    for(let i = 0; i < arr3.length; i++){
      sum += arr3[i]
    }
    return sum
  }


  //count vowels in string
  function getCount(str) {
    //variable counter
    let count = 0
    //array of vowels to see if they match string
    const vowels = ['a','e','i','o','u']
    //loop through string
    for(let i = 0; i < str.length; i++){
      vowels.includes(str[i]) ? count++ : count
    }
    //each iteration check if current letter is in vowel list
    return count;
    //returns number as count of vowels
  }

  //as object
  function getCount1(str) {
    const vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true 
    }
    let count = 0
    for(let i = 0; i < str.length; i++){
      vowels[str[i]] ? count++ : count
    }
    return count;
  }


  //monkey count
  function monkeyCount(n) {
    const arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }
  console.log(monkeyCount(8))

  //Sorts an array alphabetically by first letter in the sequence 
  function sortArr(arr) {
    return arr.sort()
  }
  const myArr = ['5JL-598', 'BFW-752', 'HX1-309', 'QZN-146', 'UMB-249']
  console.log(sortArr(myArr))
  //Input: array of strings 
  //Output: sorted array of strings i.e. ‘5JL-598’ ‘BFW-752’ ‘HX1-309’ ‘QZN-146’ ‘UMB-249’ Count the number of ‘J’s in a string Input str Output count of letter ‘J’ i.e ’Jacob Jinglehiemersmithj’ = 2 Summing up the value of an array (just numbers) Input array Output number all elements summed together Ie [4,2,4,0] = 10 Given an array of grades of students find the number of passing students (65%) Input array student grades Output count of students who are above the passing gradepoint Ie [70, 55, 2, 100, 95, 85] = 4 Is an element in a string or array (remake the includes function) Input haystack (array | string), needle (any) Output boolean is the needle inside the haystack Ie [‘1’,’2’,3,’4’], 4 = false [‘1’,’2’,3,’4’], 3 = true

function removeChar(str){
  const arr = str.split('')
  arr.shift()
  arr.pop()
  return arr.join('')
  };
  console.log(removeChar('simni hazarah'))

  const s = 'ambigram aik la`alef at hamoach'
  const findShortest = (s) => {
    return s.split(' ').reduce((shortest, word)=> Math.min(shortest,word.length), Infinity)
    }
  console.log(findShortest(s))


  //sort by first letter in sequence instead of numbers
  //all letters are capital
  const testone = ['5JL-598', 'BFW-752'] //BFW-752, 5JL-598
  const testtwo = ['HX1-309', 'QZN-146'] //HX1-309, QZN-146
  const testthree = ['VTP-415', '99O-827'] //99O-827, VTP-415
  const testfour = ['RGA-932', '643-H81'] //643-H81, RGA-932
  const testfive = ['NYX-675', 'UMB-249'] //NYX-675, UMB-249

  // const sortByLetters = (arr) => {
  //   const number = (/[0-9]/)
  //   const letter = (/[A-Z]/)
  //   for(let i = 0; i < arr.length; i++){
  //     arr[i].split('')
  //   }
  //   arr.sort((/\d/,/\D/)=>/\D/ > /\d/)
  // }
  
// console.log(sortByLetters(testone))

  //Dayana problem
  // Summing up the value of an array (just numbers) Input array Output number all elements summed together

//reduce method compares a,b parameters, converting to added sum each iteration
const sumArray = (arr) => {
  return arr.reduce((a,b)=>a+b)
}

//set counter variable, use for loop to iterate through array, add to sum each iteration
const sumArray1 = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}

const test1 = [10,77] //= 87
const test2 = [28,52] //= 80
const test3 = [20,20,60] //= 100
const test4 = [7,11,3] //= 21
const test5 =  [4,2,4,0] //= 10

console.log(sumArray(test1))
console.log(sumArray1(test1))
console.log(sumArray(test2))
console.log(sumArray1(test2))
console.log(sumArray(test3))
console.log(sumArray1(test3))
console.log(sumArray(test4))
console.log(sumArray1(test4))
console.log(sumArray(test5))
console.log(sumArray1(test5))

function getIssuer(number) {
  let str = number.toString()
  switch(true) {
      case (str.slice(0,2)==='34'||str.slice(0,2)==='37')&& str.length===15:
        return 'AMEX';
      case str.slice(0,4)==='6011' && str.length===16:
        return 'Discover';
      case str[0]==='5'&& (str[1]>='1'&& str[1]<='5') && str.length===16:
        return 'Mastercard';
      case str[0]==='4'&& (str.length===13 || str.length===16):
        return 'VISA';
      default:
        return 'Unknown'
  }
}

function getIssuer(number) {
  let str = number.toString()
  switch(true){
    case str.match(/34\d{13}/)||str.match(/37\d{13}/):
      return 'AMEX'
    case str.match(/6011\d{12}/):
      return 'Discover'
    case str.match(/[51-55]\d{14}/):
      return 'Mastercard'
    case str.match(/4\d{12}/)||str.match(/4\d{15}/):
      return 'VISA'
      default:
      return 'Unknown'
  }
}