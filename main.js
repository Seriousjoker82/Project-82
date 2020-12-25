var mouseEvent = "empty";


canvas=document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

color="Black";
width_Of_Line = 1;
radius = 15;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
width_Of_Line = document.getElementById("width_Of_Line").value;
radius=document.getElementById("radius").value;
mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseUP"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){

    mouseEvent = "mouseleave"
}


canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    currentPositionX = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        
    console.log("Current Position of X and Y coordinates = ")
    console.log("X = " + currentPositionX + " Y = " + currentPositionY)
    ctx.lineTo(currentPositionX, currentPositionY)

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width_Of_Line;
    ctx.arc(currentPositionX, currentPositionY, radius, 0, 2*Math.PI)
ctx.stroke();

}
}
