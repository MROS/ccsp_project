var mongoose = require('mongoose');
var fs = require('fs');
// var db = mongoose.connect('mongodb://CCSP_TEAM:CCSP@ds033709.mongolab.com:33709/fond');
// var db = mongoose.connect('mongodb://localhost/test');

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


var db = mongoose.connect('mongodb://linux3.csie.ntu.edu.tw:50004/test');
var Villa = mongoose.model('villa', villaSchema)

exports.Villa = Villa
//
// Villa.find({Distn: "大安區"}, function(err, villas){
// 	console.log("get 大安區")
// 	for (var i = 0; i < villas.length; i++) {
// 		console.log(villas[i].Content);
// 	}
// });
