// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('index');
};

exports.register = function(req, res){
	res.render('registration');
};

exports.homepage = function(req, res){
	res.render('home');
};