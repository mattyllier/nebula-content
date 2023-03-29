// Connect your JS file to your HTML file


// Select the <h1> element using querySelector() and log it to the console
console.log(document.querySelector('h1').innerText)

// Select the <p> element using querySelector() and log it to the console
console.log(document.querySelector('p').innerText)

// Select the <ul> element using getElementById() and log it to the console
console.log(document.getElementById('container')[2]) //not working
//or
console.log(document.getElementById('list').innerText)

// Select the first <li> element using querySelector() and log it to the console
console.log(document.querySelector('li').innerText)

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
console.log(document.querySelectorAll('li')[1].innerText)

// Select all <li> elements using getElementsByClassName() and log them to the console
console.log(document.getElementsByClassName('item'))

// Select the <ul> and create a new <li> and add it to the list

//not saving in ul
// const list = document.querySelectorAll('ul')
// const newItem = list.createElement('li')  <- won't allow createElement unless behind document
// newItem.innerText = 'Item 4'
// console.log(newItem.innerText)
// console.log(document.querySelector('ul').innerText)
const newItem = document.createElement('li').innerText = 'Item 4'
console.log(newItem)
