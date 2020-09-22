// JavaScript Loops


// While Loop


 // While Loop Syntax
/* 
while (condition) {
    code block to be executed
} 
*/

console.log("While Loop")
var i = 0;
while(i <= 10){
	
	console.log("Number is = " +i++);
}


//////////////////////////////////////////////////////////////////


// Foor Loop
 console.log("For Loop")
var mList = [1, 2, 3, 4, 5]
var pos;
for(pos = 0; pos < mList.length; pos++) {
	console.log('Position => ' + pos + ' Value => ' + mList[pos])
}


/////////

// Break Keyword
 console.log("Break Keyword")
var pos;
for(pos = 0; pos < mList.length; pos++) {
	if(pos >= 3) break
	console.log('Position => ' + pos + ' Value => ' + mList[pos])
}


/////////////////

// Continue Keyword

 console.log("Continue Keyword")

var pos;
for(pos = 0; pos < mList.length; pos++) {
	if(pos % 2 === 0) continue
	console.log('Position => ' + pos + ' Value => ' + mList[pos])
}


var pos;
for(pos = 0; pos < mList.length; pos++) {
	if(pos % 2 !== 0) continue
	console.log('Position => ' + pos + ' Value => ' + mList[pos])
}