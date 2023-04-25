const myStr = 'ant'

const reverseWords = (str)=>{
    if(str==='') return ''
    return reverseWords(str.slice(1))+str[0]
}
console.log(reverseWords(myStr))



const isPalindrome = (str)=>{
    if(str.length <=1) return true
    if(str[0]!==str[-1]) return false
    return isPalindrome(str.slice(1,str[-1]))
}
console.log(isPalindrome(myStr))