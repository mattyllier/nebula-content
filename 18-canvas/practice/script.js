const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
//canvas.height = window.innerHeight
//canvas.width = window.innerWidth

// ctx.beginPath()
// ctx.fillStyle = 'lightsteelblue'
// ctx.fillRect(20,40,50,50)
// ctx.closePath()

// ctx.beginPath()
// ctx.arc(240,160,20,0, Math.PI * 2, false)
// ctx.fillStyle = 'aquamarine'
// ctx.fill()
// ctx.closePath()

let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2
const ballRadius = 10
const paddleHeight = 10
const paddleWidth = 75
let paddleX = (canvas.width-paddleWidth)/2
let leftPressed = false
let rightPressed = false
const brickRowCount = 3
const brickColumnCount = 5
const brickWidth = 75
const brickHeight = 20
const brickPadding = 10
const brickOffsetTop = 30
const brickOffsetLeft = 30
let bricks = []
let score =0
let lives = 3

for(let c = 0; c<brickColumnCount; c++){
    bricks[c] = []
    for(let r = 0; r<brickRowCount; r++){
        bricks[c][r]={x:0,y:0}
    }
}

const keyDownHandler = (e)=>{
    if(e.key==='ArrowLeft'||e.key==='Left') leftPressed = true
    if(e.key==='ArrowRight'||e.key==='Right') rightPressed = true
}

const keyUpHandler = (e)=>{
    if(e.key==='ArrowLeft'||e.key==='Left') leftPressed = false
    if(e.key==='ArrowRight'||e.key==='Right') rightPressed = false
}

const mousemoveHandler= (e)=>{
    const relativeX = e.clientX -canvas.offsetLeft
    if(relativeX>0&&relativeX>canvas.width) paddleX=relativeX-paddleWidth/2
}

document.addEventListener('keydown',keyDownHandler,false)
document.addEventListener('keyup',keyUpHandler,false)
document.addEventListener('mousemove',mousemoveHandler, false)

const drawBricks = ()=>{
    for(let c = 0; c<brickColumnCount; c++){
        for(let r = 0; r<brickRowCount; r++){
            if(bricks[c][r].status===1){
            let brickX = c*(brickWidth+brickPadding)+brickOffsetLeft
            let brickY = r*(brickHeight+brickPadding)+brickOffsetTop
            bricks[c][r].x = brickX
            bricks[c][r].y = brickY
            ctx.beginPath()
            ctx.rect(0,0,brickWidth,brickHeight)
            ctx.fillStyle = 'orange'
            ctx.fill()
            ctx.closePath()
            }
        }
    }
}

const collisionDetection = () =>{
    for(let c= 0; c < brickColumnCount; c++){
        for(let r = 0; r<brickRowCount; r++){
            const b = bricks[c][r]
            if(b.status===1){
                if (
                    x> b.x&&
                    x<b.x+brickWidth &&
                    y > b.y &&
                    y < b.y+brickHeight
                ){
                    dy=-dy
                    b.status=0
                    score++
                    if(score===brickRowCount*brickColumnCount){
                        alert('You Win')
                        document.location.reload()
                        clearInterval(interval)
                    }
                }
            }
        }
    }
}

const drawScore = ()=>{
    ctx.font = '16px Arial'
    ctx.fillStyle = 'aquamarine'
    ctx.fillText(`Score:${score}`,8,20)
}

const drawLives=()=>{
    ctx.font = '16px Arial'
    ctx.fillStyle = 'aquamarine'
    ctx.fillText(`Lives:${lives}`,canvas.width-65,20)
}

const drawBall =()=>{
    ctx.beginPath()
    ctx.arc(x,y,ballRadius,0, Math.PI * 2, false)
    ctx.fillStyle = 'aquamarine'
    ctx.fill()
    ctx.closePath()
}

const drawPaddle=()=>{
    ctx.beginPath()
    ctx.rect(paddleX,canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = 'darkblue'
    ctx.fill()
    ctx.closePath()
}

const draw = () =>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawBall()
    drawPaddle()
    drawBricks()
    drawLives()
    drawScore()
    collisionDetection()
    if(x+dx > canvas.width-ballRadius||x+dx < ballRadius) dx = -dx
    else if(y+dy < ballRadius) dy = -dy
    else if(y+dy > canvas.height-ballRadius){
        if(x> paddleX && x < paddleX +paddleWidth){
            if(y=y-paddleHeight)dy = -dy
        }
    }
    lives--
    if(!lives){
        alert('game over')
        document.location.reload()
        clearInterval(interval)
    }

    // if(leftPressed) paddleX +=7
    // else if(rightPressed) paddleX -=7

    // if(rightPressed) paddleX = Math.min(paddleX+7, canvas.width-paddleWidth)
    // else if(leftPressed) paddleX = Math.max(paddleX-7, 0)

    if(rightPressed&&paddleX < canvas.width-paddleWidth) paddleX+=7
    else if(leftPressed&&paddleX > 0) paddleX-=7
    x+=dx
    y+=dy
   // requestAnimationFrame(draw)
}
const interval = setInterval(draw,10)

// let dx = 2
// let dy = -2
// let x = 100
// let y = 100

// const handleKeyPress = (e)=>{
//     if(e.key==='ArrowUp') y-=5
//     else if(e.key==='ArrowDown') y+=5
//     else if(e.key==='ArrowLeft') x-=5
//     else if(e.key==='ArrowRight') x+=5
// }

// function draw(){
//     ctx.clearRect(0,0,canvas.height,canvas.width)
//     ctx.fillRect(x,y,500,500)
//     document.addEventListener('keydown',handleKeyPress)
//     requestAnimationFrame(draw)
// }
// requestAnimationFrame(draw)

