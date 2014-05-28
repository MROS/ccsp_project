var mongoose = require('mongoose');
mongoose.connect('mongodb://CCSP_TEAM:CCSP@ds033709.mongolab.com:33709/fond');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
	console.log('DB connected');
});

var userSchema = mongoose.Schema({
	name: String,
	number: Number,
	languages: [String]
})

var User = mongoose.model('User', userSchema);
var a = new User({
	name: 'SAKANA',
	number: 981337,
	languages: ['English', 'Chinese', 'Japanese']
});

var b = new User({
	name: 'MROS',
	number: 984022,
	languages: ['Chinese', 'C/C++', 'Lisp', 'Haskell', 'Ocaml', 'Ruby']
});

a.save(function(err, a){
	if (err) {
		return console.error(err);
	}
});
b.save(function(err, a){
	if (err) {
		return console.error(err);
	}
});
