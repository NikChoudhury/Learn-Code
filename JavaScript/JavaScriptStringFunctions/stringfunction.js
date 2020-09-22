// JS - String Functions 




// The length property returns the length of a string
var string1 = "This is JavaScript";
var string2 = "this is JS";
console.log(string1.length); //The length property returns the length of a string
console.log(string2.length);

///////////////////////////////////////


/* The indexOf() method returns the index of (the position of) the first 
occurrence of a specified text in a string: */

var string3 = "This is JavaScript and i Love CSS";

console.log(string3.indexOf('This'));
console.log(string3.indexOf('CSS'));


/////////////////////////////////////////


/*The lastIndexOf() method returns
 the index of the last occurrence of a specified text in a string*/

var string4 = "This is JavaScript and i Love CSS";

console.log(string4.lastIndexOf('This'));
console.log(string4.lastIndexOf('Love'));


/////////////////////////////////////////////////////

// Get sub string function - substr(startPos, length)

var string5 = "This is JavaScript and i Love CSS";

console.log(string5.substr(0, 4));
console.log(string5.substr(1, 4));
console.log(string5.substr(2, 9));
console.log(string5.substr(10, 25));

///////////////////////////////////////////////

/*The search() method searches a string for 
a specified value and returns the position of the match:*/

var string6 = "This is JavaScript and i Love CSS";

console.log(string5.search("CSS"));
console.log(string5.search("is"));
console.log(string5.search("and"));


/////////////////////////////////////////

// slice() extracts a part of a string and returns the extracted part in a new string.


var string6 = "This is JavaScript and i Love CSS";

console.log(string5.slice(0,4));
console.log(string5.slice(10,19));