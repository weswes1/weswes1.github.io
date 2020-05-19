
var picassocanvas = document.getElementById("picassoCanvas");
var picass = picassocanvas.getContext("2d");

var growthRad = 0;


var asing= 1;
var skank= 0;




function makeArt(){


	picass.clearRect(0, 0, picassocanvas.width, picassocanvas.height);
	picass.beginPath();
	picass.arc(picassocanvas.width/2,picassocanvas.height/2, growthRad, 0, Math.PI*2);
	picass.fillStyle = "black";
	picass.fill();
	picass.closePath();

	picass.beginPath();
	picass.arc(picassocanvas.width/2+105,picassocanvas.height/2, growthRad, 0, Math.PI*2);
	picass.fillStyle = "black";
	picass.fill();
	picass.closePath();

	picass.beginPath();
	picass.arc(picassocanvas.width/2+100,picassocanvas.height/2, growthRad, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();

	picass.beginPath();
	picass.arc(picassocanvas.width/2-105,picassocanvas.height/2, growthRad, 0, Math.PI*2);
	picass.fillStyle = "black";
	picass.fill();
	picass.closePath();

	picass.beginPath();
	picass.arc(picassocanvas.width/2-100,picassocanvas.height/2, growthRad, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();


	picass.arc(picassocanvas.width/2-growthRad,picassocanvas.height/2, growthRad*.5, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();

	picass.arc(picassocanvas.width/2+growthRad,picassocanvas.height/2, growthRad*.75, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();


	picass.beginPath();
	picass.arc(picassocanvas.width/2-growthRad,picassocanvas.height/2, growthRad*.75, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();
	picass.beginPath();




	picass.beginPath();
	picass.arc(picassocanvas.width/2,picassocanvas.height-skank, 100, 0, Math.PI*2);
	picass.fillStyle = "black";
	picass.fill();
	picass.closePath();


	picass.beginPath();
	picass.arc(picassocanvas.width/2,skank, 100, 0, Math.PI*2);
	picass.fillStyle = "white";
	picass.fill();
	picass.closePath();






	if (growthRad > picassocanvas.height/2){
	 	asing=-1;}
	if (growthRad==0){
	 	asing=1;}
	growthRad += asing;


	skank+=1;

	if (skank==picassocanvas.height+100){
	 	skank= -100;}


}



setInterval(makeArt,10);
