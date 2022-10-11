var PI = 3.14159265358979323846;

var TRUE_GOLD = 1.61803398875;
var GOLD = 1/TRUE_GOLD;
var angle = 0;
function setup() {
	createCanvas(800, 800);
	noFill();
}

function draw() {
	translate(50, 50);
	angle = angle + .01;
	background(51);
	stroke(255);
	square(200);
}

function square(len) {
	rect(0, 0, len, len);
	translate(len, len);
	if (len > 2) {
		push();
		rotate(angle);
		square(len * GOLD);
		pop();
	}
}