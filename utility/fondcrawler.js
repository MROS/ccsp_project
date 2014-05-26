var Daanpage = "/cgi-bin/SM_theme?page=437964ec";
var url = 'http://163.29.36.87';
var request = require('request')
  , cheerio = require('cheerio')
  , iconv = require('iconv-lite')
  , fs = require('fs')
  , http = require('http');
var Daandistlist = [], Daandistlink = [], Daan = [];

request({ url: url + Daanpage, encoding:null }, function(err, response, body) {
  if (!err && response.statusCode == 200) {
    var str = iconv.decode(new Buffer(body), "big5");
    $ = cheerio.load(str)
    links = $('.liURL');
	$(links).each(function(i, links){
		var distname = $(links).text(), distlink = $(links).attr('href');
		Daandistlist.push(distname);
		Daandistlink.push(distlink);
		console.log(distname + '\t' + distlink);
	});
  }
});

setTimeout(
  function(){
  	for (var i=0;i<Daandistlink.length;i++) {
  		var cont = { nam: Daandistlist[i], linkurl: Daandistlink[i] }
  		Daan.push(cont);
  	}
 //    console.log(JSON.stringify(Daan[0]));
 //    fs.writeFile('Nangangdist.json', JSON.stringify(Daan), function(err) {
	// 	if (err) throw err;
	// 	console.log('It\'s saved!');
	// });
  },
  2*1000
);

setTimeout(
	function() {
		var i = 12;
		// console.log(Daandistlist.length);
		visitvillage(url, Daan[i].nam, Daan[i].linkurl);
		visitvillage(url, Daan[i+1].nam, Daan[i+1].linkurl);
		visitvillage(url, Daan[i+2].nam, Daan[i+2].linkurl);
		// visitvillage(url, Daan[i+3].nam, Daan[i+3].linkurl);
		// visitvillage(url, Daan[i+4].nam, Daan[i+4].linkurl);
	// for (var i=0;i<Daandistlist.length;i++) {
		// console.log(Daan[i].linkurl);
		// var villageurl = Daan[i].linkurl;
		// visitvillage(url, villageurl);
	// setTimeout(
	// 	function() {
	// 		console.log(Daan[i].linkurl)
	// 		// visitvillage(url, Daan[i].link);
	// 	},
	// 	3*1000
	// );
	// }

	},
	5*1000
);
setTimeout(
	function() {
		var i = 17;
		visitvillage(url, Daan[i].nam, Daan[i].linkurl);
		visitvillage(url, Daan[i+1].nam, Daan[i+1].linkurl);
		visitvillage(url, Daan[i+2].nam, Daan[i+2].linkurl);
		// visitvillage(url, Daan[i+3].nam, Daan[i+3].linkurl);
	},
	10*1000
);


<!-- 包成function以供不同區使用 --!>
/*
var visitvil = function(villagename, villagelink) {
	request({ url: url + villagelink, encoding:null }, function(err, response, body) {
		if (!err && response.statusCode == 200) {
			var str = iconv.decode(new Buffer(body), "big5");
		$ = cheerio.load(str)
		links = $('td.list table tbody tr td').eq(1);
		$(links).each(function(i, links){
			var distname = $(links).text(), distlink = $(links).attr('href');
			Daandistlist.push(distname);
			Daandistlink.push(distlink);
			console.log(distname + '\t' + distlink);
		});
		}
	});
}*/


var visitvillage = function(url, villagename, villagelink) {
var fondlink = [];
request({ url: url + villagelink, encoding:null }, function(err, response, body) {
	if (!err && response.statusCode == 200) {
		var str = iconv.decode(new Buffer(body), "big5");
		$ = cheerio.load(str)
		links = $('td.list').first().parent('tr').parent('table').children().find('tr').eq(4).find('a').attr('href');
		// console.log('---visitvillage---\n' + url + links + '\n---visitvillage---\n');
		getfonfile(url, villagename, links);
	}
});
};

var getfonfile = function(url, villagename, fondpagelink) {

request({ url: url + fondpagelink, encoding:null }, function(err, response, body) {
	var fondtitle = [], fondlink = [];
	if (!err && response.statusCode == 200) {
		var str = iconv.decode(new Buffer(body), "big5");
		$ = cheerio.load(str)
		links = $('td.main').find('td.embed_td_2').find('a.message-main');
		$(links).each(function(i, links){
			var mtitle = $(links).text();
			var check = mtitle.indexOf('算表') > 0;
			var checkv = mtitle.indexOf('里鄰') > 0;
			if (check && checkv) {
				fondtitle.push(mtitle);
				fondlink.push($(links).attr('href'));
			}
		});
		getfile(url, villagename, fondlink[0]);
	}
});
};

var getfile = function(url, villagename, fondfilepagelink) {

request({ url: url + fondfilepagelink, encoding:null }, function(err, response, body) {
	if (!err && response.statusCode == 200) {
		var str = iconv.decode(new Buffer(body), "big5");
		$ = cheerio.load(str)
		links = $('span.embed_title').find('a');
		filetitle = $(links).text();
		filelink = url + $(links).attr('href');
		// console.log(filetitle /*+ "\n" + filelink*/);
		console.log(villagename + "經費收支結算表");
		var file = fs.createWriteStream("南港區" + villagename + "經費收支結算表.xls");
		var request = http.get(filelink, function(response) {
			response.pipe(file);
		});
	}
});
};