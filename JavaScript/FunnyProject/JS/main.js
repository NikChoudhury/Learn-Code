


/*##########################################################*/

var rakuDaAudio = document.getElementById("A");
var isPlaying = false;

function rakudaPlay(){
	if (isPlaying) {
		rakuDaAudio.pause();
		rakuDaAudio.currentTime = 0;
	}else {
		rakuDaAudio.play();
	}

	rakuDaAudio.onplaying = function(){
		isPlaying = true;
	};

	rakuDaAudio.onpause = function(){
		isPlaying = false;
	};

};

var lokhiDaAudio = document.getElementById("B");
function lokhiDaPlay(){
	if (isPlaying) {
		lokhiDaAudio.pause();
		lokhiDaAudio.currentTime = 0;
	}else {
		lokhiDaAudio.play();
	}
}
lokhiDaAudio.onplaying = function(){
	isPlaying = true;
};

lokhiDaAudio.onpause = function(){
	isPlaying = false;
};



/*####################################################*/
 


/*##################################################*/
// Rakuda Photo
// To Play
// var rakuDaPhoto = document.getElementById("rakuDa")
// var a = document.getElementById('A');

// rakuDaPhoto.addEventListener('click', function(){
// 	var dataPlay = rakuDaPhoto.getAttribute("dataplay").value ;
// 	if (dataPlay ) {
// 		// statement
// 	}

// 	a.play();
// 	console.log("Clicked");
// },false);

// var lokhiDa = document.getElementById("lokhiDa");

// lokhiDa.addEventListener('click', function(){
// 	document.getElementById('B').play();
// 	a.pause();
// 	a.currentTime = 0;
// 	console.log("Clicked Lokhi");
// },false)


// To Stop

// var rakuDaPhoto = document.getElementById("rakuDa")

// rakuDaPhoto.addEventListener('dblclick', function(){
// 	document.getElementById('A').pause();
// 	console.log("Double Clicked");
// })


/*###################################################*/





// 