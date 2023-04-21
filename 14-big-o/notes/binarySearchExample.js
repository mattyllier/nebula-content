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