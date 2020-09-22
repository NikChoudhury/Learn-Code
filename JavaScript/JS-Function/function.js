
// JS - Function

function mSum(){ //function without argument
	var num1 = 10;
	var num2 = 20;
	var sum = num1 + num2;
	console.log(sum);
}
mSum();



////////////////////////////


function mSum1(){
	var num3 = 30;
	var num4 = 50;
	var sum1 = num3 + num4;
	return sum1;
	console.log("Not visible");
}
var totalSum = 10 + mSum1();
console.log(totalSum);


/////////////////////////////////////

function welcome (personName) {
	console.log("Welcome " + personName)
}
welcome("Nik");
welcome("Jack")

////////////////////////////////////////

function addition (number1=10, number2, number3) {
	console.log("Number1 = " + number1);
	console.log("Number2 = " + number2);
	console.log("Number3 = " + number3);
	// console.log(number1+number2+number3);
	if ( number3 !== undefined) {
		console.log(number1+number2+number3);
	}else{
		console.log(number1 + number2);
	};	

}

addition(20,20);
addition(20,30,42)
////////////////////////////////






