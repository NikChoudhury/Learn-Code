var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// JSON OBJECT
var items = [
	{
		"id" : "jsjsjsjj",
		"text" : "Milk"
	},
	{
		"id" : "3737373gsgs",
		"text" : "EGG"
	},
	{
		"id" : "jjchhchcjj",
		"text" : "Butter"
	},
	{
		"id" : "j535526272j",
		"text" : "Cake"
	}

]

// get Requset
app.get('/items',function(req,res){
	res.send(items);
});

// Post Request (Add New Data)
app.post('/items', function(req, res){
	var item = req.body;
	if(!item || item.text === ""){
		res.status(500).send({error: "ERROR"})
	} else{
		items.push(item);
		res.status(200).send(items);
	}
})


// Put Request (Update Data)
app.put('/items/:itemId', function(req, res){
	var newText = req.body.text;
	if (!newText || newText ==="") {
		res.status(500).send({error:"You Must Provide Item name"})
	}else {
		var objectFound = false;
		for(var x = 0; x<items.length; x++){
			var itm = items[x];

			if (itm.id === req.params.itemId) {
				items[x].text = newText;
				objectFound = true;
				break;
			}
		}
		if (!objectFound) {
			res.status(500).send({error:"ID is not found"})
		}else {
			res.send(items);
		}
	}
})


// Delete Request
// app.delete('items/:itemId', function(req, res){
// 	var objectFound = false;
// 	// for(var x = 0; x<items.length; x++){
// 	// 	var itm = items[x];

// 		if (items.id === req.params.itemId) {
// 			items.splice();
// 			res.status(500).send({error:"Item is deleted"})
// 			objectFound = true;
// 			break;
// 		}
// 	// }
// 	if (!objectFound) {
// 		res.status(500).send({error:"ID is not found"})
// 	}else {
// 		res.send(items);
// 	}

// })




app.listen(3000,function(){
	console.log("Fist API is Running on Port 3000!");
});