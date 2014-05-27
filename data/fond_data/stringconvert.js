var fs = require('fs');

var villagelist = JSON.parse(fs.readFileSync('Beitoudistfonddata.json', 'utf8'));
fs.writeFile('北投區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
var villagelist = JSON.parse(fs.readFileSync('Daandistfonddata.json', 'utf8'));
fs.writeFile('大安區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
var villagelist = JSON.parse(fs.readFileSync('Nangangdistfonddata.json', 'utf8'));
fs.writeFile('南港區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
var villagelist = JSON.parse(fs.readFileSync('Songshandistfonddata.json', 'utf8'));
fs.writeFile('松山區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
var villagelist = JSON.parse(fs.readFileSync('Beitoudistfonddata.json', 'utf8'));
fs.writeFile('北投區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});
var villagelist = JSON.parse(fs.readFileSync('Wanhuadistfonddata.json', 'utf8'));
fs.writeFile('萬華區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});// Wanhuadistfonddata.json
var villagelist = JSON.parse(fs.readFileSync('Xinyidistfonddata.json', 'utf8'));
fs.writeFile('信義區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});// Xinyidistfonddata.json
var villagelist = JSON.parse(fs.readFileSync('Zhongzhengdistfonddata.json', 'utf8'));
fs.writeFile('中正區經費資料.json', JSON.stringify(villagelist, null, 4), function(err) {
	if (err) throw err;
	console.log('It\'s saved!');
});// Zhongzhengdistfonddata.json