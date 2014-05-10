
/*
 * GET home page.
 */

var fs = require("fs");
var path = require("path");

exports.generalPage = function(path) {
    return function(request, response) {
      response.sendfile(path.resolve(path));
  }
};

exports.home = function(request, response){
  // res.render('index', { title: 'Express' });
  response.sendfile(path.resolve("views/index.html"));
};
