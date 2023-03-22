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

  