// Grab the elements and log them to the console
const allElements = document.querySelectorAll('html')
console.log(allElements)

// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
const first = document.querySelector('#first')
console.log(first)

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
const goodAfternoon = document.querySelectorAll('h1')
console.log(goodAfternoon[2].innerText)

for(let i = 0; i < goodAfternoon.length; i++){
    if(goodAfternoon[i].innerText==='Good Afternoon'){
        console.log(goodAfternoon[i].innerText)
    }
}

// Q4:  Grab the h1 with the text that says "Catch me if you can"
console.log(document.getElementsByClassName('catch-me'))

// Q5:  Grab the span element and change the text to "Got ya"
const span = document.querySelector('span')
span.innerText = 'Got ya'