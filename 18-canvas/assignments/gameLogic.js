//converter +(35*length)

const converter = (arr)=>{
    return arr.reduce((a,b)=>a+b)+(35*arr.length)
}
myArr = [80,96,0,0,0,0,0,0,0,0,0,0,0,0]
console.log(converter(myArr))