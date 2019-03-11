function setup() {
		createCanvas(window.innerWidth, window.innerHeight);
	fill(0);
	textSize(35);


}

var width = window.innerWidth;
var height = window.innerHeight;

var x = 100;
var y = 100;

var vx = 5;
var vy = 5;

var y2 = 250;
var y1 = 250;

var radius = 20;

var l = 0;
var r = 0;
function draw() {
		background("white");
		ballMove();
		ellipse(x,y,radius*2,radius*2);
		rect(100,y1,30,300);
		rect(1100,y2,30,300);	
		
		if (x<=150) {
			if(y>=y1 && y<=y1+300) {
			vx = -vx;
		}}
		if (x >= 1080) {
		if (y>=y2 && y<=y2+300) {
			vx = -vx;
		
		}}
		if(x< 110) {
			l=l+1;
			x= 600;
			y=400;
			vx= -vx;
		}
		if(x>1110) {
			r=r+1
			x= 600;
			y=400;
			vx= -vx;
		}
		text(l,500,100);
		text(":",600,100);
		text(r,700,100);
}

function ballMove(){	
	x = x + vx;
	y = y + vy;
	
	if(x >= width-radius){
		vx = -vx;
	}
	
	if(x <= radius){
		vx = -vx;
	}
	
	if(y >= height-radius){
		vy=-vy;
	}
	
	if(y <= radius){
		vy = -vy;
	}
}

function keyPressed(){
	console.log(keyCode);
	
	if(keyCode == 40){
		y2 = y2 + 30;
	}
	if(keyCode == 38){
		y2=y2-30;
	}
	if(keyCode == 83){
		y1=y1+30;
	}
	if(keyCode == 87){
		y1=y1 - 30;
	}
}