var express = require('express');
var app = express();
var PORT = 9000;

app.get('/', function(req, res){
	res.send('This is my Node app and it works on Heroku');
});

app.listen(PORT, function(){
	console.log('Server running on PORT, %s', PORT);
});