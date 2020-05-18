var myCanvasfive = document.getElementById("myCanvasfiver");
var canvasfive = myCanvasfive.getContext("2d");

var downbuttonPressed = false;
var leftbuttonPressed = false;
var rightbuttonPressed = false;
var upbuttonPressed = false;
var spacePressed = false;
var vertiPosition = myCanvasfive.height/2;
var horizPosition = myCanvasfive.width/2;

var xsPosition = 0;
var ysPosition = 0;
var circleColor;
var vertibarColor = "Red";
var horibarColor = "Red";
var voidRadius  = 0;
var voidColor = "Red";
var gameisplaying = false;



function letsPlay(){
    gameisplaying = true;
    }

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightbuttonPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftbuttonPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upbuttonPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
       downbuttonPressed = true;
    }
    else if (e.key == " " || e.key == "Spacebar") {
        spacePressed = true;}
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightbuttonPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftbuttonPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upbuttonPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downbuttonPressed = false;
    }
    else if (e.key == " " || e.key == "Spacebar") {
        spacePressed = false;
    }
}


function drawCircle(){
        if (gameisplaying == true){

        if (upbuttonPressed && vertiPosition >= 20){vertiPosition-= 2;}
        if (downbuttonPressed && vertiPosition <= myCanvasfive.height){vertiPosition+= 2;}
        if (leftbuttonPressed && horizPosition >= 20){horizPosition-= 2;}
        if (rightbuttonPressed && horizPosition <= myCanvasfive.width){horizPosition+= 2;}
        if (spacePressed){circleColor = "Red";}
        if (spacePressed == false){circleColor = "Blue";}

        canvasfive.clearRect(0, 0,myCanvasfive.width, myCanvasfive.height);

        generateVoid();

        canvasfive.beginPath();
        canvasfive.arc(horizPosition,vertiPosition, 20, 0, Math.PI*2, false);
        canvasfive.fillStyle = circleColor;
        canvasfive.fill();
        canvasfive.closePath();

        buildBoundariesgio();

            if (ysPosition == myCanvasfive.height){
                ysPosition = 0;
                if (Math.random() <= .5){
                    vertibarColor =  "Blue";
                }
                else { vertibarColor =  "Red";
            }}

            if (xsPosition == myCanvasfive.width){
                xsPosition = 0;

                if (Math.random() <= .5){
                   horibarColor =  "Blue";
                }
                else { horibarColor =  "Red";
            }}


            if (Math.abs(horizPosition-xsPosition) < 35 && horibarColor !== circleColor){
               alert("The ball color mismatched the bar color. Game over.");
               gameisplaying = false;
               downbuttonPressed = false;
               leftbuttonPressed = false;
               rightbuttonPressed = false;
               upbuttonPressed = false;
               spacePressed = false;
               vertiPosition = 300;
               horizPosition = 380;
               xsPosition = 0;
               ysPosition = 0;
               circleColor;
               vertibarColor = "Red";
               horibarColor = "Red";
               voidRadius  = 0;
               voidColor = "Red";
           }
            if (Math.abs(vertiPosition-ysPosition) < 35 && vertibarColor !== circleColor){
               alert("The ball color mismatched the bar color. Game over.");
               gameisplaying = false;
               downbuttonPressed = false;
               leftbuttonPressed = false;
               rightbuttonPressed = false;
               upbuttonPressed = false;
               spacePressed = false;
               vertiPosition = 300;
               horizPosition = 380;
               xsPosition = 0;
               ysPosition = 0;
               circleColor;
               vertibarColor = "Red";
               horibarColor = "Red";
               voidRadius  = 0;
               voidColor = "Red";}

            if (voidRadius >= myCanvasfive.width){
                if (Math.random() <= 0.5){
                    voidColor = "Red";}
                else {
                    voidColor = "Blue";}
                voidRadius = 0;}

        voidRadius += 1;}
}

function generateVoid(){
    canvasfive.beginPath();
    canvasfive.arc(myCanvasfive.width/2,myCanvasfive.height/2, voidRadius, 0, Math.PI*2, false);
    canvasfive.fillStyle = voidColor;
    canvasfive.fill();
    canvasfive.closePath();

}

function buildBoundariesgio(){
    canvasfive.beginPath();
    canvasfive.rect(xsPosition,0,20,myCanvasfive.height);
    canvasfive.fillStyle = horibarColor;
    canvasfive.fill();
    canvasfive.closePath();
    xsPosition += 3;

    canvasfive.beginPath();
    canvasfive.rect(0,ysPosition,myCanvasfive.width,20);
    canvasfive.fillStyle = vertibarColor;
    canvasfive.fill();
    canvasfive.closePath();
    ysPosition += 2;}



setInterval(drawCircle,10);
