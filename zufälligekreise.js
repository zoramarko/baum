var canvas = document.querySelector("canvas");
var width = window.innerWidth;
canvas.width= width;
var height= window.innerHeight;
canvas.height=height;
function randomcircle() {
// zufälliger punkt abhängig von der breite und hoche;
var x= Math.random() * width;
var y= Math.random()* height;
//Breite vom Kreis zufällig im Wertebereich zw 20 - 50;
var r = 20 + Math.random()* 30
var red= Math.random()*255;
var g=Math.random()*255;
var b= Math.random()*255;
var c = canvas.getContext("2d");
c.beginPath();
c.lineWidth=4;
c.arc(x, y, r, 0, Math.PI*2);
c.fillStyle= "rgb("+red+", "+g+" ,"+b+")";
c.fill()
var red= Math.random()*255;
var g=Math.random()*255;
var b= Math.random()*255;
c.strokeStyle = "rgb("+red+", "+g+" ,"+b+")";
c.stroke();
}
setInterval(randomcircle, 100);