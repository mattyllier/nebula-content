const reverseString = (s)=> s.reverse()

//reverse array without built-in function at 0(1) memory
const reverseString0 = (s) =>{
    let left = 0, right = s.length-1
    while(left<right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
    return s
}
let myStr = 'test'.split('')
//console.log(reverseString0(myStr))



//remove node from linkedlist without access to head
const deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

/*const deleteNode = function(5) {
    node.5 = node.1
    node 1,9 = node 9
}
[4,5,1,9]
*/



// function ListNode(val) {
//     this.val = val;
//     this.next = null;
//     }

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

//const linkedList = new LinkedList
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

function listNodeToString(node){
    let arr = []
    while(node != null){
        arr.push(node.val.toString())
        node = node.next
    }
    return arr
}

console.log(listNodeToString(head))
    

function listNodeToString1(node){
    let arr = []
    for(let current = node; current; current = current.next){
        arr.push(node.val.toString())
    }
    return arr
}

console.log(listNodeToString1(head))


//Sort Massachusetts license plate combinations
const sortMassCombinations=(str)=>{
    const arr = str.split('').filter(x=>x.match(/\d/g))
    const month = arr[arr.length-1]
    const obj = {
        1 : 'January',
        2 : 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        0: 'October'
    }
    return obj[month]
}
console.log(sortMassCombinations('41EP00'))


const findKth = (nums,k)=>{
    let heap = []
    for(let i = 0; i < nums.length; i++){
        if(heap.length<k){
            heap.push(nums[i])
        }
        if(heap[heap.length-1] < nums[i]){
            for(let j = 0; j < heap.length; j++){
                if(heap[j] > nums[i]){
                    heap.splice(j,0,nums[i])
                    break;
                }
            }
            heap.length=heap.length-1
        }
    }
}