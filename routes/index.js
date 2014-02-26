// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('homeboot');
};

exports.registrationpage = function(req, res){
	res.render('registration');
};

exports.homepage = function(req, res){
	res.render('home');
};

exports.paypage = function(req, res){
	res.render('pay');
};

exports.whiteboardpage = function(req, res){
	res.render('whiteboard');
};

exports.archivepage = function(req, res){
	res.render('archives-station');
};

exports.chargepage = function(req, res){
	res.render('charge-station');
};

exports.chatpage = function(req, res){
	res.render('chat');
};

exports.chatbyronpage = function(req, res){
	res.render('chatbyron');
};

exports.chatrpage = function(req, res){
	res.render('chatr');
};

exports.chatrenewpage = function(req, res){
	res.render('chatrenew');
};

exports.home2page = function(req, res){
	res.render('home2');
};

exports.homerenewpage = function(req, res){
	res.render('homerenew');
};

exports.paystationpage = function(req, res){
	res.render('paystation');
};

exports.registerpage = function(req, res){
	res.render('register');
};


exports.homebootpage = function(req, res){
	res.render('homeboot');
};

exports.homescreenbootpage = function(req, res){
	res.render('homescreenboot');
};
