var christinacanvas = document.getElementById("christinaCanvas");
var catstoner = christinacanvas.getContext("2d");

var dx = 2;
var dy = -2;

var dxx = 1;
var dyy = -1;

var x = christinacanvas.width/2;
var y = christinacanvas.height/2;

var xx = christinacanvas.width/2;
var yy = christinacanvas.height/2;


function girlfriend(){
	catstoner.clearRect(0,0,christinacanvas.width,christinacanvas.height);
	catstoner.beginPath();
	catstoner.arc(x, y, 100, 0, Math.PI*2);
	catstoner.fillStyle = "black";
	catstoner.fill();
	catstoner.closePath();

	catstoner.beginPath();
	catstoner.arc(x, christinacanvas.width-y, 100, 0, Math.PI*2);
	catstoner.fillStyle = "black";
	catstoner.fill();
	catstoner.closePath();


	catstoner.beginPath();
	catstoner.arc(christinacanvas.width-x, christinacanvas.width-y, 100, 0, Math.PI*2);
	catstoner.fillStyle = "black";
	catstoner.fill();
	catstoner.closePath();

	catstoner.beginPath();
	catstoner.arc(christinacanvas.width-x, y, 100, 0, Math.PI*2);
	catstoner.fillStyle = "black";
	catstoner.fill();
	catstoner.closePath();


	catstoner.beginPath();
	catstoner.arc(xx, yy, 100, 0, Math.PI*2);
	catstoner.fillStyle = "white";
	catstoner.fill();
	catstoner.closePath();

	catstoner.beginPath();
	catstoner.arc(xx, christinacanvas.width-yy, 100, 0, Math.PI*2);
	catstoner.fillStyle = "white";
	catstoner.fill();
	catstoner.closePath();


	catstoner.beginPath();
	catstoner.arc(christinacanvas.width-xx, christinacanvas.width-yy, 100, 0, Math.PI*2);
	catstoner.fillStyle = "white";
	catstoner.fill();
	catstoner.closePath();

	catstoner.beginPath();
	catstoner.arc(christinacanvas.width-xx, yy, 100, 0, Math.PI*2);
	catstoner.fillStyle = "white";
	catstoner.fill();
	catstoner.closePath();


		x += dx;
		y += dy;
		xx+= dxx;
		yy+= dyy;

		if (x  < 0 || x > christinaCanvas.width){
			dx = -dx;

		}

		if (xx  < 0 || xx > christinaCanvas.width){
			dxx = -dxx;
		}

		if (y < 0 || y > christinaCanvas.height  ){
			dy = -dy;
		
		}

		if (yy < 0 || yy > christinaCanvas.height  ){
			dyy = -dyy;
		}
		skating();
}





setInterval(girlfriend,10);
