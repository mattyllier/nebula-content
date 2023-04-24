//intakes sorted array
//O(log n)

const myArr = [1,2,4,9,16,25,36,49,64,81,98,100,121,144,169,196,225,256]

console.time('binary search')

const binarySearch = (arr,key)=>{
    let start = 0
    let end = arr.length-1
    while(start<=end){
        let median = Math.floor((start+end)/2)
        if(arr[median]===key){
            return median
        } else if(arr[median]<key){
            start = median + 1
        } else {
            end = median -1
        }
    }
    return -1
}
console.log(binarySearch(myArr,98))

console.timeEnd('binary search')



const toBinary = (num) =>{
    console.log(num.toString(2)==(+(num.toString(2)))? true : false)
    console.log(+(num.toString(2)),typeof +(num.toString(2)))
    return `${num.toString(2)} ${typeof num.toString(2)}`
}
console.log(toBinary(576))

const myArr0 = ['234','213425','2342','23525','235253']
console.log(myArr0.filter(a=>(/\d{4}\d{6}/g).test(a)))


console.time('test')
console.log(myArr.indexOf(98))
console.timeEnd('test')

