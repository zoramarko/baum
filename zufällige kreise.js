var canvas = document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
//c.fillRect(x, y, width, height);
c.fillStyle= "blue";
c.fillRect(100, 100, 100, 100);

c.fillRect(400, 200, 100, 100);
//set line color/width;
c.lineWidth = 3;
c.strokeStyle = "#CD853F ";

c.beginPath()
c.moveTo(100, 300);//Startpunkt
c.lineTo (400, 450);// Endpunkt
c.stroke();
//Kreis
//context.arc(x,y,radius,startAngle,endAngle);
c.beginPath();
c.arc(100, 300, 100, 0, Math.PI);
c.stroke();
console.log(canvas)