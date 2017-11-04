var wid = window.innerWidth, hei = window.innerHeight;

var len = wid/2;
var preNum;
var preDen;

var colour = 0;
var things = [];

function setup() {
	createCanvas(wid,hei);
	frameRate(30);
	background(0);
	num = createSlider(0,10, 1.5);
	den = createSlider(0,10, 10);
	things.length = 12;
	colorMode(HSB,TWO_PI, TWO_PI,TWO_PI);
}

function draw() {
	translate(wid/2, hei/2);

	if(!((preDen == den.value())&&(preNum == num.value()))) {
		for (var i = 0; i < things.length; i++) {
			things[i] = new rotator(len/(i*2), num.value(), den.value());
		}
		preNum = num.value();
		preDen = den.value();
		background(0);
	}

	for (var i = 0; i < things.length; i++) {
		things[i].show();
	}
	stroke(things[0].angle%TWO_PI, TWO_PI, TWO_PI);
}
function rotator(armLen, numer, deno){
	this.arlen = armLen;
	this.minilen = armLen*.5;
	this.num = numer;
	this.den = deno;
	this.angle = 0;
	this.miniAng = 0;

	this.show = function(){
		this.angle += 0.01;
		this.miniAng += 0.01*this.num/this.den;
		push();
			translate(this.arlen*cos(this.angle), this.arlen*sin(this.angle));

			point(	this.minilen*cos(this.miniAng),
					this.minilen*sin(this.miniAng));
		pop();
		//point(this.arlen*cos(this.angle), this.arlen*sin(this.angle));
	};
}