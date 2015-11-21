var express = require('express');
var app = express();
var PORT = 9000;

app.set('port', (process.env.PORT || PORT));

app.get('/', function(req, res){
	res.send('This is my Node app and it works on Heroku');
});

app.listen(app.get('port'), function(){
	console.log('Server running on PORT, %s', app.get('port'));
});