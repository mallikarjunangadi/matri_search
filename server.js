var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var db = require('./dbconfig/db');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'));

mongoClient.connect(db.url, function(err, db) {
    if(err) {
        console.log(err);
    }
  require('./app/routes')(app, db, __dirname);
})

app.listen(port);
console.log('server started at 8080');