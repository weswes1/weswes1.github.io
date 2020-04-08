

var canvas = document.getElementById("myCanvasfour");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;
var ballRadius = 25;
var barColor = "red";
var barcolorVertical = "red";
var ballColor;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var spacePressed = false;
var gPressed = false;
var score = 0;
var playingrat = false;


var xPosition = 0;
var yPosition = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function playratrace(){
    playingrat = true;
    return playingrat;
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
    else if (e.key == " " || e.key == "Spacebar") {
    	spacePressed =true;}

    else if (e.key == "g"){
        gPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
	else if (e.key == " " || e.key == "Spacebar") {
        spacePressed = false;
    }

    else if (e.key == "g") {
        gPressed = false;
    }

}


function buildBoundaries(){
	ctx.beginPath();
	ctx.rect(xPosition,0,20,canvas.height);
	ctx.fillStyle = barColor;
	ctx.fill();
	ctx.closePath();
	xPosition += 3;

	ctx.beginPath();
	ctx.rect(0,yPosition,canvas.width,20);
	ctx.fillStyle = barcolorVertical;
	ctx.fill();
	ctx.closePath();
	yPosition += 2;}




function drawFigure(){
    if (playingrat){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();

    buildBoundaries(); 
    score += .01;


    if (xPosition == canvas.width){
    	xPosition = 0;
        random = Math.random();
    	if (random <= 0.33) {barColor = "red";}
    	if (.33 < random <= .66){barColor = "#0095DD";}
        else {barcolor = "green";} 
    }

    if (yPosition == canvas.height){
    	yPosition = 0;
    	random = Math.random();
        if (random <= 0.33) {barcolorVertical = "red";}
        if (.33 < random <= .66){barcolorVertical = "#0095DD";}
        else {barcolorVertical = "green";} 
    }

    if ((Math.abs(xPosition-x) <= ballRadius+20) && barColor!==ballColor || (Math.abs(yPosition-y) <= ballRadius+20) && barcolorVertical!==ballColor){
    	alert("The color of the ball mismatched the color of the bar. Game over. Your score: " + Math.trunc(score));
        playingrat=false;
    	score = 0;}

    if (spacePressed){
    	ballColor = "red";}
    if (spacePressed == false){
    	ballColor="#0095DD";}
    if (gPressed){
        ballColor="green";}
    if (downPressed && y <= canvas.height-ballRadius){
    	y+=2;}
    if (upPressed && y >= ballRadius){
    	y-=2;}
    if (leftPressed && x >= ballRadius){
    	x-=2;}
    if (rightPressed && x <= canvas.width-ballRadius){
    	x+=2;}}}



setInterval(drawFigure,10);




