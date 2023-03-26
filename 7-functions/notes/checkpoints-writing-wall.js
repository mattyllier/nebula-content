myArr = [5,11,16,25,27,59]
let sum = 0
for(let i = 0; i < myArr.length; i++){
    sum += myArr[i]
}
console.log(sum/myArr.length)

const orderedArr = []
for(let i = 1; i < myArr.length; i++){
    if(myArr[i]<myArr[i-1]){
        orderedArr.push(myArr[i])
    } else if(myArr[i]>myArr[i-1]){
        orderedArr.push(myArr[i-1])
    }
}
orderedArr.push(myArr[myArr.length-1])
console.log(orderedArr)
console.log(orderedArr[orderedArr.length/2])          // median


const myFunc = (array) => {
    let count = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2===0){
        count++
      }
    }
    return count
}
console.log(myFunc(myArr))

let i = 0
while(i < myArr.length){
    console.log(myArr[i])
    i++
}

i = 0
do{
    console.log(i)
    if(i === 10){
        break;
    }
    i++
} while(i < 100)

const cubedNumbers = {
    cube3: 27,
    cube4: 64,
    cube5: 125,
    cube6: 216,
    cube7: 343
}
console.log(cubedNumbers.cube3, cubedNumbers.cube5, cubedNumbers.cube7)

const addProp = (func, keyStr, value) => {
    func[keyStr] = value
    return func
  }
console.log(addProp(cubedNumbers,'cube8',512))

cubedNumbers.avgVal = (cubedNumbers) => {
    let count = 0
    for(let i = 0; i < cubedNumbers.length; i++){
      count += cubedNumbers[i]
    }
    return (count/cubedNumbers.length)
}
  console.log(cubedNumbers)
