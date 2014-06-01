var fs = require('fs');

var villagelist = JSON.parse(fs.readFileSync('Beitoudistfonddata.json', 'utf8'));
fs.writeFile('北投區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});