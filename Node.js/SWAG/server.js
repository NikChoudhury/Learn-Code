// Require packages
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Database Connection 
var db = mongoose.connect('mongodb://localhost/swag-shop');

//Connection Models
var Product = require('./model/product'); 
var WishList = require('./model/wishlist');


var app =express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// POST Products

app.post('/product', function(request, respons){
	var product = new Product();
	product.title = request.body.title;
	product.price = request.body.price;
	product.save(function(err, saveProduct){
		if (err) {
			respons.status(500).send({error: "Could Not Save Prouduct"})
		}else {
			respons.status(200).send(saveProduct);
		}
	})
})


// GET Product
app.get('/product', function(request, response){
	Product.find({},function(err, products){
		if (err) {
			response.status(500).send({error: "Could not fetch products"});
		}else {
			response.send(products);
		}
	});
});


// Create Wishlist
app.post('/wishlist', function(request, response){
	var wishList = new WishList();
	wishList.title = request.body.title;
	wishList.save(function(err, newWhishList){
		if (err) {
			response.status(500).send({error:"Could not Create WishList"});
		}else {
			response.send(newWhishList);
		}
	});
});

// Get Wishlist
app.get('/wishlist', function(request, response) {
   WishList.find({}).populate({path:'products', model: 'Product'}).exec(function(err, wishLists) {
       if (err) {
           response.status(500).send({error:"Could not fetch wishlists"});
       } else {
           response.status(200).send(wishLists);
       }
   })
});

// Update WishList

app.put('/wishlist/product/add', function(request, response) {
   Product.findOne({_id: request.body.productId}, function(err, product) {
       if (err) {
           response.status(500).send({error:"Could not add item to wishlist"});
       } else {
           WishList.update({_id:request.body.wishListId}, {$addToSet:{products: product._id}}, function(err, wishList) {
               if (err) {
                   response.status(500).send({error:"Could not add item to wishlist"});
               } else {
                   response.send("Successfully added to wishlist");
               }
           });
       }
   })
});


// Listen
app.listen(3000,function(){
	console.log("Swag Shop running on port 3000 ....!");
})

