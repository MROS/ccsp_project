var fs = require('fs');

var villagelist = JSON.parse(fs.readFileSync('Xinyidistfonddata.json', 'utf8'));
// var villagelist = obj;
// var villagelist = JSON.parse(stri);

fs.writeFile('信義區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});