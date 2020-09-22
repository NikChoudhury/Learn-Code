var accountBalance=500;
var mobilePrice=700;
var coupon=250;

if (mobilePrice <= accountBalance) {
	accountBalance -=mobilePrice // accountBalance=accountBalance-mobilePrice
	console.log("You Should buy New phone");
	console.log("New Balance= "+ accountBalance);
}else if (mobilePrice-coupon <= accountBalance) {
	console.log("You Should buy New phone with coupon");
	// accountBalance -=mobilePrice-coupon;
	 accountBalance=accountBalance-(mobilePrice-coupon);
	console.log("New Balance= "+ accountBalance)
}else	{
	console.log("No Money");
}



