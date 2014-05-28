fs = require 'fs'

show_location = (f_str) ->
	console.log f_str
	if f_str[2] == '區'
		fs.readFile '../data/fond_data/' + f_str, (err, data) ->
			console.log(err) if err
			for d in JSON.parse(data)
				console.log d.Title
		

fs.readdir '../data/fond_data/', (err, files) ->
	for f in files
		# console.log(f.constructor.name)
		show_location f
