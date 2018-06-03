
function setup() {
  createCanvas(innerWidth, innerHeight);
	noStroke();
	frameRate(60);
	pixelDensity(1);

	game = new Game();

}

function draw() {
	background(0,0,0);

	game.update();
	game.render();


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
