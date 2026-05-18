let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = 700; //width of cavas
canvas.height = 400;

let drawing = false;

//  start drawing
canvas.addEventListener("mousedown", function(e){
    drawing = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Drawing
canvas.addEventListener("mousemove" ,function(e){
    if(!drawing) return;
        
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
});

// stop drawing
canvas.addEventListener("mouseup", function(){
    drawing = false;
    // ctx.benginPath();
});

canvas.addEventListener("mouseleave", function(){
    drawing = false;
});

// clear canvas
let clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    canvas.width =  canvas.width;
    ctx.beginPath();
});
