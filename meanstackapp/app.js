var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname +'/public'));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/tutorial', function (req, res, error) {
    if (error) {
        console.log('Not connected to the database ' + error);
    } else {
        console.log('Connected successfully to MongoDB');
    }
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function (req, res) {
    console.log('Server started at ' + port);
});