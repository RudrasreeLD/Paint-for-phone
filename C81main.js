var last_position_of_X, last_position_of_Y;
var color = "crimson";
var width = 5;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = screen.width;
var height = screen.height;

var new_width = screen.width - 70;
var new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchsat);
function my_touchsat(m) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    var current_position_of_X = m.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_Y = m.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmon);
function my_touchmon(m) {
    var current_position_of_X = m.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_Y = m.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();

    last_position_of_X = current_position_of_X;
    last_position_of_Y = current_position_of_Y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}