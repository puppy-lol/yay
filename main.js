canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;
canvas.addEventListener("mouseDown", my_mouse_down);
function my_mouse_down(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseUp", my_mouse_up);
function my_mouse_up(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseLeave", my_mouse_leave);
function my_mouse_leave(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseMove", my_mouse_move);
function my_mouse_move(e) {
    current_position_of_mouse_x = e.clientText-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientText-canvas.offsetTop;
    if (mouseEvent = "mouseDown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.linewidth = width_of_line;
        console.log("last position of x and y coordinates =");
        console.log("x =" + last_position_of_x, "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y); 
        console.log("current position of x and y coordinates =");
        console.log("x =" + current_position_of_mouse_x, "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}