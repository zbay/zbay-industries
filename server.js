//https://www.npmjs.com/package/mysql
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var api = require('./controllers');
var React = require('react');
var dotenv = require('dotenv').load();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//Routes(app);

console.log("Listening on Port 8080");
var server = app.listen(process.env.PORT || 8080);
});
