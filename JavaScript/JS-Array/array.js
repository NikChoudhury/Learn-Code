
///////////////////// JavaScript Array ////////////////////


var cars = ["BMW", "Audi", "Volvo"];
var nums = [10, 12, 52];
console.log(cars);
console.log(typeof(cars));
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[1]);
console.log(nums);


//Update Value
var bikes = ["BMW", "Audi", "Volvo"];
console.log(bikes);

bikes[1] = "Hero";
console.log(bikes); 

//////////////////////////////////

// Add more items

var lang = ["HTML", "CSS", "C++"]
console.log(lang);

lang[3] ="JavaScript";
console.log(lang);

lang.push("C");
console.log(lang); //The push() method adds a new element to an array (at the end)
lang.push("PHP")
console.log(lang);

lang.unshift("SQL") //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(lang); 

//////////////////////////////////////////////////////////////////////////


// Delete a value
var item = ["item1", "item2", "item3", "item4", "item5"];
console.log(item);

item.pop();    //The pop() method returns the value that was "popped out".
console.log(item);
item.pop();
console.log(item);
item.pop();
console.log(item);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
item.shift();     
console.log(item)


var vowels = ["A", "E", "I", "O", "U"];
console.log(vowels);

delete vowels[0];   //// Changes the first element in vowels to undefined
console.log(vowels); ///Using delete may leave undefined holes in the array

///////////////////////////////////////////////////////////////////////////////////

// The splice() method can be used to add new items to an array

var books = ["books1", "books2", "books3", "books4",]
console.log(books);

books.splice(2, 0, "book6"); //The first parameter (2) defines the position where new elements should be added (spliced in).
console.log(books);			//The second parameter (0) defines how many elements should be removed.
							//The rest of the parameters ("") define the new elements to be added.
books.splice(0, 1, "book7");
console.log(books);

//////////////////////////////////////////////////////////////////

// The concat() method creates a new array by merging (concatenating) existing arrays.

var car = ["Car1", "Car2", "Car3"];
console.log(car);
var bike = ["Bike1", "Bike2", "Bike3"];
console.log(bike);

var careAndBike = car.concat(bike);
console.log(careAndBike);

///////////////////////////////////////////////////////////////////

//Sorting Ascending and Descending
careAndBike.sort();
console.log(careAndBike);

careAndBike.reverse();
console.log(careAndBike);
//////////////////////////////////////////////////////////////////


