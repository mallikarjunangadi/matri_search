var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var db = require('./dbconfig/db')
var port = process.env.PORT || 8080;

mongoClient.connect(db.url, function(err, db) {
    if(err) {
        console.log(err);
    }
  require('./app/routes')(app, db, __dirname);
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'))

app.listen(port);