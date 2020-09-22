
// JS- Events

var btn = document.getElementById('btn-click');

var mainDiv = document.querySelector("header div");
console.log(mainDiv);

function onBtnClick() {

	var randomRgb = Math.floor(Math.random() * 255);
	// console.log(randomRgb)
	mainDiv.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) +", "+ Math.floor(Math.random() * 255) +")";
}

btn.addEventListener('click', onBtnClick);