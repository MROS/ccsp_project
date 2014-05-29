mongoose = require 'mongoose'
fs = require 'fs'
mongoose.connect('mongodb://linux3.csie.ntu.edu.tw:50004/test')
# mongoose.connect('mongodb://localhost/test')
# mongoose.connect('mongodb://CCSP_TEAM:CCSP@ds033709.mongolab.com:33709/fond')

db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () -> console.log('DB connected'))

villaSchema = mongoose.Schema({
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

})
villaSchema.methods.show = () -> console.log this.City + this.Distn + this.Villa

Villa = mongoose.model('villa', villaSchema)
exports.villa = Villa
count = 0

writeOneDistn = (f_str) ->
	console.log f_str
	if f_str[2] == '區'
		fs.readFile '../data/fond_data/' + f_str, (err, data) ->
			console.log(err) if err
			for d in JSON.parse(data)
				count += 1
				console.log "now is " + count
				# console.log tmp
				tmp = new Villa(d)
				tmp.save((err, tmp) ->
					return console.log err if err
					tmp.show
				)
fs.readdir '../data/fond_data/', (err, files) ->
	for f in files
		writeOneDistn f
