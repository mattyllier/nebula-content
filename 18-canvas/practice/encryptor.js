//Chinese encryptor

const myStr = 'SLICKERVICOR'

const sBox = (str)=>{
    const arr = str.toLowerCase().split('').map(a=>a.charCodeAt(0).toString(2))
    const newArr = arr.map(a=>arr[a]=`100000000${a}`)
    return newArr.map(a=>String.fromCharCode(parseInt(a,2))).join('')
}
const output = sBox(myStr)
console.log(output)

const sBoxr = (str) =>{
    const arr = str.split('').map(a=>a.charCodeAt(0).toString(2))
    const newArr = arr.map(a=>a.replace(/100000000/,''))
    return newArr.map(a=>String.fromCharCode(parseInt(a,2))).join('')
}
const messageKey = sBoxr(output)
console.log(messageKey)