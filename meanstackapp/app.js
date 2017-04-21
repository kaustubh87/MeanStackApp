var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var morgan = require('morgan');

app.get('/', function(req,res){
   res.send("Hello World");
});


app.listen(port , function(req,res){
    console.log('Server started at '+port);
});