
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/registration', index.registrationpage);
app.get('/home', index.homepage);
app.get('/pay', index.paypage);
app.get('/whiteboard', index.whiteboardpage);
app.get('/archives-station', index.archivepage);
app.get('/charge-station', index.chargepage);
app.get('/chat', index.chatpage);
app.get('/chatbyron', index.chatbyronpage);
app.get('/chatr', index.chatrpage);
app.get('/chatrenew', index.chatrenewpage);
app.get('/home2', index.home2page);
app.get('/homerenew', index.homerenewpage);
app.get('/paystation', index.paystationpage);
app.get('/register', index.registerpage);
app.get('/homeboot', index.homebootpage);
app.get('/home', index.homebootpage);
app.get('/homescreenboot', index.homescreenbootpage);
app.get('/modal', index.modalpage)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
