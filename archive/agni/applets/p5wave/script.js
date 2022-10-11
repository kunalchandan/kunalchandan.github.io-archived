var len = 10;
var time = 0;
function setup() {
	createCanvas(800, 800, WEBGL);
	background(51);
	translate(0, 0);
	stroke(255);
	fill(255);
	frameRate(2);
}

function draw() {
	rect(0,0,10,10);
	background(51);
	for(var x = -len; x < len; x++){
		rect(x*20,0,(x*20)+20,100*Math.sin(time));
		time+=0.1;
	}
	//time%=(3.1415926537*2);
}
