
var songPlay =document.getElementById("imageclass")

songPlay.addEventListener('click', function(){
	var aa = songPlay.getAttribute("data-switch");
	console.log(aa);
 	// if (aa == 0) {
 	// 	console.log("ok0")
 	// }
 	// if (aa == 1) {
 	// 	console.log("ok1")
 	// }
 	// if (aa == 2) {
 	// 	console.log("ok2")
 	// }

 	switch (aa) {
 		case 0:
 			console.log("ok0")
 			break;
 		case 1:
 			console.log("ok1")
 			break;
 		default:
 		    console.log('default');
 	}
});