
var heading = document.getElementById("mainheading");
var fontDecrease = document.getElementById("btn-click");
var fontIncrease = document.getElementById("btn-click2");

// console.log(window.getComputedStyle(heading).fontSize);

var initialFontSize = window.getComputedStyle(heading).fontSize;
initialFontSize =parseInt(initialFontSize.substring(0, (initialFontSize.length - 2))); // Using substring ,length for convert FontSize value String to number

fontIncrease.onclick = function(){
	initialFontSize += 10;
	heading.style.fontSize = initialFontSize +"px"
}

fontDecrease.onclick = function(){
	initialFontSize -= 10;
	heading.style.fontSize = initialFontSize +"px"
}

//heading.style.fontSize =parseInt(initialFontSize) + 100 + "px"; 

