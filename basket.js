
var misses = 0;		// Number of misses 
var playing;
var upkeyPressed = false;
var power = 0;
var powercopy = 0;
var control=0;
var canvasthree = document.getElementById("canvasThree");
var cttxx = canvasthree.getContext("2d");

var baalx=30;
var baaly=650;

var shipx=730;
var shipy=600;
var released = false;
var scorecount = 0;
var hitcount = 0;

window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        upkeyPressed = true;
    }}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        upkeyPressed = false;
    }}

function stop_basket() {
  playing = false;
}

function play_basket() {
  playing = true;
  misses = 0;  
  upkeyPressed = false;
  power = 0;
  control =0;
  powercopy = 0;
  baalx=10;
  baaly=640;
}


function launchBall(){
  baaly-=control*power/350;                     // The amount of change of baaly and baalx is dependent on power.
  baalx+=control;
}

function generateShip() {

  cttxx.beginPath();
  cttxx.arc(shipx,shipy, 50,40, 50);
  cttxx.fillStyle = "#654321";
  cttxx.fill();
  cttxx.closePath();

}

function animate(){
  if (playing == true){
    if (upkeyPressed == true && power <= 300 && baalx==10 && released == false){
    	power += 1;
      powercopy += 1;
      control+=.1;

    }
    else if (powercopy > 0 ) {
      powercopy-=2;
      released = true;
      }

    else if (baalx >= 740) {      // Reset the ball variables
       scorecount+=1;
       power = 0;
       control =0;
       powercopy = 0;
       baalx=10;
       baaly=640;
       released = false;
    }

    else {
    launchBall();}
    
  if (Math.pow((baalx-shipx)**2+(baaly-shipy)**2,.5) < 75 )  { // If distance between baalx,baaly is less than 
    {
      shipy = Math.random()*600
      hitcount+=1;
    }
  }


  if ( scorecount%5==0 && scorecount > 0){
    alert("Game over. You hit the invading ship " + hitcount.toString() + " out of 5 times");
    scorecount = 0 ;
    hitcount = 0;
    upkeyPressed == false
    playing =false;
    released == false
  }



    cttxx.clearRect(0, 0, canvasthree.width, canvasthree.height);
    generateShip();

    cttxx.beginPath();
    cttxx.rect(230,500, 300,40, 50);
    cttxx.fillStyle = "blue";
    cttxx.fill();
    cttxx.closePath();

    cttxx.beginPath();
    cttxx.rect(230,500, powercopy,40, 50);
    cttxx.fillStyle = "yellow";
    cttxx.fill();
    cttxx.closePath();

    cttxx.beginPath();
    cttxx.arc(baalx,baaly, 30, 0, 2 * Math.PI);
    cttxx.fillStyle = "black";
    cttxx.fill();
    cttxx.closePath();
  }
}

setInterval(animate,10);
