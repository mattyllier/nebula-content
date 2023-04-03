// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE
console.log('working')
// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = ['Walk the dog', 'Make Dinner', 'Do Dishes', 'Mow Lawn', 'Make Bed']
const body = document.querySelector('body')
const list = document.createElement('ul')
console.log(body)
console.log(list)
body.appendChild(list)
let i = 0
while(i < todos.length){
    let item = document.createElement('li')
    item.innerText = todos[i]
    list.appendChild(item)
    i++
}
body.style.backgroundColor = 'lightblue'
list.style.color = 'darkslategrey'
list.style.fontSize = '80px'
list.style.fontFamily = 'tahoma'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'


