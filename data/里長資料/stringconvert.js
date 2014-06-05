var fs = require('fs');

var villagelist = JSON.parse(fs.readFileSync('里長名單.json', 'utf8'));
fs.writeFile('里長名單.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
