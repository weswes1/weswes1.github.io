window.addEventListener("keydown", function(e) {   // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

var playinga;
var canvass = document.getElementById("myCanvastwo");
var ctxx = canvass.getContext("2d");
var upPressedtwo = true;
elevation = canvass.height/2-40; // Variable for the Y position of the flying plane
var score = 0; 
var scalers = [0,0,0];   // alters the position of the asteroids
var explosionRadius=0;
var exploding = false;
asteroidHeights = [Math.random()*(canvass.height-80),Math.random()*(canvass.height-80),Math.random()*(canvass.height-80)]


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
if (e.key=="Up" || e.key=="ArrowUp"){
      upPressedtwo = false;
}}

function keyUpHandler(e) {
    if (e.key=="Up" || e.key == "ArrowUp"){
      upPressedtwo = true;
}}

function drawCharacter() {        // Draws the main character of the game
	ctxx.beginPath();
	ctxx.arc(canvass.width/2-40, elevation, 20, 0,2 * Math.PI);
	ctxx.fillStyle = "red";
	ctxx.fill();
	ctxx.closePath();

	ctxx.beginPath();
	ctxx.arc(canvass.width/2-60, elevation, 10, 0,2 * Math.PI);
	ctxx.fillStyle = "yellow";
	ctxx.fill();
	ctxx.closePath();

	ctxx.beginPath();
	ctxx.arc(canvass.width/2-70, elevation, 7, 0,2 * Math.PI);
	ctxx.fillStyle = "red";
	ctxx.fill();
	ctxx.closePath();


	ctxx.beginPath();
	ctxx.arc(canvass.width/2, elevation+30, 30, 0,2 * Math.PI);
	ctxx.fillStyle = "blue";
	ctxx.fill();
	ctxx.closePath();

	ctxx.beginPath();
	ctxx.arc(canvass.width/2, elevation-30, 30, 0,2 * Math.PI);
	ctxx.fillStyle = "blue";
	ctxx.fill();
	ctxx.closePath();

	ctxx.beginPath();
	ctxx.arc(canvass.width/2, elevation, 40, 0,2 * Math.PI);
	ctxx.fillStyle = "#aaa9ad";
	ctxx.fill();
	ctxx.closePath();
}


function explosion(){

		ctxx.beginPath();
		ctxx.arc(0,0, explosionRadius, 0,2 * Math.PI);
		ctxx.fillStyle = "blue";
		ctxx.fill();
		ctxx.closePath();
		explosionRadius+=3;

		ctxx.beginPath();
		ctxx.arc(canvass.width/2, canvass.height/2, explosionRadius, 0,2 * Math.PI);
		ctxx.fillStyle = "yellow";
		ctxx.fill();
		ctxx.closePath();
		explosionRadius+=3;

		ctxx.beginPath();
		ctxx.arc(canvass.width, canvass.height, explosionRadius, 0,2 * Math.PI);
		ctxx.fillStyle = "red";
		ctxx.fill();
		ctxx.closePath();
		explosionRadius+=3;

		}

function generateAsteroid() {
		ctxx.beginPath();
		ctxx.arc(canvass.width-scalers[0], asteroidHeights[0], 40, 0,2 * Math.PI);
		ctxx.fillStyle = "yellow";
		ctxx.fill();
		ctxx.closePath();

		ctxx.beginPath();
		ctxx.arc(scalers[1], asteroidHeights[1], 40, 0,2 * Math.PI);
		ctxx.fillStyle = "green";
		ctxx.fill();
		ctxx.closePath();

		ctxx.beginPath();
		ctxx.arc(scalers[2], asteroidHeights[2], 40, 0,2 * Math.PI);
		ctxx.fillStyle = "white";
		ctxx.fill();
		ctxx.closePath();
}


function draw(){
	 if (playinga==true && exploding == false){
	 	score += .01;
		ctxx.clearRect(0, 0, canvass.width, canvass.height);
		drawCharacter();
		generateAsteroid();
		if (upPressedtwo==true && elevation < canvass.height-40) {    // if spacePressed is true, increase elevation
			elevation+=2;
		}

		else if (elevation > 40 ) {   // is spacePressed is false and elevation is position, decrease elevation
			elevation-=2;}

	if (scalers[0] == canvass.width) {
		scalers[0]=0;
		asteroidHeights[0] = Math.random()*(canvass.height-80);}

	if (canvass.width-scalers[1] == 0) {
		scalers[1]=0;
		asteroidHeights[1] = Math.random()*(canvass.height-80);}

	if (scalers[2] == canvass.width) {
		scalers[2]=0;
		asteroidHeights[2] = Math.random()*(canvass.height-80);} 


	if (elevation == canvass.height-40 || elevation == 40) {				// Hit the bottom or top of the screen, game over!

		scalers = [0,0,0];
		upPressedtwo = true;
		elevation = canvass.height/2-40;
		exploding = true;
		playinga = false;
		

		
	}

	for (i=0; i<=2; i++) {
		if (Math.abs(elevation-asteroidHeights[i]) <= 60 && Math.abs(canvass.width/2-scalers[i]) <= 78 )	{
			scalers = [0,0,0];
			upPressedtwo = true;
			playinga = false;
			exploding = true;

			}}

	scalers[0]+=2;
	scalers[1]+=3;
	scalers[2]+=4;
}


if (playinga == false && exploding==true){
	explosion();
	if (explosionRadius >= canvass.width) {
		alert("Game over. Your score: " + score.toString().substring(0,3) + " The game will start agin automatically when you press close. Press close and stop to stop playing.")
		score = 0; 
		ctxx.clearRect(0, 0, canvass.width, canvass.height);
		explosionRadius = 0;
		exploding = false;
		elevation = canvass.height/2-40; // Variable for the Y position of the flying plane
		scalers = [0,0,0];   // alters the position of the asteroids
		asteroidHeights = [Math.random()*(canvass.height-80),Math.random()*(canvass.height-80),Math.random()*(canvass.height-80)]
	}
}


}

function play_two(){
    playinga = true;
    return playinga;
}

function stop_two(){
  playinga = false;
  exploding = false;
  return playinga;
}

setInterval(draw,10);
