//change color

function draw(){
    ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    ctx.fillRect((canvas.width/2)-25, (canvas.height/2)-25, 50, 50);
    window.requestAnimationFrame(draw)
}
draw()

