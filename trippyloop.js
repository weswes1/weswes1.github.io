
var trippycanvas = document.getElementById("trippyCanvas");
var trippers = trippycanvas.getContext("2d");

var radiusvariable = 50;
var shifter = 0;



function makeTripper(){
	for (var i=0; i <=10; i++){
		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "red";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter*.9, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter*.9, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();


		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter*.8, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter*.8, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "red";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter*.7, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter*.7, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter*.6, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter*.6, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i,trippycanvas.height/2-shifter*.6, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i,trippycanvas.height/2+shifter*.6, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();


		////////

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "red";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter*.9,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter*.9,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();


		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter*.8,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter*.8,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "red";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter*.7,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter*.7,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter*.6,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter*.6,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "red";
		trippers.fill();
		trippers.closePath();

		trippers.beginPath();
		trippers.arc(trippycanvas.width/2-40*i-shifter*.5,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.arc(trippycanvas.width/2+40*i+shifter*.5,trippycanvas.height/2, radiusvariable-5*i, 0, Math.PI*2);
		trippers.fillStyle = "white";
		trippers.fill();
		trippers.closePath();


		}

	if (shifter == trippycanvas.height-300){
		shifter*=-1;
	}

	shifter+= 1;
}



setInterval(makeTripper,10);
