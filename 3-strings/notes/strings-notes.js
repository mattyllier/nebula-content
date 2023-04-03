
const miVal = 54
console.log(miVal.toString())
const miNum = '54'
console.log(parseInt(miNum))
console.log(+miNum)
console.log(typeof(miVal))

// const language = "javascript"
// const adjective1 = "love"
// const keyword1 = "var"
// const year = 2015
// const instructor = "Eric"
// console.log(`I am currently learning the programming language called ${language}. I ${adjective1} this program already. I read recently that declaring variables with the ${keyword1} keyword has gone out of style ever since ECMAScript ${year}. Oh, also, my instructor ${instructor} is awesome!`);
const myName = "Matti";
console.log(myName.length)
console.log(myName.length-1)
// console.log(myName[-1]) doesn't work
console.log(myName[1])

const alph = "abcdefghijklmnopqrstuvwxyz"
console.log(alph[12]+alph[0]+alph[19]+alph[19])

const m = alph[12];
const a = alph[0];
const t = alph[19];
console.log(`${m}${a}${t}${t}`)

let miName = "Telo";
miName = "AviTElo";
console.log(miName.indexOf("v"))
console.log(miName.slice(0,1))
console.log(miName.toUpperCase())
console.log(miName.toLowerCase())

console.log()
let myVar = 5;
myVar = ++myVar;
console.log(myVar);

let child = 'has done chores';
const chores = 'has done chores';
const cond = child === chores ? "yes" : "no";
console.log(cond);

const js = 'Javascript'
const myName1 = 'Matt'
let length = (js.length > 11 || myName[1]===js[1]) ? "that is true" : "that's not true"
console.log(length)

const myChar = 't'
const myStr = 'Matt'
switch (myChar == myStr[null]) {
  case myStr[0]:
  case myStr[1]:
  case myStr[2]:
  case myStr[3]:
    console.log('yes, there is a `t`')
    break;
  default:
    console.log('there is no `t`')
}
let myT = 't'
const myName2 = 'Matt'
if (myName2.indexOf('t')){
    console.log('true')
} else {
    console.log('there isn`t a `t`')
}