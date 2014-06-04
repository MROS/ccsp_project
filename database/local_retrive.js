fs = require('fs')
path = require('path')

whole_data = {};
// console.log("start to open dir");

// console.log(path.resolve('../data/fond_data/'));

var files = fs.readdirSync('data/fond_data/');
for (var i = 0; i < files.length ; i++) {
	// console.log(files[i]);
	if (files[i][2] == '區') {
		var data = fs.readFileSync('data/fond_data/' + files[i]);
		var villas = JSON.parse(data);
		for (var j = 0; j < villas.length; j++) { 
			// console.log(villas[j].Villa);
			whole_data[villas[j].Villa] = villas[j].Content;
		}
	}
}

// console.log("readdir over");

exports.whole_data = whole_data
