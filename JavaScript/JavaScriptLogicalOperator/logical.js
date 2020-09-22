

// Logical Operator 
var cat1 = 10;
var cat2 = 20;
var cat3 = 5 ;
var cat3Handicap = true;

if (cat1 > cat2 && cat1 > cat3 && !cat3Handicap) {
	console.log("Cat 1 is cutest");
} else if(cat2 > cat1 && cat2 > cat3 && !cat3Handicap){
	console.log("Cat 2 is cutest");
} else if(cat3 > cat1 && cat3 > cat2 || cat3Handicap){
	console.log("Cat 3 is cutest");
}



//  || - OR
// && - And
// ! - Not