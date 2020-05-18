

var canvasfour = document.getElementById("myCanvasfour");
var ctxrr = canvasfour.getContext("2d");

var xxx = canvasfour.width/2;
var yyy = canvasfour.height/2;
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
    ctxrr.beginPath();
    ctxrr.rect(xPosition,0,20,canvasfour.height);
    ctxrr.fillStyle = barColor;
    ctxrr.fill();
    ctxrr.closePath();
    xPosition += 3;

    ctxrr.beginPath();
    ctxrr.rect(0,yPosition,canvasfour.width,20);
    ctxrr.fillStyle = barcolorVertical;
    ctxrr.fill();
    ctxrr.closePath();
    yPosition += 2;}




function drawFigure(){
    if (playingrat){
    ctxrr.clearRect(0, 0, canvasfour.width, canvasfour.height);
    ctxrr.beginPath();
    ctxrr.arc(xxx, yyy, ballRadius, 0, Math.PI*2);
    ctxrr.fillStyle = ballColor;
    ctxrr.fill();
    ctxrr.closePath();

    buildBoundaries(); 
    score += .01;


    if (xPosition == canvasfour.width){
        xPosition = 0;
        if (Math.random() <= 0.33) {barColor = "red";}
        else {barcolor = "green";} 
    }

    if (yPosition == canvasfour.height){
        yPosition = 0;
        if (Math.random() <= 0.5) {barcolorVertical = "#0095DD";}
        else {barcolorVertical = "red";} 
    }

    if ((Math.abs(xPosition-xxx) <= ballRadius+15) && barColor!==ballColor || (Math.abs(yPosition-yyy) <= ballRadius+15) && barcolorVertical!==ballColor){
        alert("The color of the ball mismatched the color of the bar. Game over. Your score: " + Math.trunc(score));
    xxx = canvasfour.width/2;
        yyy = canvasfour.height/2;
        ballRadius = 25;
        barColor = "red";
        barcolorVertical = "red";
        ballColor;
        upPressed = false;
        downPressed = false;
        leftPressed = false;
        rightPressed = false;
        spacePressed = false;
        gPressed = false;
        score = 0;
        playingrat = false;
        xPosition = 0;
        yPosition = 0;

        
    
    
    
    }

    if (spacePressed){
        ballColor = "red";}
    if (spacePressed == false){
        ballColor="#0095DD";}
    if (gPressed){
        ballColor="green";}
    if (downPressed && yyy <= canvasfour.height-ballRadius){
        yyy+=2;}
    if (upPressed && yyy >= ballRadius){
        yyy-=2;}
    if (leftPressed && xxx >= ballRadius){
        xxx-=2;}
    if (rightPressed && xxx <= canvasfour.width-ballRadius){
        xxx+=2;}}}



setInterval(drawFigure,10);








