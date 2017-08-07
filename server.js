var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'))
