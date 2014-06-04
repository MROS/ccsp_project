
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var Villa = require('retrive').Villa

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/lib/*', function(request, response) {
    response.sendfile(path.resolve("." + request.url));
});

app.get('/public/*', function(request, response) {
    response.sendfile(path.resolve("." + request.url));
});

app.get('/views/*', function(request, response) {
    response.sendfile(path.resolve("." + request.url));
});

app.get('/', routes.home);
app.get('/users', user.list);

// 獲取里訊息
app.get('/villa?*', function(request, response) {
	var str = request.url
	var villa = str.slice(str.search(/\?/) + 1, str.length);
	console.log(decodeURI(villa));
	console.log(typeof villa);
});

normal_page = ['lib/bootstrap-3.1.1-dist/']

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
