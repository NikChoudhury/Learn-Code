
// JavaScript Objects


var car = {
	name : "Flate",
	model : 500,
	weight : "850kg",
	color : "White",
}

console.log(car);
console.log(car.name)

///////////////////////////////////////

var person ={
	firstname: "Nikumani",
	lastname: "Choudhury",
	age: 23,
	education:{
		HSLC: "JRP School",
		HS: "Buds Academy",
		Degree: "B.H. College", 
	},
	location:{
		vill: "Baregaon",
		PO : "Sorbhog",
		Dist : "Barpeta",
		State: "Assam",
	},
}

console.log(person);
console.log(person.education.Degree);
console.log(person.firstname +" is "+ person.age + " years old. And he completed is Degree from " + person.education.Degree);


/////////////////////////////////////////////////////////////////////////////////////////////////////


// Putting Object into Array and function

var students = [] ; //Empty Array

function Student(first,last,age){ //create a funtion
	this.fisrtName = first;  //this keyword
	this.lastName = last;
	this.age = age
	this.greeting = function(){
		return "Hi, I am " + this.fisrtName +" " +this.lastName + " and i am " + this.age + " years old !!"
	}
}

var s1 = new Student("Nik", "Choudhury", 23); //new keyword
console.log(s1);
console.log(s1.greeting());


students.push(new Student("Niku", "Das",25));
students.push(new Student("John", "Jr",19));
students.push(new Student("Bob", "Lee",29));

for(var index = 0; index<students.length; index++){
	var s = students[index];
	console.log(s.greeting());

}

////////////////////////////////////////////////////////////////////////////
