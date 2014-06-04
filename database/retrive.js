var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://CCSP_TEAM:CCSP@ds033709.mongolab.com:33709/fond');
// var db = mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
   console.log("db connected")
   });

var villaSchema = mongoose.Schema({
	Title: String,
	City: String,
	Distn: String,
	Villa: String,
	Year: String,
	Content: [{
		Header: String,
		Plan:String,
		Res: String,
	}]
});


var Villa = mongoose.model('villa', villaSchema)

exports.Villa = Villa
//
// Villa.find({Distn: "大安區"}, function(err, villas){
// 	console.log("get 大安區")
// 	for (var i = 0; i < villas.length; i++) {
// 		console.log(villas[i].Content);
// 	}
// });
