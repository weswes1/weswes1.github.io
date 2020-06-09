
var naturecanvas = document.getElementById("naturecanvas");
var nat = naturecanvas.getContext("2d");

var radiusvariable = 0;
var shifter= 0;
var tracks = 0;
var aapl=1;

function flowingtree(){

	nat.clearRect(0,0,naturecanvas.width,naturecanvas.height);


	for (var j=0; j<11; j++){
		nat.beginPath();
		nat.arc(naturecanvas.width/2+30*j,tracks, 300-30*j, 0, Math.PI*2);
		nat.fillStyle = "black";
		nat.fill();
		nat.closePath();

		nat.beginPath();
		nat.arc(naturecanvas.width/2-30*j,tracks, 300-30*j, 0, Math.PI*2);
		nat.fillStyle = "black";
		nat.fill();
		nat.closePath();



		nat.beginPath();
		nat.arc(naturecanvas.width/2+30*j,naturecanvas.height-tracks, 300-30*j, 0, Math.PI*2);
		nat.fillStyle = "white";
		nat.fill();
		nat.closePath();

		nat.beginPath();
		nat.arc(naturecanvas.width/2-30*j,naturecanvas.height-tracks, 300-30*j, 0, Math.PI*2);
		nat.fillStyle = "white";
		nat.fill();
		nat.closePath();

	}





	for (var j=0; j<11; j++){

	nat.beginPath();
	nat.arc(naturecanvas.height/2+shifter*.7,naturecanvas.width/4-10*j, 100-10*j, 0, Math.PI*2);
	nat.fillStyle = "black";
	nat.fill();
	nat.closePath();

	nat.beginPath();
	nat.arc(naturecanvas.height/2+5,naturecanvas.width/4-10*j, 100-10*j, 0, Math.PI*2);
	nat.fillStyle = "white";
	nat.fill();
	nat.closePath();

	nat.beginPath();
	nat.arc(naturecanvas.height/2+shifter*.7,naturecanvas.width-10*j, 100, 0, Math.PI*2);
	nat.fillStyle = "black";
	nat.fill();
	nat.closePath();

	nat.beginPath();
	nat.arc(naturecanvas.height/2+5,naturecanvas.width-10*j, 100, 0, Math.PI*2);
	nat.fillStyle = "white";
	nat.fill();
	nat.closePath();

	}


	for (var j=0; j<11; j++){
		for (var i=0; i<11-j; i++){
			nat.beginPath();
			nat.arc(50+shifter*.2+25*i+25*j,naturecanvas.height/2+25*j, 10, 0, Math.PI*2);
			nat.fillStyle = "black";
			nat.fill();
			nat.closePath();

			nat.beginPath();
			nat.arc(550+shifter*.2-25*i-25*j,naturecanvas.height/2+25*j, 10, 0, Math.PI*2);
			nat.fillStyle = "black";
			nat.fill();
			nat.closePath();

			nat.beginPath();
			nat.arc(560-shifter*.2-25*i-25*j,naturecanvas.height/2+25*j, 10, 0, Math.PI*2);
			nat.fillStyle = "white";
			nat.fill();
			nat.closePath();}}

	for (var j=0; j<11; j++){
		for (var i=0; i<11-j; i++){
			nat.beginPath();
			nat.arc(60-shifter*.3+25*i+25*j,naturecanvas.height/2+25*j, 10, 0, Math.PI*2);
			nat.fillStyle = "white";
			nat.fill();
			nat.closePath();
			}
		}

	if (shifter == 10){
		radiusvariable = -1;}
	if (shifter == 0){
		radiusvariable = 1;}



	shifter+=radiusvariable;

	if (tracks == naturecanvas.height){
		aapl= -1;
	}
	if (tracks == 0){
		aapl= 1;
	}



	tracks+=aapl;




	}





setInterval(flowingtree,10);
