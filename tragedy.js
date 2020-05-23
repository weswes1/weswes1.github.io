
var tragedycanvas = document.getElementById("tragedycanvas");
var trag = tragedycanvas.getContext("2d");

var radiusvariable = 0;
var shifter= 60;


function tragedize(){



	for (var i=0; i<11; i++){

		trag.beginPath();
		trag.arc(tragedycanvas.width/2,60+100*i, 60, 0, Math.PI*2);
		trag.fillStyle = "blue";
		trag.fill();
		trag.closePath();

		trag.beginPath();
		trag.arc(tragedycanvas.width/2+56,shifter+60*i, 50, 0, Math.PI*2);
		trag.fillStyle = "white";
		trag.fill();
		trag.closePath();

		trag.beginPath();
		trag.arc(tragedycanvas.width/2-56,shifter+60*i, 50, 0, Math.PI*2);
		trag.fillStyle = "white";
		trag.fill();
		trag.closePath();

		}

		for (var i=0; i<21; i++){

			trag.beginPath();
			trag.arc(tragedycanvas.width/4,50*i, 30, 0, Math.PI*2);
			trag.fillStyle = "blue";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/4+33,30-shifter+40*i, 30, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/4-33,30-shifter+40*i, 30, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4,50*i, 30, 0, Math.PI*2);
			trag.fillStyle = "blue";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4+33,30-shifter+40*i, 30, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();


			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4-33,30-shifter+40*i, 30, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();
		}



			for (var i=0; i<31; i++){

			trag.beginPath();
			trag.arc(tragedycanvas.width/8,20*i, 10, 0, Math.PI*2);
			trag.fillStyle = "black";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/8+10,200-shifter+20*i-50, 10, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();


			trag.beginPath();
			trag.arc(tragedycanvas.width/8-10,200-shifter+20*i-50, 10, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();


			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4+tragedycanvas.width/8,20*i, 10, 0, Math.PI*2);
			trag.fillStyle = "black";
			trag.fill();
			trag.closePath();

			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4+tragedycanvas.width/8+10,200-shifter+20*i-50, 10, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();


			trag.beginPath();
			trag.arc(tragedycanvas.width/2+tragedycanvas.width/4+tragedycanvas.width/8-10,200-shifter+20*i-50, 10, 0, Math.PI*2);
			trag.fillStyle = "white";
			trag.fill();
			trag.closePath();
		}

	if (shifter == 375){
		radiusvariable-=1;}
	if (shifter == 60){
		radiusvariable=1;}


	trag.beginPath();
	trag.rect(tragedycanvas.width-200,0,14,tragedycanvas.height);
	trag.fillStyle = "black";
	trag.fill();
	trag.closePath();

	trag.beginPath();
	trag.rect(200,0,14,tragedycanvas.height);
	trag.fillStyle = "black";
	trag.fill();
	trag.closePath();

	shifter+=radiusvariable;}


setInterval(tragedize,10);
