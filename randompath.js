var canvas = document.querySelector("canvas");
var width = window.innerWidth;
canvas.width= width;
var height= window.innerHeight;
canvas.height=height;
var lastX= 100;
var lastY=100;

function randomlinien() {
	var c = canvas.getContext("2d");
// zufälliger punkt abhängig von der breite und hoche;
var x= Math.random() * width;
var y= Math.random()* height;


c.beginPath();
c.moveTo(lastX, lastY);
c.lineTo(x, y);


lastX= x;
lastY= y;
c.lineWidth= 4;
var red= Math.random()*255;
var g=Math.random()*255;
var b= Math.random()*255;
c.strokeStyle = "rgb("+red+", "+g+" ,"+b+")";
c.stroke();
}
setInterval(randomlinien, 50);




