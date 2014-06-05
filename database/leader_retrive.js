fs = require('fs')
path = require('path')

leader_data = {};
// console.log("start to open dir");

// console.log(path.resolve('../data/fond_data/'));

// console.log(files[i]);
var data = fs.readFileSync('data/里長資料/里長名單.json');
var leaders = JSON.parse(data);
for (var j = 0; j < leaders.length; j++) { 
	// console.log(villas[j].Villa);
	leaders[j].villa = leaders[j].villa.slice(0, 2);
	leader_data[leaders[j].villa] = leaders[j];
}

// console.log("readdir over");

exports.leader_data = leader_data
