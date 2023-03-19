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
