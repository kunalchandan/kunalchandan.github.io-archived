var wid = window.innerWidth, hei = 5000;

var len = 50;
var counter = 0;
var row = 0;

var preslid = 0.5;

var colormode = true;
function setup() {
	createCanvas(wid,hei);
	frameRate(30);
	background(0);
	strokeWeight(5);
	colorMode(HSB,wid/len,1,1);
	slide = createSlider(0,1, 0.5,0.01);
	button = createButton('Toggle Colour');
}

function draw() {
	translate(len*counter,len*row);
	counter++;
	
	button.mousePressed(colourOff);
	if(colormode){
		stroke((counter+row)%(wid/len), 1, 1);
	}
	if(Math.random() < slide.value()){
		line(0,0,len,len);
	}
	else{
		line(len,0,0,len);
	}

	if(counter > wid/len){
		row++;
		counter = 0;
		if(row > hei){
			noLoop();
		}
	}

	if(preslid != slide.value()){
		reset();
	}
}
function reset(){
	background(0);
	row = 0;
	counter = 0;
	preslid = slide.value();
}
function colourOff(){
	reset();
	colormode = !colormode;
	stroke(255);
}