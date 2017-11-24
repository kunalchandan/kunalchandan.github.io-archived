var PI = 3.14159265358979323846;

var TRUE_GOLD = 1.61803398875;
var GOLD = 1/TRUE_GOLD;
var angle = 0;
function setup() {
	createCanvas(window.innerHeight, window.innerWidth);
	noFill();
}

function draw() {
	translate(width/5, height/5);
	angle = angle + .01;
	background(51);
	stroke(212,175,55);
	square(Math.min(width, height)/5);
}

function square(len) {
	rect(0, 0, len, len);
	if (len > 20){
		push();
		translate(len, len);
		rotate(angle);
		square(len * GOLD);
		pop();

		push();
		translate(0, len);
		rotate(angle);
		square(len * GOLD);
		pop();

		push();
		translate(len, 0);
		rotate(angle);
		square(len * GOLD);
		pop();
	}
}