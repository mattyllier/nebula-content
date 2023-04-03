console.log('working')

// const body = document.querySelector('body')
// const form = document.createElement('form')
// body.appendChild(form)
// document.createElement('label')
// label.

const yourName = document.getElementById('name')
const form = document.querySelector('form')
const birthdate = document.getElementById('birthdate')
const address = document.getElementById('address')
const fact = document.getElementById('fact')
const textArea = document.getElementById('textArea');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    textArea.innerText = `${e.target.yourName.value} \n${e.target.birthdate.value} \n${e.target.address.value} \n${e.target.fact.value}`;
    console.log(e.target.birthdate.value);
    console.log(e.target.address.value);
    console.log(e.target.fact.value);
    console.log(textArea)
})