var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

var User = require('./app/models/user');

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

app.post('/users', function(req,res){
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save();
    res.send('User created');
});

app.listen(port , function(req,res){
    console.log('Server started at '+port);
});