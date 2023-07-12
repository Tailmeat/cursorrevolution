var body = document.body;
var where = document.getElementById("where");
var cutie = document.getElementById("cutie");
var offset = {
    x: 0,
    y: 0
}

body.addEventListener("mousemove", detectmousemove);

function detectmousemove(event) {
    offset.x = event.clientX;
    offset.y = event.clientY;
    console.log(offset.x, offset.y);
    cutie.style.left = offset.x + 1 + "px";
    cutie.style.top = offset.y + 1 + "px";
}