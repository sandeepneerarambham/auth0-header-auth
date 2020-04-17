
// var bodyParser = require('body-parser');

// var fs = require('fs');

// var request = require('request');

// var session = require("express-session");

//*******************************************/

module.exports = function (app) {

	app.get('/', function(req, res, next) {

		res.send("hello!!!")

	});

	app.get('/test', function(req, res, next) {

		res.send("hello!!!")

	});


	
}