var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var x = canvas.width/2;     // X Position of the Main Character 
var y = canvas.height/2;    // Y Position of the Main Character 
size=20                     // Size of the Main Character
var playing;


// X,Y coordinates of the falling Balls, X coordinate of the falling Blue Ball
bluey=0;
redx=Math.random()*canvas.width;
bluex = Math.random()*canvas.width;
redy=0;
score=0;
yellowx=Math.random()*canvas.width;
yellowy=0;
// 


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key=="Up" || e.key=="ArrowUp"){
      upPressed = true
    }
    else if (e.key=="Down" || e.key== "ArrowDown") {
      downPressed =true
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }

     else if (e.key=="Up" || e.key == "ArrowUp"){
      upPressed = false
    }
    else if (e.key=="Down" || e.key== "ArrowDown") {
      downPressed =false
    }
}

function drawCharacter() {        // Draws the main character of the game
  ctx.beginPath();
  ctx.arc(x,y, size, 0, Math.PI*2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

// draw a falling brick

function generateBrick(){
  ctx.beginPath();
  ctx.arc(bluex,bluey, 20, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}


function generateRedBrick(){
  ctx.beginPath();
  ctx.arc(redx,redy, 60, 0, Math.PI*2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function generateYellowBrick(){
  ctx.beginPath();
  ctx.arc(yellowx,yellowy, 40, 0, Math.PI*2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}



function draw() {
  if (playing==true){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter();
  generateBrick();
  generateRedBrick();
  generateYellowBrick();

  if (rightPressed == true & x <= canvas.width-20){
    x+=2;
  }
    if (leftPressed == true & x >= 20) {
    x-=2;
  }
  if (upPressed == true & y >= 20){
    y-=2;
  }
  if (downPressed == true & y <= canvas.height-20) {
    y+=2;
  }

  if (Math.sqrt((redy-y)*(redy-y)+(redx-x)*(redx-x)) < size+60 ) {    // Red Ball Collision, update variables
    redy=0;
    redx = Math.random()*canvas.width;
    size+=20;
    }

  if (Math.sqrt((bluey-y)*(bluey-y)+(bluex-x)*(bluex-x)) < size+20 ) {    // Blue Ball Collision, update variables
    if (size>=20){                                                       // If size is greater than 20, reduce size
      size-=10;
    }
    bluey=0;
    bluex = Math.random()*canvas.width;
  }

  if (Math.sqrt((yellowy-y)*(yellowy-y)+(yellowx-x)*(yellowx-x)) < size+40 ) {    // Yellow Ball Collision, update variables
    size+=30;
    yellowy=0;
    yellowx = Math.random()*canvas.width;
  }


  if (bluey==canvas.height){        // The  Ball reached the bottom of the canvas, update variables
    bluex = Math.random()*canvas.width;
    bluey=0;
  }

  if (redy==canvas.height){       // The  Ball reached the bottom of the canvas, update variables
    redy=0;
    redx = Math.random()*canvas.width;
  }

  if (yellowy==canvas.height){    // The  Ball reached the bottom of the canvas, update variables
    yellowy=0;
    yellowx = Math.random()*canvas.width;
  }

  if (size >= canvas.width/2 ){     // The player got to Big, game over, update variables.
    alert("Too big. Game over. your score: " + score)
    redy=0;
    redx = Math.random()*canvas.width;
    bluey=0;
    bluex = Math.random()*canvas.width;
    yellowy=0;
    yellowx = Math.random()*canvas.width;
    score=0;
    size=20;
  }

  bluey+=2;   // These variables update no matter what
  yellowy+=2.5;
  redy+=1;
  score+=.01;
}
}

function play(){
  playing = true;
  return playing;
}

function stop(){
  playing = false;
  redy=0;
  redx = Math.random()*canvas.width;
  bluey=0;
  bluex = Math.random()*canvas.width;
  yellowy=0;
  yellowx = Math.random()*canvas.width;
  score=0;
  size=20;
  return playing;
}

setInterval(draw,10);