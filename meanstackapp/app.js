var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

var morgan = require('morgan');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tutorial', function(req,res,error){
    if(error){
        console.log('Not connected to the database ' +error );
    }
    else{
        console.log('Connected successfully to MongoDB');
    }
});


app.get('/', function(req,res){
   res.send("Hello World");
});

app.get('/help', function(req,res){
   res.send("Help Page");
});

app.listen(port , function(req,res){
    console.log('Server started at '+port);
});