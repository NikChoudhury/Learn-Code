
// var a1 = document.getElementById('audio1');

/////######## KeyDown ###########/////////////////


document.body.addEventListener('keydown', function(e){
	var keyCode = e.keyCode;
	if (keyCode === 65) {
		document.getElementById('A').play();
		console.log("DwonA");
		document.getElementById("keyA").style.borderColor = "red";
		
	}

	if (keyCode === 83) {
		document.getElementById('S').play();
		console.log("DwonS")
		document.getElementById("keyS").style.borderColor = "red";
	}

	if (keyCode === 68) {
		document.getElementById('D').play();
		console.log("DwonD")
		document.getElementById("keyD").style.borderColor = "red";
	}

	if (keyCode === 70) {
		document.getElementById('F').play();
		console.log("DwonF")
		document.getElementById("keyF").style.borderColor = "red";
	}

	if (keyCode === 71) {
		document.getElementById('G').play();
		console.log("DwonG")
		document.getElementById("keyG").style.borderColor = "red";
	}

	if (keyCode === 72) {
		document.getElementById('H').play();
		console.log("DwonH")
		document.getElementById("keyH").style.borderColor = "red";
	}

	if (keyCode === 74) {
		document.getElementById('J').play();
		console.log("DwonJ")
		document.getElementById("keyJ").style.borderColor = "red";
	}

	if (keyCode === 75) {
		document.getElementById('K').play();
		console.log("DwonK")
		document.getElementById("keyK").style.borderColor = "red";
	}

	if (keyCode === 76) {
		document.getElementById('L').play();
		console.log("DwonL")
		document.getElementById("keyL").style.borderColor = "red";
	}
} );



/////######### KeyUp ############////////


document.body.addEventListener('keyup', function(e){
	var keyCode = e.keyCode;
	if (keyCode === 65) {
		document.getElementById('A').play();
		console.log("UpA");
		document.getElementById("keyA").style.borderColor = "blue";
		
	}

	if (keyCode === 83) {
		document.getElementById('S').play();
		console.log("UpS");
		document.getElementById("keyS").style.borderColor = "blue";
	}

	if (keyCode === 68) {
		document.getElementById('D').play();
		console.log("UpD")
		document.getElementById("keyD").style.borderColor = "blue";
	}

	if (keyCode === 70) {
		document.getElementById('F').play();
		console.log("UpF")
		document.getElementById("keyF").style.borderColor = "blue";
	}

	if (keyCode === 71) {
		document.getElementById('G').play();
		console.log("UpG")
		document.getElementById("keyG").style.borderColor = "blue";
	}

	if (keyCode === 72) {
		document.getElementById('H').play();
		console.log("UpH")
		document.getElementById("keyH").style.borderColor = "blue";
	}

	if (keyCode === 74) {
		document.getElementById('J').play();
		console.log("UpJ")
		document.getElementById("keyJ").style.borderColor = "blue";
	}

	if (keyCode === 75) {
		document.getElementById('K').play();
		console.log("UpK")
		document.getElementById("keyK").style.borderColor = "blue";
	}

	if (keyCode === 76) {
		document.getElementById('L').play();
		console.log("UpL")
		document.getElementById("keyL").style.borderColor = "blue";
	}
});

////////####KeyPress ##########//////////

document.body.addEventListener('keypress', function(e){
	var keyCode = e.keyCode;
	if (keyCode === 65) {
		document.getElementById('A').play();
		console.log("PressA");
		document.getElementById("keyA").style.borderColor = "red";
		
	}

	if (keyCode === 83) {
		document.getElementById('S').play();
		console.log("PressS")
		document.getElementById("keyS").style.borderColor = "red";
	}

	if (keyCode === 68) {
		document.getElementById('D').play();
		console.log("PressD")
		document.getElementById("keyD").style.borderColor = "red";
	}

	if (keyCode === 70) {
		document.getElementById('F').play();
		console.log("PressF")
		document.getElementById("keyF").style.borderColor = "red";
	}

	if (keyCode === 71) {
		document.getElementById('G').play();
		console.log("PressUpG")
		document.getElementById("keyG").style.borderColor = "red";
	}

	if (keyCode === 72) {
		document.getElementById('H').play();
		console.log("PressUpH")
		document.getElementById("keyH").style.borderColor = "red";
	}

	if (keyCode === 74) {
		document.getElementById('J').play();
		console.log("PressUpJ")
		document.getElementById("keyJ").style.borderColor = "red";
	}

	if (keyCode === 75) {
		document.getElementById('K').play();
		console.log("PressUpK")
		document.getElementById("keyK").style.borderColor = "red";
	}

	if (keyCode === 76) {
		document.getElementById('L').play();
		console.log("PressUpL")
		document.getElementById("keyL").style.borderColor = "red";
	}
});