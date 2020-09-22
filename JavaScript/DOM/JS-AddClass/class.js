
// JS- Add And Remove Class

var heading = document.getElementById("mainheading");
heading.classList.add("big"); //add - For adding a new class

var btn1 = document.getElementById("btn-click");
var btn2 = document.getElementById("btn-click2");



// setTimeout(function() {
// 	heading.classList.remove("big"); 
// }, 1500);

btn1.addEventListener('click', function (){
	heading.classList.remove("big");        //remove -For remove a class
});

btn2.addEventListener('click', function (){
	heading.classList.add("big");        //remove -For remove a class
});