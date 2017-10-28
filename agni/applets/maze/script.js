var cols, rows;
var w = 40;
var grid = [];

var current;
var stack = [];
var countdown = 5000;

function setup() {
  createCanvas(801,801);
  frameRate(8);
  cols = floor(width/w);
  rows = floor(height/w);

  for(var j =0; j < rows; j++) {
  	for(var i =0; i < cols; i++) {
  		var cell = new Cell(i,j);
  		grid.push(cell);
  	}
  }

  current = grid[0];
}

function draw() {
  background(30);
  for(var j =0; j < grid.length; j++) {
  	grid[j].show();
  }

  current.visited = true;
  var next = current.checkNeighbours();
  if(next){
    next.visited = true;

    stack.push(current);

    removeWalls(current, next)

    current.highlight();
    current = next;
  }
  else if (stack.length > 0){
    current = stack.pop();
  }
  else if (stack.length == 0){
    countdown = countdown - 1000/4;
    if(countdown <=0)
    {
      location.reload();
      saveCanvas(str(width)+'x'+str(height),'png');
    }
  }
}

function removeWalls(current, next) {
  var x = current.i - next.i;
  if(x == 1){
    current.walls[3] = false;
    next.walls[1] = false;
  }
  else if(x == -1){
    current.walls[1] = false;
    next.walls[3] = false;
  }
  var y = current.j - next.j;
  if(y == 1){
    current.walls[0] = false;
    next.walls[2] = false;
  }
  else if(y == -1){
    current.walls[2] = false;
    next.walls[0] = false;
  }
}

function index(i,j) {
  if (i < 0 || j < 0 || i>cols-1 || j>rows-1) {
    return -1;
  }
  return i + (j * cols);
}

function Cell(i,j) {
	this.i = i;
	this.j = j;

	this.walls = [true, true, true, true];

  this.visited = false;

  this.checkNeighbours = function() {
    var neighbours = [];
    var top    = grid[index(i,j-1)];
    var right  = grid[index(i+1,j)];
    var bottom = grid[index(i,j+1)];
    var left   = grid[index(i-1,j)];

    if(top && !top.visited) {
      neighbours.push(top);
    }
    if(right && !right.visited) {
      neighbours.push(right);
    }
    if(bottom && !bottom.visited) {
      neighbours.push(bottom);
    }
    if(left && !left.visited) {
      neighbours.push(left);
    }

    if(neighbours.length > 0) {
      var r = floor(random(0, neighbours.length));
      return neighbours[r];
    }
    else {
      return undefined;
    }
  }  
  this.highlight = function() {
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(140  , 30, 15, 100);
    rect(x, y, w, w);
  }

	this.show = function() {
		var x = this.i*w;
		var y = this.j*w;
		
    stroke(255);

    if(this.walls[0]) {
		  line(x  ,y  ,x+w,y);//top
    }
    if(this.walls[1]) {
		  line(x+w,y,x+w,y+w);//right
    }
    if(this.walls[2]) {
		  line(x+w,y+w,x,y+w);//bottom
    }
    if(this.walls[3]) {
		  line(x,y+w,x  ,y);//left
    }

    if(this.visited) {
      noStroke();
      fill(255, 255, 150, 100);
      rect(x, y, w, w);
    }
	}
}