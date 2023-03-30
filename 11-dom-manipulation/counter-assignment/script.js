// COUNTER EXERCISE
console.log('working')
// Select the body element from index.html
const body = document.querySelector('body')
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = 'mediumslateblue'
/* -------------------------------------------------------------------------- */

// Create an h1 element
const h1 = document.createElement('h1')
// Append a new h1 element to the body element as a child
body.appendChild(h1)
// Add text to the h1 element 
h1.innerText = 'Iqs Igul'
// Assign the background color of this element to something unique
h1.style.backgroundColor = 'lavender'
// Set a new style attribute to the h1 element
h1.style.width = '40%'
h1.style.display = 'flex'
h1.style.justifyContent = 'center'
h1.style.borderRadius = '10px'
// Add font size to the h1Element
h1.style.fontSize = '100px'
// Set the default text to the number zero
h1.innerText = 0
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const button = document.createElement('button')
// Append the button element to the body element
body.appendChild(button)
// Add text to the boxButton
button.innerText = '+'
// Add a class attribute to boxButton
button.className = 'button'
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const secButton = document.createElement('button')
// Add the button element to the body element
body.appendChild(secButton)
// Add text to the button element
secButton.innerText = '-'
// Add a class attribute of style to the button element
secButton.className = 'button'
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
button.addEventListener('click',(e)=>{
    h1.innerText++
})
// Create functionality that, when you click this button it decreases the h1 value
secButton.addEventListener('click',(e)=>{
    h1.innerText--
})

/* -------------------------------------------------------------------------- */
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

button.style.height = '70px'
button.style.width = '40%'
button.style.backgroundColor = 'lemonchiffon'
button.style.border = 'none'
button.style.borderRadius = '30px'
button.style.fontSize = '40px'
button.style.margin = '10px'

secButton.style.height = '70px'
secButton.style.width = '40%'
secButton.style.backgroundColor = 'lightgrey'
secButton.style.border = 'none'
secButton.style.borderRadius = '30px'
secButton.style.fontSize = '40px'

// DELETE BUTTON FUNCTION 
