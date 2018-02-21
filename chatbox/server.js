var express = require('express');
var path = require('path'); 
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var crypto = require('crypto');
var routes = require('./router/index1');
							   

var app = express();
//enter the name of the database in the end 
//  var url = "mongodb://localhost:27017/mydb";
//  MongoClient.connect(url, function(err, db) {
// 	if (err) 
// 	throw err ;
// 	console.log("Database created!");
// 	db.close();
//   });
                                                    
													
app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/ui',routes);
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/ui', express.static(__dirname + '/ui'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
// var getHash = ( pass ) => {
				
//     var hmac = crypto.createHmac('sha512',email);
    
//     //passing the data to be hashed
//     data = hmac.update(pass);
//     //Creating the hmac in the required format
//     gen_hmac= data.digest('hex');
//     //Printing the output on the console
//     console.log("hmac : " + gen_hmac);
//     return gen_hmac;
// }
// Sign-up function starts here. . .
app.post('/sign_up' ,function(req,res){
	//var name = req.body.name;
	var email= req.body.email;
	var pass = req.body.password;
		//var phone = req.body.phone;
	// var password = getHash( pass , email ); 				

	
	var data = {
		// "name":name,
		"email":email,
		"password": password, 
		// "phone" : phone
	}

		//CREATING A COLLECTION IN MONGODB USING NODE.JS
		// db.collection("details").insertOne(data, (err , collection) => {
		// 	if(err) throw err;
		// 	console.log("Record inserted successfully");
		// 	console.log(collection);
		// });
	//});
	
// 	console.log("DATA is " + JSON.stringify(data) );
// 	res.set({
// 		'Access-Control-Allow-Origin' : '*'
// 	});
// 	return res.redirect('/ui/index.html');  

 });
													
