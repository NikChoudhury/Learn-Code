

// JavaScript Number Functions


//The toString() method returns a number as a string.
var number1 = 10;
var number2 =11.5;

console.log(number1.toString()); 
console.log(number2.toString()); 

////////////////////////////////////

// parseInt() string numeral as input and returns a number
var number3 = "11";
var number4 = 233.12131313;
var number5 = "Abc"
console.log(parseInt(number3));
console.log(parseInt(number4));
console.log(parseInt(number5));  // return NaN - Not a Number.

///////////////////////////////////////


// parseFloat() string numeral as an input and returns a foating
var number6 = "99.6645";
console.log(parseFloat(number6));

///////////////////////////////////////


// toFixed() takes floating number and rounds it off to given position


var number7 = 555.545465414

console.log(number7.toFixed());
console.log(number7.toFixed(2));
console.log(number7.toFixed(4));
console.log(number7.toFixed(7));


///////////////////////////////

// toExponential() returns a string, 
//with a number rounded and written using exponential notation.

var number8 =25.634645;

console.log(number8.toExponential());
console.log(number8.toExponential(2));
console.log(number8.toExponential(4));

///////////////////////////////////////

// valueOf() returns a number as a number.

var number9 = 123;
var number10 = 123 + 23;

console.log(number9.valueOf());
console.log(number10.valueOf());


var x = Number.MAX_VALUE;
console.log(x);