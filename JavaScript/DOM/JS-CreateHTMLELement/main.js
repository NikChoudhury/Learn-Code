var button = document.getElementById("btn");
var ulist = document.getElementById("uList");
  

button.addEventListener("click", function(){
	var input = document.getElementById("itemInput").value;
	if (!input) {
		alert("Please Enter Value");
	} else {
		var newListElement = document.createElement("li"); //"createElement" ----> Create New HTML element
		var textNode = document.createTextNode((ulist.childElementCount+1)+"."+ input ); //"createTextNode" ------> Create New text Node 
		newListElement.appendChild(textNode);
		newListElement.id = input + (ulist.childElementCount+1) ;

		ulist.appendChild(newListElement);
		// childElementCount" ----->Child element count property
		console.log(newListElement);
		console.log(newListElement.id);
		
	}
})
