var wid = window.innerWidth, hei = window.innerHeight;

var len = wid/3;
var preNum;
var preDen;

var multiplier = 0;
var colour = 0;
var things = [];

function setup() {
	createCanvas(wid,hei);
	frameRate(60);
	background(0);
	things.length = 2;
	preMul = createSlider(0,TWO_PI*4, TWO_PI);
	colorMode(HSB,TWO_PI, TWO_PI,TWO_PI);
	strokeWeight(2);
}

function draw() {
	translate(wid/2, hei/2);

	if(preMul.value() != multiplier) {
		for (var i = 0; i < things.length; i++) {
			things[i] = new rotator(len/(i*2), multiplier);
		}
		multiplier = preMul.value()
		background(0);
	}

	for (var i = 0; i < things.length; i++) {
		things[i].show();
	}
	stroke(things[0].angle%TWO_PI, TWO_PI, TWO_PI);
}
function rotator(armLen, multiplier){
	this.arlen = armLen;
	this.minilen = armLen*.5;
	this.mul = multiplier;
	this.angle = 0;
	this.miniAng = 0;

	this.show = function(){
		this.angle += 0.02;
		this.miniAng += 0.02*this.mul;
		push();
			translate(	this.arlen*cos(this.angle) - this.minilen*cos(this.miniAng), 
						this.arlen*sin(this.angle)) - this.minilen*sin(this.miniAng);
			point(	this.minilen*cos(this.miniAng),
					this.minilen*sin(this.miniAng));
		pop();
		point(this.arlen*cos(this.angle), this.arlen*sin(this.angle));
	};
}