var Villa = require('../database/retrive').Villa;

// 在Villa.find(obj)之中
// 若obj為{Distn: "XX區"}，可得此區所有里之陣列
// 若obj為{Villa: "XX里"}，可得此里之陣列，注意，依舊是陣列
Villa.find({Distn: "大安區"}, function(err, villas) {
	for (var i = 0; i < villas.length; i++) {
		console.log(villas[i].Villa);
	}
});
