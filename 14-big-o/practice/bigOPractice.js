  /* Either by hand, paint, or whatever you prefer draw the following complexities
    • O(1)
    • O(log n)
    • O(n)
    • O(n^2)
    • O(n^3)                                                                     */

// 1.   What is the big O of the following function? Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){  //O(n)
        console.log(arr[i]);   //O(1)
    }
}

//   O(n)  loops through array, logging index

// 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];   //O(1)

    for(let i = 1; i < arr.length; i++){  //O(n)
        if(arr[i] > max){  //O(1)
            max = arr[i]   //O(1)
        }
    }

    return max;   //O(1)
}


//   O(n) 


// 3.   What is the big O of the following function Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){   
    console.log(arr[arr.length-1]);    //O(1)
}

//   O(1)   index


// 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';      //O(1)

    for(let i = 0; i < str.length; i+=2){    //O(n)
        newStr += str[i]    //O(1)
    }

    return newStr;    //O(1)
}

//   O(n)    loops half n, but not logarithmic


// 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num    //O(1)
}

//   O(1)  operation



// 1.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num    //O(1)
    return final * 3     //O(1)
  }


  //    O(1)    operation

  
  // 2.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
  
  function backwardsArr(arr) {
    let arrReversed = []      //O(1)
    for (let i = arr.length - 1; i >= 0; i--) {   //O(n)
      arrReversed.push(arr[i])   //O(1)
    }
    return arrReversed   //O(1)
  }


  //    O(n)    loop

  
  // 3.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
  
  function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined   //O(1)
    let total = 0     //O(1)
    for (let i of arr1) {    //O(n)
      for (let j of arr2) {   //O(n^2)
        total += i * j    //O(1)
      }
    }
    return total   //O(1)
  }

  //   O(n^2)


  // 4.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
  
  let nums = [10,20,30,40];   //O(1)
  nums.push(50);    //O(1)


  //   O(1)
  
  // 5.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
  
  let nums2 = [10,20,30,40];   //O(1)
  nums.unshift(0);   //O(n)

  //   O(n)
  
  // 6.   What is the big O of the following function. Describe what the function does and use that as the reasoning for your answer.
  
  function logTime(arr) {
    let numberOfLoops = 0    //O(1)
    for (let i = 1; i < arr.length; i *= 2) {   //O(log n)
      numberOfLoops++    //O(1)
    }
    return numberOfLoops   //O(1)
  }


  //     O(log n)  loops at logarithmic indices