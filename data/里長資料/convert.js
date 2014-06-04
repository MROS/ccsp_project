<!--從公告中抓出 結算表連結 再下載檔案--!>

var url = 'https://raw.githubusercontent.com/MROS/ccsp_project/master/data/%E9%87%8C%E9%95%B7%E8%B3%87%E6%96%99/%E9%87%8C%E9%95%B7%E5%90%8D%E5%96%AE.html';
var request = require('request')
  , cheerio = require('cheerio')
  , iconv = require('iconv-lite')
  , fs = require('fs')
  , http = require('http');
var content = {};
var villagelist = [];

	request(url, function(err, response, body) {
			$ = cheerio.load(body)
			links = $('table').find('tr');
			$(links).each(function(i, links){
				var mtitle = $(links).find('td').eq(0).text();
        var dist = $(links).find('td').eq(1).text();
        var villa = $(links).find('td').eq(2).text();
        var nam = $(links).find('td').eq(3).text();
        var phone = $(links).find('td').eq(4).text();
        var cell = $(links).find('td').eq(5).text();
        var addr = $(links).find('td').eq(6).text();
				// console.log(cell);
        var content = { dist: dist, villa: villa, name: nam, phone: phone, cellphone: cell, address: addr};
        villagelist.push(content);
			});
			// console.log(villagelist[400]);
	});


setTimeout(
  function(){
    console.log(villagelist);
    console.log(villagelist.length);
    fs.writeFile('里長名單.json', JSON.stringify(villagelist, null, 4), function(err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});
  },
  8*1000
);
