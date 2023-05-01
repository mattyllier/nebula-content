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





//Chinese encryptor (whiteboard)
const myStr = 'iamttyller'
const myStr2 = 'IAMTTYLLER'
const sBox = (str)=>{
    const arr = str.toLowerCase().split('').map(a=>a.charCodeAt(0).toString(2))
    const newArr = arr.map(a=> a[1]==='1' ? a.replace(a[1],'0') : a[1])
    return newArr.map(a=>String.fromCharCode(parseInt(a,8))).join('')
}
const output = sBox(myStr2)
console.log(output)
console.log(sBox('j'))


//Chinese decryptor
const sBoxR = (str)=>{
    const obj = {
        老 : 'a',
        耈 : 'b',
        耉 : 'c',
        聀 : 'd',
        聁 : 'e',
        聈 : 'f',
        聉 : 'g',
        舀 : 'h',
        舁 : 'i',
        興 : 'j',
        艀 : 'l',
        选 : 's',
    }
    const newArr = []
    str.split('').forEach(a=>{
        newArr.push(obj[a])
    })
    return newArr
}
console.log(sBoxR(output))

// console.log(output.charCodeAt(4)-myStr.charCodeAt(4))
// console.log(output.charCodeAt(0).toString(2))
// console.log(myStr.charCodeAt(0).toString(2))

const sBoxr = (str) => {
    const arr = str.split('').map(a=>a.charCodeAt(0).toString(2))
   // console.log(arr)
    const newArr = arr.map(a=>{
        return a[1]==='1' ? a.replace(a[1],'0') : a.replace(a[1],'1')
    })
   // console.log(newArr)
    return newArr.map(a=>String.fromCharCode(parseInt(a,2))).join('')
}
//console.log(sBoxr(output))

//'c' = 'beetle'
//'e'= 'pan'
//'i' ='lift'
//'k' = 'raise'
//'l' = 'scorpion'
//'o' = 'stern'
//'r' = 'jiong'
//'s' = 'select'
//'v' = 'shi'

//a 0001 A=>Q
//b 0010 B=>R
//c 0011 C=>S
//d 0100 D=>T
//e 0101 E=>U
//f 0110 F=>V
//g 0111 G=>W
//h 1000 H=>X
//i 1001 I=>Y
//j 1010 J=>Z
//k 1011
//l 1100
//m 1101
//n 1110
//o 1111
//p 0000
//q 0001
//r 0010
//s 0011
//t 0100
//u 0101
//v 0110
//w 0111
//x 1000
//y 1001
//z 1010
