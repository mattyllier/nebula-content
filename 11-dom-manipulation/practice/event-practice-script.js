console.log('working')

// const container = document.querySelector('.container')
// const changeColor = (event) => {
//     square = event.target
//     const classes = [...square.classList]
//     classes.classList.add('colorChange')
// }
// container.addEventListener('click',changeColor)

const container = document.querySelector('.container')
const background = document.querySelector('body')
let clicked = true
document.addEventListener('click',(e)=>{
    console.log('clicked')
    if(e.target===container && clicked){
        background.style.backgroundColor = 'mediumslateblue'
        clicked = false
    } else {
        background.style.backgroundColor = 'white'
        clicked = true
    }
    console.log(e.target)
})

container.addEventListener('click',(e)=>{
    container.style.backgroundColor = 'lemonchiffon'
    
})