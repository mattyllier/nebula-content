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
  
//compare loop
function findSmallestInteger(arr) {
      let least = Infinity
      for(let i = 0; i < arr.length; i++){
        if(arr[i]<least){
          least = arr[i]
        }
      }
      return least
}

//compare sort
function smallestIntegerFinder(arr) {
      return arr.sort((a,b) => a-b)[0]
}