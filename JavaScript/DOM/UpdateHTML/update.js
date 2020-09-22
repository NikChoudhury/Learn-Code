
console.log("Script Loaded");


var coundownElement = document.getElementById('coundown');
var inCoundownElement = coundownElement.innerHTML;
console.log(inCoundownElement);

var updateStyles = document.getElementById('background');



setInterval(function() {
	if (inCoundownElement > 0 ) {
		inCoundownElement -= 1;

	}else inCoundownElement = "Time Out";
	coundownElement.innerHTML = inCoundownElement;
	
	// console.log(inCoundownElement);

	// Update BackGround Color

	if (inCoundownElement % 2 === 0 ) {
		updateStyles.style.backgroundColor = 'red';
	} else updateStyles.style.backgroundColor = 'black';

	// console.log(updateStyles);

}, 1000);


// while (inCoundownElement !== 0){
// 	inCoundownElement -= 1;
// }
// coundownElement.innerHTML = inCoundownElement;




// coundownElement.style.fontSize = inCoundownElement * 100 +"px" ;
// 	console.log(inCoundownElement * 100 + "px");
