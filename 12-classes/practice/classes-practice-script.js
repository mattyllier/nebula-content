let score = document.querySelector('h1')

class Enemy { 
    constructor(color,weapon,motive,height,width,x,y,health){ 
        this.color = color 
        this.weapon = weapon 
        this.motive = motive 
        this.height = height 
        this.width = width 
        this.x = x 
        this.y = y
    //    this.health = health 
    } 

    removeEnemy=(e)=>{
        score.innerText++
        e.target.style.backgroundImage = 'url(https://cdn.staticcrate.com/stock-hd/graphics/print-design/Explosion-RED-Graphic-style05_prev_lg.png)'
        e.target.style.backgroundSize = 'cover'
        setTimeout(()=>{
            document.body.removeChild(e.target)
        },2000)
    }

    appendEnemy(){
       const body = document.querySelector('body')
       const div = document.createElement('div')
    //    div.style.backgroundColor = `#${this.color}`
        div.style.backgroundImage = 'url(https://www.giantbomb.com/a/uploads/scale_small/8/87790/2469743-orange.png)'
        div.style.backgroundSize = 'cover'
        div.style.height = this.height
        div.style.width = this.width
        div.style.position = 'absolute'
        div.style.top = this.x
        div.style.left = this.y
        div.addEventListener('click',e=> this.removeEnemy(e))
        document.body.appendChild(div)
        
    }
}


let generateNumber = (min,max)=>{
    return Math.random() * (max-min) + min
}

const generate = () => {
        let color = (Math.floor(Math.random()*16777215).toString(16))
        let height = generateNumber(299,300)
        let width = generateNumber(299,300)
        let x = generateNumber(0,1000)
        let y = generateNumber(0,700)
        let health = generateNumber(0,100)
        let newEnemy = new Enemy(color,'sword','angry',`${height}px`,`${width}px`,`${y}px`,`${x}px`,health) 
        newEnemy.appendEnemy() 
}
generate()
setInterval(generate,3000)
